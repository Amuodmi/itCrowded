
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');


const Comment = sequelizeConnection.define('comment', {

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
            model: 'Comment',
            key: 'id'
        }
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        reference: {
            model: 'Post',
            key: 'id'
        }
},
    {
    sequelize: sequelizeConnection,
    timeStamps: false,
    freezeTableName: true,
    modelName: 'comments',
    underscored: true
});


module.exports = Comment; 