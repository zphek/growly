import { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";
import GeneralContext from "../contexts/GeneralProvider";
import sendReq from "../helpers/senreq";
import data from "../utils/musk";

const Projects = () => {
    document.title = "Growly | Inicio";

    let { state, dispatch } = useContext(GeneralContext);
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        dispatch({ type: "toggle_nav_foot", show: true });
        dispatch({ type: "set_title", title: "Proyectos" });

        setProjects(data());
    }, []);

    let cant_projects = projects.length;

    return (
        <div className="w-[100%] bg-slate-100 h-[100vh]">
            <div className="filter"></div>
            <h2 className="text-lg lg:text-2xl font-bold bg-blue-500 mb-3">
                <div className="container py-3 font-bold text-white">
                    <h2>Descubre emocionantes proyectos esperando tu inversión</h2>
                </div>
            </h2>
            <div className="container py-5">
                <div className="projects flex flex-row flex-wrap gap-[5em]">
                    {projects.map((pro, index) => <ProjectCard key={index} data={pro} />)}
                </div>
            </div>
        </div>
    );
}

export default Projects;
