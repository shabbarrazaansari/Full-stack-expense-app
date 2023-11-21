const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const product = sequelize.define('expense',
{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // defaultValue: 0 // Set a default value or use autoIncrement
      },
    Amount: {
        type :Sequelize.INTEGER,
        allowNull:false
    
    
    },
    description:Sequelize.STRING,
    category:Sequelize.STRING,


})
module.exports = product;