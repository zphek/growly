const Router = require("express").Router();
const {create, getProject, getProjects} = require("../controllers/project.controller");

Router
    .post("/create", create)
    
    .get("/project/:id", getProject)
    
    .get("/projects", getProjects);

module.exports = Router;