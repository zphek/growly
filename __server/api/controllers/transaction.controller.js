const {addTransaction, getTransactionByUser, getTransactionByProject} = require("../services/transaction.services");

class controllers{
    async addTransaction(req, res){
        let {amount, userid, projectid} = req.body;

        if(!(amount && userid && projectid)){
            res.json({message: "", error: true});
            return;
        }

        let transaction = await addTransaction(amount, userid, projectid);
        res.json(transaction);
    }

    async getTransactionByUser(req, res){
        let {user_id} = req.body;

        let transactions = getTransactionByUser(user_id);
        res.json(transactions);
    }

    async getTransactionByProject(req, res){
        let {project_id} = req.body;

        let transactions = getTransactionByProject(project_id);
        res.json(transactions);
    }
}

module.exports = new controllers;