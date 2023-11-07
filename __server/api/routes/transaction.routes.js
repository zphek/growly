const Router = require("express").Router();
const {addTransaction, getTransactionByUser, getTransactionByProject} = require("../controllers/transaction.controller");

Router
    .post("/add", addTransaction)
    
    .post("/user/:id", getTransactionByUser)
    
    .post("/project/:id", getTransactionByProject);

module.exports = Router;