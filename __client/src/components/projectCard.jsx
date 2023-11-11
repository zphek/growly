import { Navigate, useHref, useNavigate } from "react-router-dom";

const ProjectCard = ({ data }) => {
    let { p_name: name, categorys, raised, investors, goal, img } = data;
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
                    <a href="#" className="btn btn-primary">Financiar</a>
                </div>
            </div>
            
            
            {/* <img src={img} alt="" className="w-full mb-4" />
            <section className="mb-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                
            </section>

            <hr className="my-4" />

            <section className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h2 className="text-xl font-bold text-center md:text-left">
                        RD${raised}
                    </h2>
                    <p className="text-center md:text-left">Obtenido</p>
                </div>

                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h2 className="text-xl font-bold text-center md:text-left">
                        {investors}
                    </h2>
                    <p className="text-center md:text-left">Inversores</p>
                </div>

                <div className="md:w-1/3">
                    <h2 className="text-xl font-bold text-center md:text-left">
                        RD${goal}
                    </h2>
                    <p className="text-center md:text-left">Meta</p>
                </div>
            </section> */}
        </div>
    );
};

export default ProjectCard;
