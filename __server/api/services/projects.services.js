const projects = require("../models/project.model");

class services {
    async create(project){
        try {
            if(!project.image){
                throw new Error('Falta la imagen.');
            }
            let p = projects.create({
                id: null,
                p_name: project.name,
                p_description: project.description,
                p_start: project.start,
                p_end: project.end,
                goal: project.goal,
                p_state: false,
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

    async getProject(name){
        try {
            let projectInstance = await projects.findOne({
                p_name: name
            });

            let data = {projectExist: false, error: false};

            if(projectInstance){
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
