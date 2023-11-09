import { Navigate, useHref, useNavigate } from "react-router-dom";

const ProjectCard = ({ data }) => {
    let { name, categorys, raised, investors, goal } = data;
    const navigate = useNavigate();

    return (
        <div className="rounded-lg p-4 md:p-6 lg:p-8 xl:p-10 bg-white shadow-md" onClick={e=>{ 
            navigate(`/project/${name}`);
         }}>
            <img src="" alt="" className="w-full mb-4" />
            <section className="mb-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <div className="category flex flex-wrap gap-2 mt-2">
                    {categorys.map((cat, index) => (
                        <p
                            key={index}
                            className="bg-blue-200 p-2 rounded-lg text-sm"
                        >
                            {cat}
                        </p>
                    ))}
                </div>
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
            </section>
        </div>
    );
};

export default ProjectCard;
