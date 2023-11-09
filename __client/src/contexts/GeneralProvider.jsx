import { createContext, useReducer } from "react";

const GeneralContext = createContext();

function Reducer(state, action){
    switch(action.type){
        case "toggle_nav_foot":
            return {
                ...state,
                show: action.show
            }
            
        case "sign_in":
            return {
                ...state,
                auth: true,
                user: action.user
            }

        case "log_out":
            return {
                ...state,
                auth: false,
                user: null
            }

        default:
            return state;
    }
}

function GeneralProvider({children}){
    let [state, dispatch] = useReducer(Reducer, {show: true, auth: false, user: null});

    let data = {state, dispatch};

    return(
        <GeneralContext.Provider value={data}>
            {children}
        </GeneralContext.Provider>
    );
}

export {GeneralProvider};
export default GeneralContext;
