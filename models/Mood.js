const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model {}

Mood.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        color: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood',
      }
);
module.exports = Mood;