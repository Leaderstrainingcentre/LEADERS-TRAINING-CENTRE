module.exports = {
    /**
     * @param {QueryInterface} queryInterface
     * @param {Sequelize} Sequelize
     * @returns {Promise<void>}
     */
    async up(queryInterface, Sequelize) {
        /**
         * @type {Transaction}
         */
        const transaction = await queryInterface.sequelize.transaction();
        try {

                    await queryInterface.createTable('users', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('human_resources', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('inventory', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('machinery', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('quality_control', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('raw_materials', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('suppliers', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.createTable('work_orders', {
                        id: {
                            type: Sequelize.DataTypes.UUID,
                            defaultValue: Sequelize.DataTypes.UUIDV4,
                            primaryKey: true,
                        },
                        createdById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        updatedById: {
                            type: Sequelize.DataTypes.UUID,
                            references: {
                                key: 'id',
                                model: 'users',
                            },
                        },
                        createdAt: { type: Sequelize.DataTypes.DATE },
                        updatedAt: { type: Sequelize.DataTypes.DATE },
                        deletedAt: { type: Sequelize.DataTypes.DATE },
                        importHash: {
                            type: Sequelize.DataTypes.STRING(255),
                            allowNull: true,
                          unique: true, 
                        },
                    }, { transaction });

                    await queryInterface.addColumn(
                      'users',
                      'firstName',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'lastName',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'phoneNumber',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'email',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'disabled',
                      {
                          type: Sequelize.DataTypes.BOOLEAN,

                            defaultValue: false,
                            allowNull: false,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'password',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'emailVerified',
                      {
                          type: Sequelize.DataTypes.BOOLEAN,

                            defaultValue: false,
                            allowNull: false,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'emailVerificationToken',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'emailVerificationTokenExpiresAt',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'passwordResetToken',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'passwordResetTokenExpiresAt',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'users',
                      'provider',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'human_resources',
                      'employee_name',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'human_resources',
                      'role',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['SkilledLabor','ManagerialStaff'],

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'human_resources',
                      'shift',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'human_resources',
                      'payroll',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'inventory',
                      'product_name',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'inventory',
                      'available_quantity',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'inventory',
                      'reserved_quantity',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'inventory',
                      'returned_quantity',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'machinery',
                      'machine_name',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'machinery',
                      'maintenance_schedule',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'machinery',
                      'downtime_hours',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'quality_control',
                      'check_point',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'quality_control',
                      'work_orderId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'work_orders',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'quality_control',
                      'compliance',
                      {
                          type: Sequelize.DataTypes.BOOLEAN,

                            defaultValue: false,
                            allowNull: false,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'raw_materials',
                      'name',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'raw_materials',
                      'quantity',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'raw_materials',
                      'reorder_level',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'suppliers',
                      'supplier_name',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'suppliers',
                      'contract_terms',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'suppliers',
                      'delivery_schedule',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'suppliers',
                      'payment_due',
                      {
                          type: Sequelize.DataTypes.DECIMAL,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'work_orders',
                      'order_number',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },
    /**
     * @param {QueryInterface} queryInterface
     * @param {Sequelize} Sequelize
     * @returns {Promise<void>}
     */
    async down(queryInterface, Sequelize) {
        /**
         * @type {Transaction}
         */
        const transaction = await queryInterface.sequelize.transaction();
        try {

                    await queryInterface.removeColumn(
                        'work_orders',
                        'order_number',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'suppliers',
                        'payment_due',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'suppliers',
                        'delivery_schedule',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'suppliers',
                        'contract_terms',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'suppliers',
                        'supplier_name',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'raw_materials',
                        'reorder_level',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'raw_materials',
                        'quantity',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'raw_materials',
                        'name',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'quality_control',
                        'compliance',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'quality_control',
                        'work_orderId',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'quality_control',
                        'check_point',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'machinery',
                        'downtime_hours',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'machinery',
                        'maintenance_schedule',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'machinery',
                        'machine_name',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'inventory',
                        'returned_quantity',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'inventory',
                        'reserved_quantity',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'inventory',
                        'available_quantity',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'inventory',
                        'product_name',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'human_resources',
                        'payroll',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'human_resources',
                        'shift',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'human_resources',
                        'role',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'human_resources',
                        'employee_name',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'provider',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'passwordResetTokenExpiresAt',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'passwordResetToken',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'emailVerificationTokenExpiresAt',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'emailVerificationToken',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'emailVerified',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'password',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'disabled',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'email',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'phoneNumber',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'lastName',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'users',
                        'firstName',
                        { transaction }
                    );

                    await queryInterface.dropTable('work_orders', { transaction });

                    await queryInterface.dropTable('suppliers', { transaction });

                    await queryInterface.dropTable('raw_materials', { transaction });

                    await queryInterface.dropTable('quality_control', { transaction });

                    await queryInterface.dropTable('machinery', { transaction });

                    await queryInterface.dropTable('inventory', { transaction });

                    await queryInterface.dropTable('human_resources', { transaction });

                    await queryInterface.dropTable('users', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
