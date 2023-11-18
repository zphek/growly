import priscilla from '../assets/nosotros/priscilla.jpeg';
import benjamin from '../assets/nosotros/benjamin.jpeg';
import bernardo from '../assets/nosotros/bernardo.jpeg';
import gabriela from '../assets/nosotros/gabriela.jpeg';
import somos from '../assets/somos.jpg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();

    return (<div className="h-full w-ful">
        <div className="h-[90vh] overflow-hidden flex flex-col xs:flex-col items-center justify-center space-x-7 cover relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
            <div className='h-[90vh] overflow-hidden flex flex-col xs:flex-col items-center justify-center space-x-7 z-20'>
                <h2 className="font-sans text-4xl lg:text-6xl font-bold mb-2 text-slate-200">Growly</h2>
                <h3 className="text-white text-2xl lg:text-4xl font-bold text-center">Impulsamos a emprendedores al conectarlos con inversionistas dispuestos a financiar proyectos.</h3>
                <h2 className="text'white text-xl text-center lg:text-3xl text-white mt-3">¡Únete a la acción y forma parte de nuestra plataforma que conecta emprendedores con inversionistas!</h2>
                <button className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:transition-[900ms] px-6 py-3 rounded-md font-bold" onClick={e=>{ navigate("/register") }}>Registrarme en Growly</button>    
            </div>
        </div>

        <div className="bg-slate-100 lg:py-12 overflow-hidden">
            <div className="container py-12 flex flex-col lg:flex-row">
                <div className="container flex flex-col lg:w-1/2 gap-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-blue-800">
                    ¿Quienes somos?    
                </h2>
                
                <h2 className="text-lg lg:text-xl">
                Growly es la plataforma de crowdfunding que impulsa a emprendedores al conectarlos con inversionistas dispuestos a financiar proyectos prometedores. 
                </h2>

                <h2 className="text-lg lg:text-xl">
                Ofrecemos el respaldo financiero necesario para convertir tus ideas en realidades exitosas. La colaboración con inversionistas incluye beneficios exclusivos, fortaleciendo las relaciones a largo plazo. 
                </h2>

                <h2 className="text-lg lg:text-xl">
                    Growly no solo financia sueños, construye comunidades de apoyo y conexiones valiosas.
                </h2>
                
                </div>
                <div className=''>
                    <img src={somos} className='rounded-lg w-[350px] h-[350px] mt-2 lg:mt-0 lg:h-[450px] object-cover mr-20' alt=""/>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 lg:py-9">
            <div className="container py-12 flex lg:flex-row flex-wrap justify-around text-white gap-y-11">
                <div className='max-w-[300px]'>
                    <h2 className='text-3xl mb-4 font-bold'>MISION</h2>
                    <h3>
                        Ser reconocidos como la principal plataforma de crowdfunding que impulsa a emprendedores a nivel global, conectándolos de manera efectiva con inversionistas comprometidos. Nos esforzamos por ser pioneros en el respaldo financiero a proyectos prometedores y por construir una red sólida que fomente el crecimiento y la innovación.
                    </h3>
                </div>
    
                <div className='max-w-[300px]'>
                    <h2 className='text-3xl mb-4 font-bold'>VISION</h2>
                    <h3>
                    En Growly, nuestra misión es proporcionar el respaldo financiero necesario para convertir las ideas de emprendedores en realidades exitosas. Nos comprometemos a ser el facilitador clave que conecta a emprendedores con inversionistas dispuestos a financiar proyectos prometedores. Buscamos fortalecer las relaciones a largo plazo mediante colaboraciones estratégicas que ofrezcan beneficios exclusivos a ambas partes. Growly no solo financia sueños, sino que también construye comunidades de apoyo y valiosas conexiones que impulsan el éxito compartido.
                    </h3>
                </div>

                <div className='max-w-[300px]'>
                    <h2 className='text-3xl mb-4 font-bold'>VALORES</h2>
                    <h3>
                        Ser reconocidos como la principal plataforma de crowdfunding que impulsa a emprendedores a nivel global, conectándolos de manera efectiva con inversionistas comprometidos. Nos esforzamos por ser pioneros en el respaldo financiero a proyectos prometedores y por construir una red sólida que fomente el crecimiento y la innovación.
                    </h3>
                </div>
            </div>
        </div>

        <div className="bg-white py-16">

            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center border-b border-b-2 py-3">
                NUESTROS INTEGRANTES    
            </h2>
            <div className="container flex flex-row items-center justify-center gap-x-20 gap-y-10 text-center text-lg lg:text-xl flex-wrap mt-5">
                <div className='flex flex-col justify-center items-center'>
                    <img src={priscilla} className='h-[90px] w-[90px] rounded-[50%]' alt="" />
                    <h2 className="font-bold">Priscilla Castro</h2>
                    <h4 className='text-[#0D378C]'>Project Manager</h4>
                </div>
                
                <div className='flex flex-col justify-center items-center'>
                    <img src={benjamin} className='h-[90px] w-[90px] rounded-[50%]' alt="" />
                    <h2 className="font-bold">Benjamin Avirón</h2>
                    <h4 className='text-[#0D378C]'>QA</h4>
                </div>
                
                <div className='flex flex-col justify-center items-center'>
                    <img src={bernardo} className='h-[90px] w-[90px] rounded-[50%]' alt="" />
                    <h2 className="font-bold">Bernardo Báez</h2>
                    <h4 className='text-[#0D378C]'>Software Developer</h4>
                </div>
                
                <div className='flex flex-col justify-center items-center'>
                    <img src={gabriela} className='h-[90px] w-[90px] rounded-[50%]' alt="" />
                    <h2 className="font-bold">GABRIELA BÁEZ</h2>
                    <h4 className='text-[#0D378C]'>UI designer</h4>
                </div>
            </div>
        </div>
    </div>);
}
 
export default Home;