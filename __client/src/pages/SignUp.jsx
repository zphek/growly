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

const Signup = () => {
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
                    <h1 className="text-[2.5em] font-bold mt-4 text-[#0D378C]">Crear una cuenta</h1>
                    <h3 className="mt-2 text-xl text-gray-600">¡Bienvenido! Por favor, ingresa tus datos para crear una cuenta.</h3>
                </section>    
      

                <section>
                    <fieldset>
                        <h3 className="text-2xl">Escoge el tipo de cuenta que deseas: </h3>
                        <div>
                            <input type="radio" name="inversionista" id="" checked />
                        </div>
                        
                        <div>
                            Empresa
                            <input type="radio" name="" id="" />
                        </div>
                    </fieldset>
                </section>


                <section className="flex flex-col">
                    <button className="block bg-blue-800 py-3 text-white rounded-lg text-xl mt-4" type="submit">
                        Crear cuenta
                    </button>

                    <div className="flex flex-row justify-center items-center mt-3 gap-x-5">
                        <h3>Ya creaste una cuenta?</h3>
                        <ul className="bg-blue-500 p-3 rounded-2xl flex flex-row items-center justify-center">
                            <li className="text-white font-bold hover:shadow-blue-500"><Link to="/login" className="transition-[900ms]">Iniciar sesión.</Link></li>
                        </ul>
                    </div>
                </section>
            </form>
        </div>
    </div>
    </>);
}
 
export default Signup;