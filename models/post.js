
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');


const Post = sequelizeConnection.define('post', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true        
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
    }
},
    {
    sequelize: sequelizeConnection,
    timeStamps: false,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});


module.exports = Post; 