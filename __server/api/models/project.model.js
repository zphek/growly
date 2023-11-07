const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Projects = sequelize.define('projects', {
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
        type: DataTypes.DATE
    },
    p_end:{
        type: DataTypes.DATE
    },
    goal:{
        type: DataTypes.DOUBLE
    },
    p_state:{
        type: DataTypes.BOOLEAN
    },
    user_id:{
        type: DataTypes.INTEGER
    }
});


module.exports = Projects;