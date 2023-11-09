import { useEffect, useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider";
import { useNavigate } from "react-router-dom";
import sendReq from "../helpers/senreq";

const Auth = () => {
    const { dispatch } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = document.cookie.replace("auth=", "");
                const response = await sendReq("http://localhost:3000/user/auth", "post", null, {
                    authorization: `Bearer ${token}`
                });
                // Aquí puedes hacer algo con la respuesta de la API, como actualizar el estado del contexto.
                // dispatch({ type: "SET_USER", payload: response.data });
                console.log(response);
            } catch (error) {
                // console.error(error.response.data);
                // // Aquí puedes manejar errores, por ejemplo, redirigir al usuario a la página de inicio de sesión.
                // navigate("/login");
            }
        };

        fetchUserData();
    }, [dispatch, navigate]);

    return <div></div>;
};

export default Auth;
