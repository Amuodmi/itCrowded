const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');
const bcrypt = require('bcrypt');

const User = sequelizeConnection.define('user', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true        
    },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [3, 26]
            }
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false, 
            validate: {
                len: [5,20]
            }
        }
    },
    {
    sequelize: sequelizeConnection,
    timeStamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});

//method that will catch any change made before or after to the table
//this will trigger whenever user.create is run
User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10)
});

User.beforeUpdate(async updatedUserData => {
    updatedUserData.password = await bcrypt.hash(newUserData.password, 10)
    return updatedUserData; 
});

module.exports = User;