const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Strength extends Model {}

Strength.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    time_spent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id',
        },
    },
    feeling_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'feeling',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'strength',
  }
);

module.exports = Strength;
