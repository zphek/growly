import React, { useContext, useEffect } from 'react';
import growly from '../assets/growly.png';
import { Link } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralProvider';

const Navbar = () => {
    let {state, dispatch} = useContext(GeneralContext);

    
    useEffect(()=>{
        console.log("cambio");
        console.log(state.show)
    }, [state.show])

    console.log(state, "  ....")
    
  return (
    <header>
        {state.show && <nav className='flex flex-row p-4 items-center justify-between'>
            <div className="brand">
                <img src={growly} alt="" className='w-[7em]'/>
            </div>

            <div className='collapse' style={{display: 'none'}}>

            </div>

            <div>
                <ul className='flex flex-row items-center'>
                    <li><Link href=""></Link></li>
                    <li><Link href=""></Link></li>
                    <li><Link href=""></Link></li>
                    {!state.user ? (
                        <>
                            <li><Link to="/login" className='p-3 px-4'>Iniciar Sesión</Link></li>
                            <li><Link to="/register" className='bg-blue-500 p-3 px-4 text-white rounded-lg'>Crear cuenta</Link></li>
                        </>
                    ) : (
                        <>
                            <h3>
                                {state.user.username}
                            </h3>
                        </>
                    )}
                </ul>
            </div>
        </nav>}
    </header>
  );
}

export default Navbar;
