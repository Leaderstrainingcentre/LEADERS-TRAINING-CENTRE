const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const work_orders = sequelize.define(
    'work_orders',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

order_number: {
        type: DataTypes.TEXT,

      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  work_orders.associate = (db) => {

    db.work_orders.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.work_orders.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return work_orders;
};

