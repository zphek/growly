import { useContext, useRef, useState, useEffect } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import outlook from '../assets/outlook.png';
import sendReq from "../helpers/senreq.js";
import RegisterCompany from '../components/RegisterCompany.jsx'
import { Link, useNavigate } from "react-router-dom";

const handleSubmit = (e, formData, dispatch, setError, setEntrepeneur, setFormData, navigate)=> {
    e.preventDefault();

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
            
            if(formData.userclass == "emprendedor"){
                setEntrepeneur(true);
                setFormData(data.user);
                return;
            }

            navigate("/login");
        }
    });
}

const Signup = () => {
    document.title = "Growly | Crear cuenta";
    let [error, setError] = useState({message: "", error: false});
    let [rpassword, setRpassword] = useState(false);
    let [show, setShow] = useState(true);
    let [entrepeneur, setEntrepeneur] = useState(false);
  
    const navigate = useNavigate();
    const {state, dispatch} = useContext(GeneralContext);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        userclass: ""
    });
    
    useEffect(()=>{
        dispatch({type: "toggle_nav_foot", show:false});

        if(state.user){
            navigate("/");
        }
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
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
    {!entrepeneur ?
        (<div className="bg-slate-100 h-[100vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <button className="flex flex-row gap-x-2 items-center justify-center bg-blue-800 px-3 py-2 rounded-lg text-white hover:bg-blue-500 transition-[300ms]" onClick={e=> {navigate("/")}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          
          <h3>
            Atrás
          </h3>
        </button>
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
                        <option value="">---------------</option>
                        <option value="inversor">Inversor</option>
                        <option value="emprendedor">Emprendedor</option>
                    </select>

                    <button className="px-4 py-2 bg-blue-800 text-white rounded-lg mt-4 text-base font-bold" onClick={e=>{ setShow(false) }}>
                        Siguiente
                    </button>
                </div>
            </>
          ) 
          :<form className="space-y-4" onSubmit={e=>{handleSubmit(e, formData, dispatch, setError, setEntrepeneur, setFormData, navigate)}}>
            
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
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={user} style={{ background: (error.error ? "#ffa6ac": "")}} onChange={handleChange}/>
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
                  ref={user} style={{ background: (error.error ? "#ffa6ac": "")}} onChange={handleChange}/>
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

            {error.error && (
                    <h3 className="text-red-500">
                        {error.message}
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
        </div>)
        : (<RegisterCompany data={formData}/>)
        }
        </>);
}
 
export default Signup;