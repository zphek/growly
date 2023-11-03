const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('growly_db', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    define:{
        timestamps: false
    }
});

try {
  sequelize.authenticate();
} catch (error) {
  console.error('Unable to connect to the database:', error);
} 

module.exports = sequelize;