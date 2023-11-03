const {authUser, createUser, getUsers, getUser} = require("../services/user.services");

class controllers{
    auth(req, res){
        let {username, password} = req.body;

        authUser(username, password)
        .then(data=>{
            res.json(data);
        });
    }

    create(req, res){
        let {username, email, password} = req.body;

        if(!(username && email && password)){
            res.json({message: "Error, missing to fill in a field.", error: true});
            return;
        }

        createUser(username, email, password)
        .then(data=>{
            res.json(data);
        })
    }

    getUsers(req, res){
        getUsers().then(data=>{
            res.json(data);
        })
    }
}

module.exports = new controllers;