const {create, getProject, getProjects} = require("../services/projects.services");

class controllers{
    create(req, res){
        create(req.body);
    }

    getProject(req, res){
        let {id} = req.params;
        getProject(id)
        .then(data=>{
            res.json(data);
        });
    }

    getProjects(req, res){
        getProjects()
        .then(data=>{
            res.json(data);
        });
    }
}

module.exports = new controllers();