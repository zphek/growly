import { useContext, useRef, useState } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import bloquear from '../assets/bloquear.png';
import sendReq from "../helpers/senreq.js";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert.jsx";


const handleSubmit = (e, user, password, setError, dispatch)=> {
    e.preventDefault();

    user = user.current.value;
    password = password.current.value;

    sendReq("http://localhost:3000/user/signin", "post", {
        username: user,
        password
    })
    .then(({data}) =>{
        console.log(data.userExist);

        if(data.userExist){
            console.log(data)
            document.cookie = `auth=${data.token}; expires=2h;`;
            dispatch({type:"sign_in", user: document.user});
        }

        setError(!data.userExist);
    });

    setTimeout(()=>{
        setError(false);
    }, 3000);
}

const Login = () => {
    document.title = "Growly | Inicio Sesión";
    let [error, setError] = useState(false);

    const {state, dispatch} = useContext(GeneralContext);
    // dispatch({type: "toggle_nav_foot", show: false});

    let user = useRef(), password = useRef();

    return (
    <>
    <div className="bg-slate-100 w-[100vw] h-[100vh] flex flex-row items-center">
        <div className="container lg:w-[30%] md:w-[60%] sm:w-[80%] p-5 rounded-md">
            <form className="flex flex-col" onSubmit={e=> { handleSubmit(e, user, password, setError, dispatch) }}>                
                <section>
                    <img src={growly} alt="" width={180}/>
                    <h1 className="text-[2.5em] font-bold mt-4 text-[#0D378C]">Ingresa a tu cuenta</h1>
                    <h3 className="mt-2 text-xl text-gray-600">¡Bienvenido devuelta! Selecciona un método de Inicio de Sesión.</h3>
                </section>
            
                <div className="flex flex-row flex-wrap justify-between w-100% gap-x-4 mt-4 mb-4">
                    <button className="py-3 px-4 rounded-xl flex items-center justify-center gap-3 grow bg-[#28B446] shadow-lg shadow-[#28B446] text-white font-bold">
                        <img src={google} alt="" className="w-[30px] "/>Iniciar con Google</button>
                    
                    <button className="py-3 px-4 rounded-xl flex items-center justify-center gap-3 grow bg-[#1976D2] shadow-lg shadow-[#1976D2] text-white font-bold">
                        <img src={facebook} alt="" className="w-[30px]" />Iniciar con Facebook</button>
                </div>
    
      
                <h3 className="text-center flex flex-row items-center justify-center">
                    <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O continúa con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" /> 
                </h3>


                <section className="flex flex-col mt-4 mb-4 gap-y-2">
                    <div className="flex flex-row shadow-lg items-center px-3 py-2 rounded-lg" style={{
                            backgroundColor: (error ? "#ffa6ac" : "transparent")
                        }}>
                        <img src={email} alt="" width={40}/>
                        <div className="flex flex-col justify-start block grow">
                            <h3 className="px-3 text-gray-500">Usuario o correo</h3>
                            <input type="text" name="" id="" placeholder="Correo electrónico" className="block py-1 px-3 outline-none bg-transparent" required ref={user}/>
                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg items-center px-3 py-2 rounded-lg" style={{
                            backgroundColor: (error ? "#ffa6ac" : "transparent")
                        }}>
                        <img src={bloquear} alt="" width={40} className="py-1"/>
                        <div className="flex flex-col justify-start block grow">
                            <h3 className="px-3 text-gray-500">Contraseña</h3>
                            <input type="password" name="" id="" placeholder="Contraseña" className="block py-1 px-3 outline-none bg-transparent" required ref={password}/>
                        </div>
                    </div>
                </section>

                {error && (
                        <h3 className="text-red-600 mb-3">
                            El usuario o contraseña son incorrectos.
                        </h3>
                )}

                <section className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-between">
                        <div className="flex gap-2">
                        <input
                            type="checkbox"
                            id="subscribeNews"
                            name="subscribe"
                            value="newsletter" className=""/>
                            <label htmlFor="subscribeNews">Recuerdame</label>
                        </div>

                        <ul>
                            <li><a href="" className="text-blue-600">
                                ¿Se te olvido la contraseña?
                            </a></li>
                        </ul>
                        </div>

                    <button className="block bg-blue-800 py-3 text-white rounded-lg text-xl mt-4" type="submit">
                        Iniciar sesión
                    </button>

                    <div className="flex flex-row justify-center items-center mt-3 gap-x-5">
                        <h3>No tienes una cuenta?</h3>
                        <ul className="bg-blue-500 p-3 rounded-2xl flex flex-row items-center justify-center">
                            <li className="text-white font-bold hover:shadow-blue-500"><Link to="/signup" className="transition-[900ms]">Crea una cuenta.</Link></li>
                        </ul>
                    </div>
                </section>
            </form>
        </div>
    </div>
    </>);
}
 
export default Login;