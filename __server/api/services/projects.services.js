const projects = require("../models/project.model");

class services {
    async create(project){
        try {
            let p = projects.create({
                id: null,
                p_name: project.name,
                p_description: project.description,
                p_start: project.start,
                p_end: project.end,
                goal: project.goal,
                p_state: project.state,
                user_id: project.user_Id
            });

            return {data: p, error: false};
        } catch (error) {

            return {
                message: error,
                error: true
            };
        }
    }

    async getProject(id){
        try {
            let projectInstance = projects.findOne({
                id: id
            });

            let data = {projectExist: false, exist: false, error: false};

            if(project){
                data.projectExist = true;
                data.error = false;
                data.project = projectInstance;
            }

            return data;  
        } catch (error) {
            return {projectExist: false, error: true}
        }
    }

    async getProjects(){
        return await projects.findAll();
    }
}

module.exports = new services();
