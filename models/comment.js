
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');


class Comment extends Model {}

Comment.init(
    {

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
    modelName: 'comments',
    underscored: true
});


module.exports = Comment; 