import { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";
import GeneralContext from "../contexts/GeneralProvider";
import sendReq from "../helpers/senreq";

const Projects = () => {
    document.title = "Growly | Inicio";

    let { state, dispatch } = useContext(GeneralContext);
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        dispatch({ type: "toggle_nav_foot", show: true });
        dispatch({ type: "set_title", title: "Proyectos" });

        sendReq("http://localhost:3000/project/all")
            .then(({data}) => {
                console.log(data);
                if (data.projectExist) {
                    setProjects(prev => [...prev, {...data.project}]); // Assuming the API response contains a property named 'projects'
                    return;
                }
                //setProjects([]);
            });

            console.log(projects);
    }, []);

    let cant_projects = projects.length;

    return (
        <div className="w-[100%] bg-slate-100 h-[100vh]">
            <div className="filter"></div>
            <div className="container">
                <h2 className="text-2xl font-bold">{cant_projects} Proyectos apasionantes para invertir</h2>
                <div className="projects flex flex-row flex-wrap gap-[5em]">
                    {projects.map((pro, index) => <ProjectCard key={index} data={pro} />)}
                </div>
            </div>
        </div>
    );
}

export default Projects;
