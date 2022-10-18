import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        _id: "634c75c50d3a6e72b528a718",
        username:"jane",
        email:"jane@gmail.com",
        password:"$2b$10$zldA9q4fRI7Ua5IZKD2k6eqt89gXU9x2X07bn88DqoJM20Mqo6c3S",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        following:[],
        isAdmin:false,
    }
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider 
            value={{
                user: state.user, 
                isFetching:state.isFetching, 
                error:state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}