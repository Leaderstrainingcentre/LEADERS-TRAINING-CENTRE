const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const raw_materials = sequelize.define(
    'raw_materials',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

name: {
        type: DataTypes.TEXT,

      },

quantity: {
        type: DataTypes.DECIMAL,

      },

reorder_level: {
        type: DataTypes.DECIMAL,

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

  raw_materials.associate = (db) => {

    db.raw_materials.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.raw_materials.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return raw_materials;
};

