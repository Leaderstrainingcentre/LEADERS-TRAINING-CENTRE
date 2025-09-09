
const db = require('../models');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class MachineryDBApi {

    static async create(data, options) {
        const currentUser = (options && options.currentUser) || { id: null };
        const transaction = (options && options.transaction) || undefined;

        const machinery = await db.machinery.create(
            {
                id: data.id || undefined,

        machine_name: data.machine_name
        ||
        null
            ,

        maintenance_schedule: data.maintenance_schedule
        ||
        null
            ,

        downtime_hours: data.downtime_hours
        ||
        null
            ,

            importHash: data.importHash || null,
            createdById: currentUser.id,
            updatedById: currentUser.id,
    },
        { transaction },
    );

        return machinery;
    }

    static async bulkImport(data, options) {
        const currentUser = (options && options.currentUser) || { id: null };
        const transaction = (options && options.transaction) || undefined;

        // Prepare data - wrapping individual data transformations in a map() method
        const machineryData = data.map((item, index) => ({
                id: item.id || undefined,

                machine_name: item.machine_name
            ||
            null
            ,

                maintenance_schedule: item.maintenance_schedule
            ||
            null
            ,

                downtime_hours: item.downtime_hours
            ||
            null
            ,

            importHash: item.importHash || null,
            createdById: currentUser.id,
            updatedById: currentUser.id,
            createdAt: new Date(Date.now() + index * 1000),
    }));

        // Bulk create items
        const machinery = await db.machinery.bulkCreate(machineryData, { transaction });

        return machinery;
    }

    static async update(id, data, options) {
        const currentUser = (options && options.currentUser) || {id: null};
        const transaction = (options && options.transaction) || undefined;

        const machinery = await db.machinery.findByPk(id, {}, {transaction});

        const updatePayload = {};

        if (data.machine_name !== undefined) updatePayload.machine_name = data.machine_name;

        if (data.maintenance_schedule !== undefined) updatePayload.maintenance_schedule = data.maintenance_schedule;

        if (data.downtime_hours !== undefined) updatePayload.downtime_hours = data.downtime_hours;

        updatePayload.updatedById = currentUser.id;

        await machinery.update(updatePayload, {transaction});

        return machinery;
    }

    static async deleteByIds(ids, options) {
        const currentUser = (options && options.currentUser) || { id: null };
        const transaction = (options && options.transaction) || undefined;

        const machinery = await db.machinery.findAll({
            where: {
                id: {
                    [Op.in]: ids,
                },
            },
            transaction,
        });

        await db.sequelize.transaction(async (transaction) => {
            for (const record of machinery) {
                await record.update(
                    {deletedBy: currentUser.id},
                    {transaction}
                );
            }
            for (const record of machinery) {
                await record.destroy({transaction});
            }
        });

        return machinery;
    }

    static async remove(id, options) {
        const currentUser = (options && options.currentUser) || {id: null};
        const transaction = (options && options.transaction) || undefined;

        const machinery = await db.machinery.findByPk(id, options);

        await machinery.update({
            deletedBy: currentUser.id
        }, {
            transaction,
        });

        await machinery.destroy({
            transaction
        });

        return machinery;
    }

    static async findBy(where, options) {
        const transaction = (options && options.transaction) || undefined;

        const machinery = await db.machinery.findOne(
            { where },
            { transaction },
        );

        if (!machinery) {
            return machinery;
        }

        const output = machinery.get({plain: true});

        return output;
    }

    static async findAll(filter, options) {
        const limit = filter.limit || 0;
        let offset = 0;
        let where = {};
        const currentPage = +filter.page;

        const user = (options && options.currentUser) || null;

        offset = currentPage * limit;

        const orderBy = null;

        const transaction = (options && options.transaction) || undefined;

        let include = [];

        if (filter) {
            if (filter.id) {
                where = {
                    ...where,
                    ['id']: Utils.uuid(filter.id),
                };
            }

                if (filter.machine_name) {
                    where = {
                        ...where,
                        [Op.and]: Utils.ilike(
                            'machinery',
                            'machine_name',
                            filter.machine_name,
                        ),
                    };
                }

            if (filter.maintenance_scheduleRange) {
                const [start, end] = filter.maintenance_scheduleRange;

                if (start !== undefined && start !== null && start !== '') {
                    where = {
                        ...where,
                    maintenance_schedule: {
                    ...where.maintenance_schedule,
                            [Op.gte]: start,
                    },
                };
                }

                if (end !== undefined && end !== null && end !== '') {
                    where = {
                        ...where,
                    maintenance_schedule: {
                    ...where.maintenance_schedule,
                            [Op.lte]: end,
                    },
                };
                }
            }

            if (filter.downtime_hoursRange) {
                const [start, end] = filter.downtime_hoursRange;

                if (start !== undefined && start !== null && start !== '') {
                    where = {
                        ...where,
                    downtime_hours: {
                    ...where.downtime_hours,
                            [Op.gte]: start,
                    },
                };
                }

                if (end !== undefined && end !== null && end !== '') {
                    where = {
                        ...where,
                    downtime_hours: {
                    ...where.downtime_hours,
                            [Op.lte]: end,
                    },
                };
                }
            }

            if (filter.active !== undefined) {
                where = {
                    ...where,
                    active: filter.active === true || filter.active === 'true'
                };
            }

            if (filter.createdAtRange) {
                const [start, end] = filter.createdAtRange;

                if (start !== undefined && start !== null && start !== '') {
                    where = {
                        ...where,
                        ['createdAt']: {
                            ...where.createdAt,
                            [Op.gte]: start,
                        },
                    };
                }

                if (end !== undefined && end !== null && end !== '') {
                    where = {
                        ...where,
                        ['createdAt']: {
                            ...where.createdAt,
                            [Op.lte]: end,
                        },
                    };
                }
            }
        }

        const queryOptions = {
            where,
            include,
            distinct: true,
            order: filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction: options?.transaction,
            logging: console.log
        };

        if (!options?.countOnly) {
            queryOptions.limit = limit ? Number(limit) : undefined;
            queryOptions.offset = offset ? Number(offset) : undefined;
        }

        try {
            const { rows, count } = await db.machinery.findAndCountAll(queryOptions);

            return {
                rows: options?.countOnly ? [] : rows,
                count: count
            };
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    static async findAllAutocomplete(query, limit, offset) {
        let where = {};

        if (query) {
            where = {
                [Op.or]: [
                    { ['id']: Utils.uuid(query) },
                    Utils.ilike(
                        'machinery',
                        'machine_name',
                        query,
                    ),
                ],
            };
        }

        const records = await db.machinery.findAll({
            attributes: [ 'id', 'machine_name' ],
            where,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            orderBy: [['machine_name', 'ASC']],
        });

        return records.map((record) => ({
            id: record.id,
            label: record.machine_name,
        }));
    }

};

