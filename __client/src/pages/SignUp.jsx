import { useContext, useRef, useState, useEffect } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import back from '../assets/back.png'
import sendReq from "../helpers/senreq.js";
import { Link, useNavigate } from "react-router-dom";

const handleSubmit = (e, formData, dispatch, setError)=> {
    e.preventDefault();

    let {} = formData;

    console.log({...formData})

    sendReq("http://localhost:3000/user/create", "post", {
        ...formData
    })
    .then(({data}) =>{
        console.log(data);

        if(data.error){
            setError({message: data.message, error: data.error})
        }else {
            setError({message: "", error: false});
        }
    });
}

const Signup = () => {
    document.title = "Growly | Crear cuenta";
    let [error, setError] = useState({message: "", error: false});
    let [rpassword, setRpassword] = useState(false);
    const navigate = useNavigate();
    const {state, dispatch} = useContext(GeneralContext);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        userclass: ""
    });
    
    useEffect(()=>{
        dispatch({type: "toggle_nav_foot", show:false});

        if(state.user){
            navigate("/");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    
        if (name === "confirmPassword" && formData.password !== value) {
            setRpassword(true);
        } else {
            setRpassword(false);
        }
    };

    let user = useRef(), password = useRef();

    return (
    <>
    <div className="bg-slate-100 w-[100vw] h-[100vh] flex flex-row items-center">
        <div className="container lg:w-[30%] md:w-[600%] sm:w-[100%] p-5 rounded-md">
                <div>
                    <button className="bg-blue-600 p-3 mb-3 rounded-2xl text-white font-bold flex flex-row items-center justify-around back" onClick={e=>{ navigate("/"); }}>
                        <img src={back} alt="" className="w-[15%]"/>
                        <h3 className="text-lg">
                            Atras
                        </h3>
                    </button>
                </div>
            <form className="flex flex-col" onSubmit={e=> { handleSubmit(e, formData, dispatch, setError) }}>                
                <section>
                    <img src={growly} alt="" width={180}/>
                    <h1 className="text-[2.5em] font-bold mt-4 text-[#0D378C]">Crear una cuenta</h1>
                    <h3 className="mt-2 text-xl text-gray-600">¡Bienvenido! Por favor, ingresa tus datos para crear una cuenta.</h3>
                </section>    

                <div className="flex flex-row flex-wrap justify-between w-100% gap-x-4 gap-y-3 mt-4 mb-4">
                    <button className="py-3 px-4 rounded-xl flex items-center justify-center gap-3 grow bg-[#28B446] shadow-lg shadow-[#28B446] text-white font-bold">
                        <img src={google} alt="" className="w-[20px] "/>Registrarse con Google</button>
                    
                    <button className="py-3 px-4 rounded-xl flex items-center justify-center gap-3 grow bg-[#1976D2] shadow-lg shadow-[#1976D2] text-white font-bold">
                        <img src={facebook} alt="" className="w-[20px]" />Registrarse con Facebook</button>
                </div>

                <h3 className="text-center flex flex-row items-center justify-center">
                    <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O registrate con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" /> 
                </h3>
                
                <section className="data mt-4">
                    <section className="flex flex-row flex-wrap justify-between flex-grow gap-x-2 gap-y-3">
                        <div className="flex flex-col grow">
                            <h2 className="text-lg font-sans">
                                Email
                            </h2>

                            <input type="email" name="email" id="" required onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col grow">
                        <h2 className="text-lg font-sans">
                            Nombre de usuario
                        </h2>

                        <input type="text" name="username" id="" required onChange={handleChange}/>
                    </div>
                    </section>

                    <section className="flex flex-col gap-y-3 mt-4">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-sans">
                                Inserta la contraseña
                            </h2>

                            <input type="password" name="password" id="" required ref={password} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-lg font-sans">
                                Repite la contraseña
                            </h2>

                            <input type="password" name="confirmPassword" id="" required onChange={handleChange}/>

                            {rpassword && (
                                <h3 className="text-red-500">
                                    Las contraseñas no coinciden.
                                </h3>
                            )}
                        </div>

                        <div className="flex flex-row flex-grow gap-2">
                            <div className="grow flex flex-col">
                                <h3 className="text-lg font-sans mb-2">
                                    Sexo
                                </h3>
                                <select name="gender" id="" className="px-4 py-2 bg-blue-600 text-white" required onChange={handleChange}>
                                    <option value="">-----------</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                </select>
                            </div>

                            <div className="grow flex flex-col">
                                <h3 className="text-lg font-sans mb-2">
                                    Tipo de cuenta
                                </h3>
                                <select name="userclass" id="" className="px-4 py-2 bg-blue-600 text-white" required onChange={handleChange}>
                                    <option value="">-----------</option>
                                    <option value="inversionista">Inversionista</option>
                                    <option value="empresa">Empresa</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </section>
                
                {error.error &&(
                    <h3 className="text-red-500">
                        {error.message}
                    </h3>
                )}

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