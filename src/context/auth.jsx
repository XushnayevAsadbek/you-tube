import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const localData = JSON.parse(localStorage.getItem('token'))
    const [token,setToken] = useState(localData);
    useEffect(()=>{
        if (token) {
          return  localStorage.setItem('token', JSON.stringify(token));

        }

        localStorage.removeItem('token')
    },[token])
    return(
        <AuthContext.Provider value={{token , setToken}} >

            {children}
        </AuthContext.Provider>
    )
}