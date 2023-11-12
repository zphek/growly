import { useContext, useEffect, useRef, useState } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import bloquear from '../assets/bloquear.png';
import sendReq from "../helpers/senreq.js";
import outlook from "../assets/outlook.png";
import back from '../assets/back.png';
import { Link, useNavigate } from "react-router-dom";

const handleSubmit = (e, user, password, setError, dispatch) => {
    e.preventDefault();

    user = user.current.value;
    password = password.current.value;

    sendReq("http://localhost:3000/user/signin", "post", {
        username: user,
        password
    })
        .then(({ data }) => {
            console.log(data);

            if (data.userExist) {
                console.log(data);
                document.cookie = `token=${data.token}; expires=2h;`;
                dispatch({ type: "sign_in", user: data.user });
            }

            setError(!data.userExist);
        }).catch(e => {
            console.log(e)
        })

    setTimeout(() => {
        setError(false);
    }, 3000);
}

const Login = () => {
    document.title = "Growly | Inicio Sesión";

    let [error, setError] = useState(false);

    const { state, dispatch } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "toggle_nav_foot", show: false });

        if (state.user) {
            navigate("/");
        }

        console.log(document.cookie);
    }, [state.user]);

    let user = useRef(), password = useRef();

    return (
        <>
    <div className="bg-slate-100 h-[100vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-2/5 mb-1 mx-auto"
            src={growly}
            alt="Your Company"
          />
        
          <h1 className="mt-3 text-start text-xl font-bold leading-9 tracking-tight text-[#0D378C]">Ingresa a tu cuenta</h1>
          <h3 className="mt-1 text-[1.1em] text-start text-2xl leading-9 tracking-tight text-gray-600">¡Bienvenido devuelta! Selecciona un método de Inicio de Sesión.</h3>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={e=>{handleSubmit(e, user, password, setError, dispatch)}}>
            
            <div className="flex flex-col gap-y-2">
              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white bg-[#28B446] shadow-lg shadow-[#28B446] hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <img src={google} alt="" className="w-[1.5em] h-[1.5em]" />Iniciar con Google
              </button>

              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md bg-[#1976D2] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <img src={outlook} alt="" className="w-[1.5em] h-[1.5em]" />
                Iniciar con Outlook
              </button>
            </div>

            <h3 className="text-center flex flex-row items-center text-sm text-gray-500 justify-center">
                <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O continúa con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" />
            </h3>

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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={user} style={{ background: (error ? "#ffa6ac": "")}}/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={password} style={{ background: (error ? "#ffa6ac": "")}}/>
              </div>
            </div>
            
            {error && (
                            <h3 className="text-red-600 mb-3 text-sm md:text-base">
                                El usuario o contraseña son incorrectos.
                            </h3>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 transition-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No estas registrado?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Crear cuenta
            </Link>
          </p>
        </div>
            </div>
        </>
    );
}

export default Login;
