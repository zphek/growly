import { useContext, useEffect } from 'react';
import growly from '../assets/growly.png';
import GeneralContext from '../contexts/GeneralProvider';

const page404 = () => {
    const {state, dispatch} = useContext(GeneralContext);
    
    useEffect(()=>{
        dispatch({type: "toggle_nav_foot", show:false});
    }, []);


    return (<div className="flex flex-col items-center justify-center h-[100vh] bg-slate-100">
        <img src={growly} alt="" className='w-[25%] fixed top-5'/>
        <h1 className="text-[15vw] font-bold">
            404
        </h1>

        <h3 className="text-[5vw]">
            PAGE NOT FOUND
        </h3>
    </div>);
}
 
export default page404;