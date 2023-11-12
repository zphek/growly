import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GeneralContext from "../contexts/GeneralProvider";

const ProjectCard = ({ data }) => {
    let {title, description, raised, investors, goal, image } = data;
    let {state, dispatch} = useContext(GeneralContext);

    const navigate = useNavigate();

    return (
        <div className="flex flex-col flex-wrap gap-0">
            <div className="card w-[22rem] m-0" >
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-base text-xl font-bold">{title}</h5>
                    <div className="progress">
                      <div className="progress-bar w-[25%]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <p className="card-text mt-2">
                        <div>
                            <h2 className="text-lg font-bold">RD${goal}</h2>
                            <h2>Meta de dinero</h2>
                        </div>
                    </p>

                    <button className="bg-blue-500 px-5 py-1 text-white rounded-xl mt-2" onClick={e=>{ 
                        navigate(`/project/${title}`);
                    }}>
                        Ver más                        
                    </button>
                    
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
