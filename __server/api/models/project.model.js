const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Users = sequelize.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    p_name:{
        type: DataTypes.STRING,
        unique: true
    },
    p_description:{
        type: DataTypes.TEXT
    },
    p_start:{
        
    }
});

Users.findOne({
    where: {
        username: 'edit2h',
        passw: 'edi2th'
    }
})
.then(data => console.log(data))
.catch(err => console.log(err));
//console.log(Users.findAll());

module.exports = Users;