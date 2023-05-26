import { useRef } from "react";
import {useAuth} from '../../hooks/useAuth';
import Config from "../../../config";
export const useLoginProps = () => {
    const[, setToken] = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    console.log(Config);
    const onLogin = ()=>{
        let email = emailRef.current.input.value;
        let password = passwordRef.current.input.value;
        console.log(email , password);
        let data ={
            email,
            password,
        }
        
        fetch(Config.url + '/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            if (res.status === 200 ) {
                return res.json()
            }
            alert('Something error')
        })
        .then((data)=> setToken(data))
    };
    return{onLogin,emailRef, passwordRef};
}