const Router = require("express").Router();
const {create, getProject, getProjects} = require("../controllers/projects.controller");

Router
    .post("/create", auth)
    .get("/project/:id", create)
    .get("/projects", getUsers);

module.exports = Router;