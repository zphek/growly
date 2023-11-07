const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Transactions = sequelize.define('transactions', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount:{
        type: DataTypes.DOUBLE,
        unique: true
    },
    t_date:{
        type: DataTypes.DATE,
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    p_id:{
        type: DataTypes.INTEGER
    }
});
 

module.exports = Transactions;