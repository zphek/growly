const Router = require("express").Router();
const {auth, signIn, signOut, create, getUsers} = require("../controllers/user.controller");

Router
    .post("/auth", auth)

    .post("/signin", signIn)

    .post("/signout", signOut)
    
    .post("/create", create)
    
    .get("/users", getUsers);

module.exports = Router;