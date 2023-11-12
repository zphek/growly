import { useContext, useRef, useState, useEffect } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import outlook from '../assets/outlook.png';
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
    let [show, setShow] = useState(true);
    let selectedOption = useRef();

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
    <>
    <div className="bg-slate-100 h-[100vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-2/5 mb-1 mx-auto"
            src={growly}
            alt="Your Company"
          />
        
          <h1 className="mt-3 text-start text-xl font-bold leading-9 tracking-tight text-[#0D378C]">Crea una nueva cuenta</h1>
          <h3 className="mt-1 text-[1.1em] text-start text-2xl leading-9 tracking-tight text-gray-600">¡Bienvenido! Por favor, ingresa tus datos para crear una cuenta.</h3>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          {show ?
          (
            <>
                <div className="flex flex-col justify-items">
                    <h3 className="text-base font-bold">Deseo ser:</h3>
                    <select name="userclass" id="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}>
                        <option value="">Inversor</option>
                        <option value="">Emprendedor</option>
                    </select>

                    <button className="px-4 py-2 bg-blue-800 text-white rounded-lg mt-4 text-base font-bold" onClick={e=>{ setShow(false) }}>
                        Siguiente
                    </button>
                </div>
            </>
          ) 
          :<form className="space-y-4" onSubmit={e=>{}}>
            
            <div className="flex flex-col gap-y-2">
              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white bg-[#28B446] shadow-lg shadow-[#28B446] hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <img src={google} alt="" className="w-[1.5em] h-[1.5em]" />Registrarse con Google
              </button>

              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md bg-[#1976D2] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <img src={outlook} alt="" className="w-[1.5em] h-[1.5em]" />
                Registrarse con Outlook
              </button>
            </div>

            <h3 className="text-center flex flex-row items-center text-sm text-gray-500 justify-center">
                <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O continúa con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" />
            </h3>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre de la empresa
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={user} style={{ background: (error.error ? "#ffa6ac": "")}}/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={user} style={{ background: (error.error ? "#ffa6ac": "")}}/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={password} onChange={handleChange}/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Repetir contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}/>
              </div>
            </div>
            
            {rpassword && (
                    <h3 className="text-red-500">
                        Las contraseñas no coinciden.
                    </h3>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear cuenta
              </button>
            </div>
          </form>}

          <p className="mt-2 text-center text-sm text-gray-500">
            Ya estas registrado?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Iniciar Sesión
            </Link>
          </p>
        </div>
        </div>
        </>

    {/* <div className="bg-slate-100 w-[100vw] h-[100vh] flex flex-row items-center">
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
    </div> */}
    </>);
}
 
export default Signup;