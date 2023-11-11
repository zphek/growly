import { useContext, useEffect, useState } from "react";
import GeneralContext from "../contexts/GeneralProvider";
import growly from '../assets/growly.png';

const handleOver = (e, setOver, val)=>{
    setOver(val)
}

const RegisterCompany = () => {
    let {state, dispatch} = useContext(GeneralContext);
    let [over, setOver] = useState(false);

    useEffect(()=>{
        dispatch({type: "toggle_nav_foot", show: false});
    }, []);
    
    return (<div className="bg-slate-100 h-[100vh] flex justify-center items-center min-h-full">
        <div className="lg:w-1/2 sm:w-[100%] xs:w-[100%] p-3">

            <h1 className="text-base text-[30px] font-bold mb-3 leading-2">CREAR CUENTA - EMPRESARIAL</h1>
            <hr className="mb-3"/>
            <form action="">
                <div className="w-[100%] flex flex-col mb-3">
                    <h2 className="text-base font-bold mb-1 rounded-md outline-none">NOMBRE DEL PROYECTO: </h2>
                    <input type="text" className="block border-b-5 border-gray-200 focus:ring-2 transition-[300ms]" name="" id="" required/>
                </div>

                <div className="w-[100%] flex flex-col mb-3">
                    <h2 className="text-base font-bold mb-1 rounded-md">DESCRIPCION DEL PROYECTO: </h2>
                    <textarea name="" className="border-b-5 border-gray-200 resize-none transition-[300ms] h-[180px]" id="" cols="30" rows="10" required></textarea>
                </div>

                <div className="w-[100%] flex flex-col mb-3">
                        <h3 className="text-base font-bold">Meta</h3>
                        <input type="number" placeholder="$RD" className="border-b-5 border-gray-200 focus:ring-2 transition-[300ms]" id="" min={0} required/>
                </div>

                <div className="border-dashed border-2 border-gray-300 w-[100%] h-[200px] flex flex-row items-center justify-center mt-2 bg-slate-50 relative transition-[300ms]" onMouseOver={e=>{handleOver(e, setOver, true)}} onMouseOut={e=>{handleOver(e, setOver, false)}}>
                    {!over ? (<button className="bg-blue-600 px-5 py-2 rounded-lg text-white text-base transition-[300ms] flex flex-row gap-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                            </svg>
                        Subir

                    </button>)
                    :
                    (<div className="absolute w-[100%] h-[100%] flex flex-row justify-center items-center bg-blue-500 bg-opacity-50 transition-[300ms]">
                        <h3 className="text-gray-600 text-lg select-none">
                            Suelta el archivo...
                        </h3>
                    </div>)}
                </div>

                <button className="bg-blue-600 px-3 py-1 text-sm font-bold text-white block w-[100%] rounded-sm mt-4" type="submit">
                    SUBIR PROYECTO
                </button>
            </form>
        </div>
    </div>);
}
 
export default RegisterCompany;