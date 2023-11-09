import { useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider";
import { useNavigate } from "react-router-dom";
import sendReq from "../helpers/senreq";

const Auth = () => {
    let {state, dispatch} = useContext(GeneralContext);
    let navigate = useNavigate();
    
    let token = document.cookie.replace("auth=", "");
    console.log(token);

    sendReq("http://localhost:3000/user/auth", "post", {
        token
    }).then(data=>{
        console.log(data)
    });
}
 
export default Auth;