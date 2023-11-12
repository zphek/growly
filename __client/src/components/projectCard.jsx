import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GeneralContext from "../contexts/GeneralProvider";

const ProjectCard = ({ data }) => {
    let { p_name: name, categorys, raised, investors, goal, img } = data;
    let {state, dispatch} = useContext(GeneralContext);

    const navigate = useNavigate();

    return (
        <div className="flex flex-col flex-wrap gap-0" onClick={e=>{ 
            navigate(`/project/${name}`);
         }}>
            <div className="card w-[22rem] m-0" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-base text-xl font-bold">{name}</h5>
                    <div className="progress">
                      <div className="progress-bar w-[25%]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    { state.user ? 
                    ( state.user == "inversor") && 
                    ( <a href="#" className="btn btn-primary">Financiar</a>) 
                    : ""}
                
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
