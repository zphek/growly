const Router = require("express").Router();
const {auth, create, getUsers} = require("../controllers/user.controller");

Router
    .post("/auth", auth)
    .post("/create", create)
    .get("/users", getUsers);

module.exports = Router;