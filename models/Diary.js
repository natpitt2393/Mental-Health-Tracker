const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diary extends Model {}

Diary.init(
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
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        mood: {
            type: DataTypes.STRING(30),
            allowsNull: false
        },
        date_created: {
            type: DataTypes.STRING,
            allowsNull: false
        },
        //Ken, you'll have to explain what you want the date_sorted column to do, because I'm confused about that right now
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'diary',
      }
);

module.exports = Diary;

