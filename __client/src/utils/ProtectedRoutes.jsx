import { useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    
    let {state, dispatch} = useContext(GeneralContext);
    
    console.log("ruta protegida!");

    if(!state.user){
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
}
 
export default ProtectedRoutes;