import { useContext, useEffect, useRef, useState } from "react";
import GeneralContext from "../contexts/GeneralProvider.jsx";
import growly from '../assets/growly.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import bloquear from '../assets/bloquear.png';
import sendReq from "../helpers/senreq.js";
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
            <div className="bg-slate-100 w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                {/* <div className="container lg:w-1/3 md:w-2/3 sm:w-4/5 p-5 rounded-md">
                    <div>
                        <button className="bg-blue-600 p-3 mb-3 rounded-2xl text-white font-bold flex flex-row items-center justify-around back" onClick={e => { navigate("/") }}>
                            <img src={back} alt="" className="w-[15%]" />
                            <h3 className="text-sm">
                                Atras
                            </h3>
                        </button>
                    </div>

                    <form className="flex flex-col" onSubmit={e => { handleSubmit(e, user, password, setError, dispatch) }}>
                        <section>
                            <img src={growly} alt="" className="w-3/5 md:w-2/5 lg:w-1/3 mb-4 mx-auto" />
                            <h1 className="text-[2.5em] md:text-xl lg:text-2xl font-bold mt-4 text-[#0D378C]">Ingresa a tu cuenta</h1>
                            <h3 className="mt-2 text-xl text-gray-600">¡Bienvenido devuelta! Selecciona un método de Inicio de Sesión.</h3>
                        </section>

                        <div className="flex flex-row flex-wrap justify-between w-full gap-x-2 gap-y-3 mt-4 mb-4">
                            <button className="py-3 px-2 rounded-xl flex items-center justify-center gap-3 bg-[#28B446] shadow-lg shadow-[#28B446] text-white font-bold w-[5em] min-w-[48%]">
                                <img src={google} alt="" className="w-[1em] " />Iniciar con Google</button>

                            <button className="py-3 px-2 rounded-xl flex items-center justify-center gap-3 bg-[#1976D2] shadow-lg shadow-[#1976D2] text-white font-bold w-[5em] min-w-[48%]">
                                <img src={facebook} alt="" className="w-[1em]" />Iniciar con Facebook</button>
                        </div>

                        <h3 className="text-center flex flex-row items-center justify-center">
                            <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O continúa con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" />
                        </h3>

                        <section className="flex flex-col mt-4 mb-4 gap-y-2">
                            <div className="flex flex-row shadow-lg items-center px-3 py-2 rounded-lg" style={{
                                backgroundColor: (error ? "#ffa6ac" : "transparent")
                            }}>
                                <img src={email} alt="" width={40} />
                                <div className="flex flex-col justify-start block grow">
                                    <h3 className="px-3 text-gray-500">Usuario o correo</h3>
                                    <input type="text" name="" id="" placeholder="Correo electrónico" className="block py-1 px-3 border-bottom border-slate-100 outline-none bg-transparent w-full" required ref={user} />
                                </div>
                            </div>

                            <div className="flex flex-row shadow-lg items-center px-3 py-2 rounded-lg" style={{
                                backgroundColor: (error ? "#ffa6ac" : "transparent")
                            }}>
                                <img src={bloquear} alt="" width={40} className="py-1" />
                                <div className="flex flex-col justify-start block grow">
                                    <h3 className="px-3 text-gray-500">Contraseña</h3>
                                    <input type="password" name="" id="" placeholder="Contraseña" className="block py-1 px-3 border-bottom border-slate-100 bg-transparent w-full" required ref={password} />
                                </div>
                            </div>
                        </section>

                        {error && (
                            <h3 className="text-red-600 mb-3 text-sm md:text-base">
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
                                        value="newsletter" className="" />
                                    <label htmlFor="subscribeNews">Recuérdame</label>
                                </div>

                                <ul>
                                    <li><a href="" className="text-blue-600">
                                        ¿Se te olvidó la contraseña?
                                    </a></li>
                                </ul>
                            </div>

                            <button className="block bg-blue-800 py-3 text-white rounded-lg text-xl mt-4" type="submit">
                                Iniciar sesión
                            </button>

                            <div className="flex flex-row justify-center items-center mt-3 gap-x-5">
                                <h3>No tienes una cuenta?</h3>
                                <ul className="bg-blue-500 p-3 rounded-2xl flex flex-row items-center justify-center">
                                    <li className="text-white font-bold hover:shadow-blue-500 text-sm md:text-base"><Link to="/register" className="transition-[900ms]">Crea una cuenta.</Link></li>
                                </ul>
                            </div>
                        </section>
                    </form>
                </div> */}

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            
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
                <img src={facebook} alt="" className="w-[1.5em] h-[1.5em]" />
                Iniciar con Facebook
              </button>
            </div>

            <h3 className="text-center flex flex-row items-center text-sm text-gray-500 justify-center">
                <hr className="w-1/4 border-t-2 border-gray-300 my-0 mr-4" />O continúa con email<hr className="w-1/4 border-t-2 border-gray-300 my-0 ml-4" />
            </h3>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo o usuario
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                />
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
