const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feeling extends Model {}

Feeling.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    feeling_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'feeling',
  }
);

module.exports = Feeling;