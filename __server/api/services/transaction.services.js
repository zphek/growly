const transactions = require("../models/transaction.model");

class services {
    async addTransaction(amount, userid, projectid){
        try {
            let transaction = await transactions.create({
                id: null, 
                amount: amount,
                t_date: new Date(),
                user_id: userid,
                p_id: projectid
            });

            return {data: transaction, error: false};
        } catch (error) {
            return {
                message: error,
                error: true
            };
        }
    }

    async getTransactionByUser(userid){
        try {
            let transaction = transactions.findAll({
                where:{
                    user_id: userid
                }
            });

            let data = {transactionExist: false, exist: false, error: false};

            if(transaction){
                data.transactionExist = true;
                data.error = false;
                data.transaction = transaction;
            }

            return data;  
        } catch (error) {
            return {
                message: error,
                error: true
            };
        }
    }

    async getTransactionByProject(){
        try {
            let transaction = transactions.findAll({
                where:{
                    p_id: userid
                }
            });

            let data = {transactionExist: false, exist: false, error: false};

            if(transaction){
                data.transactionExist = true;
                data.error = false;
                data.transaction = transaction;
            }

            return data;  
        } catch (error) {
            return {
                message: error,
                error: true
            };
        }
    }
}

module.exports = new services();
