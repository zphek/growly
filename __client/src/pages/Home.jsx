import { useContext, useEffect } from "react";
import ProjectCard from "../components/projectCard";
import GeneralContext from "../contexts/GeneralProvider";

const Home = () => {
    document.title = "Growly | Inicio";

    let {state, dispatch} = useContext(GeneralContext);

    useEffect(()=>{
        dispatch({type: "toggle_nav_foot", show:true});
        dispatch({type: "set_title", title: "Proyectos"});
    }, []);

    let cant_projects = 69;

    const projects = [
        {
            name: "Project 1",
            categorys: ["Technology", "Startups"],
            raised: 150000,
            investors: 25,
            goal: 200000
        },
        {
            name: "Project 2",
            categorys: ["Healthcare", "MedTech"],
            raised: 80000,
            investors: 15,
            goal: 120000
        },
        {
            name: "Project 3",
            categorys: ["Education", "E-Learning"],
            raised: 50000,
            investors: 10,
            goal: 75000
        },
        // Agrega más objetos según sea necesario
    ];
    
    //console.log(projects);
    

    return (<div className="w-[100%] bg-slate-100 h-[100vh]">

        <div className="filter">

        </div>

        <div className="container">

            <h2 className="text-2xl font-bold">{cant_projects} Proyectos apasionantes para invertir</h2>

            <div className="projects flex flex-row flex-wrap gap-[5em]">
                {projects.map((pro, index)=> <ProjectCard key={index} data={pro}/>)}
            </div>

        </div>

    </div>);
}
 
export default Home;