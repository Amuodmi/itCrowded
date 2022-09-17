
const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');


class Post extends Model {}

Post.init({

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false, 
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        reference: {
            model: 'User',
            key: 'id'
        }
    },
    date_created: {
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW
    },
},
    {
    sequelize: sequelizeConnection,
    timeStamps: false,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});


module.exports = Post; 