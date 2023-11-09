const Router = require("express").Router();
const {create, getProject, getProjects} = require("../controllers/project.controller");

Router
    .post("/create", create)
    
    .get("/:id", getProject)
    
    .get("/all", getProjects);

module.exports = Router;