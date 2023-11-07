const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Users = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        unique: true
    },
    passw:{
        type: DataTypes.STRING
    },
    user_class:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique: true
    } ,
    money:{
       type: DataTypes.DOUBLE 
    }  
});

module.exports = Users;