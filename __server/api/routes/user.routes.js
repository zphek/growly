const Router = require("express").Router();
const {auth, signIn, signOut, create, getUsers} = require("../controllers/user.controller");

Router
    .get("/auth", (req, res)=>{
        console.log(req.headers);
    })

    .post("/signin", signIn)

    .post("/signout", signOut)
    
    .post("/create", create)
    
    .get("/users", getUsers);

module.exports = Router;