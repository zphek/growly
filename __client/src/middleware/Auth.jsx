import { useEffect, useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider";
import { useNavigate } from "react-router-dom";
import sendReq from "../helpers/senreq";

const Auth = () => {
    sendReq("http://localhost:3000/user/auth").then(data=>{
        console.log(data);
    }).catch(e=>{
        console.log(e);
    })

    //console.log("A");
};

export default Auth;
