import p1 from '../assets/educate/p1.jpeg';
import p2 from '../assets/educate/p2.jpeg';
import p3 from '../assets/educate/p3.jpeg';


import CourseCard from '../components/CourseCard';

const Educate = () => {

    let cursos = [
        {
            title: "Curso de emprendimiento",
            description: "Este curso ofrece el desarrollo de ideas de negocio, marketing y ventas, liderazgo y gestion.",
            image: p1
        },
        {
            title: "Curso de Gestión financiera",
            description: "Este curso busca cubrir temas como el analisis financiero, planeacion financiera, presupuestos, inversiones y riesgos.",
            image: p2
        },
        {
            title: "Curso de Marketing Digital",
            description: "Este curso busca sentarte las bases con respecto a temas como los fundamentos del marketing digital y el analisis de audiencia.",
            image: p3
        }
    ]

    return (<div className="h-full w-full bg-slate-200">
        <div className="flex flex-col justify-center items-center h-auto relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="font-base font-bold text-xl xs:text-lg lg:text-[2em] py-16 xs:py-2 text-white flex flex-col w-auto ">
                <h1>Catálogo de cursos:</h1>
                <div className="search block flex flex-row flex-grow mt-4 items-center gap-3 bg-slate-100 px-3 py-2 sm:px-1 sm:py-1 text-black rounded-lg">
                    <input type="text" className='grow border border-white border-2 border-b-slate-100 outline-none' name="" id="" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="courses mt-4 flex gap-3 container flex-wrap justify-center mb-4">
            {cursos.map((el, index)=>{
                <CourseCard key={index} data={el}/>
            })}
        </div>
    </div>);
}
 
export default Educate;