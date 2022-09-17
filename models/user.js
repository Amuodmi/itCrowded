const { timeStamp } = require('console');
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

//method that will catch any change made before or after a mod to the table
//call back function, will be called wheneer we are creating or writing new eata for user modle and whatever objet we pass taht we are wrintng to the user model will be intercepted and passed to call back 
//this will trigger whenever user.create is run
User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10)
});