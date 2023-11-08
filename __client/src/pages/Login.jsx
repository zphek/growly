import { useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import bloquear from '../assets/bloquear.png';

const Login = () => {
    document.title = "Growly | Inicio Sesión";

    // const {state, dispatch} = useContext(GeneralContext);
    // dispatch({type: "toggle_nav_foot", show: false});

    return (<div className="bg-slate-0 w-[100vw] h-[100vh] flex flex-row items-center">
        <div className="container bg-white w-[30%] p-5 rounded-md">
            <div className="flex flex-col gap-y-3">                
                <section>
                    <img src={growly} alt="" width={180}/>
                    <h1 className="text-[2.5em] font-bold mt-4 text-[#0D378C]">Ingresa a tu cuenta</h1>
                    <h3 className="mt-2 text-xl text-gray-600">¡Bienvenido devuelta! Selecciona un método de Inicio de Sesión.</h3>
                </section>
            
                <div className="flex flex-row flex-wrap justify-between w-100% gap-x-4 mt-4 mb-4">
                    <button className="py-3 px-4 border border-gray-500 rounded-md flex items-center gap-3 grow">
                        <img src={google} alt="" />Google</button>
                    
                    <button className="py-3 px-4 border border-gray-500 rounded-md flex items-center gap-3 grow">
                        <img src={facebook} alt="" />Facebook</button>
                </div>

                <h3 className="text-center">O continúa con email</h3>

                <section className="flex flex-col gap-y-3 mt-3">
                    <div className="flex flex-row border border-gray-400 items-center px-3 rounded-lg">
                        <img src={email} alt="" width={40}/>
                        <input type="email" name="" id="" placeholder="Correo electrónico" className="block p-3 grow"/>
                    </div>

                    <div className="flex flex-row border border-gray-400 items-center px-3 rounded-lg">
                        <img src={bloquear} alt="" width={40}/>
                        <input type="password" name="" id="" placeholder="Contraseña" className="block p-3"/>
                    </div>
                </section>
                
                <div></div>

                <section className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="flex gap-2">
                        <input
                            type="checkbox"
                            id="subscribeNews"
                            name="subscribe"
                            value="newsletter" className=""/>
                            <label forName="subscribeNews">Recuerdame</label>
                        </div>

                        <ul>
                            <li><a href="" className="text-blue-600">
                                ¿Se te olvido la contraseña?
                            </a></li>
                        </ul>
                    </div>

                    <button className="block bg-blue-800 py-3 text-white rounded-lg text-xl mt-4">
                        Iniciar sesión
                    </button>

                    <div className="flex flex-row items-center justify-center mt-3 gap-x-3">
                        <h3>No tienes una cuenta?</h3>
                        <ul>
                            <li className="text-blue-700"><a href="">Crea una cuenta.</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>);
}
 
export default Login;