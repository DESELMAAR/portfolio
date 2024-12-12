import React, { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import { UseStateContext } from "../../context/ContextProvider";
import Spinner from "./spinner";

export function Login(){

    const {setToken,setUser,token,user,showLogin,setShowLogin}=UseStateContext();
    const userValue=useRef();
    const passwordValue=useRef();
    const [loading,setLoading]=useState(false);
const handleSubmit=(e)=>{
    const payload={
           user:userValue.current.value,
           password:passwordValue.current.value
    }
    e.preventDefault();
// console.log(e);
console.log(payload)
setLoading(true);
axiosClient.post("/login",payload).then((data)=>{
    console.log(data.data);
    setLoading(false);
    console.log(data.data.token)
    if(data.data.token){
        setToken(data.data.token);

        setUser(data.data.user);
        if(data.data.user){
            localStorage.setItem("user",data.data.user.user);
        }
    }
})
}
const handleCancel=()=>{
    if(!showLogin){
        setShowLogin(true)
    }else{
        setShowLogin(false)
    }
}
    return (
         <div className={showLogin || token? "bg-white hidden login rounded-md sticky top-10 p-8 w-1/5 float-right text-slate-700" :"bg-white  login rounded-md sticky top-10 p-8 w-1/5 float-right text-slate-700"}>
            <p className="text-2xl font-bold">Login</p>
            <hr className="mb-4"/>
            {loading? <div className="mx-auto"><Spinner/></div>:<><p className="py-2 text-sm">Enter your user Account and Password</p>
            <form action=""  className="grid grid-cols-1 gap-2">
                <input ref={userValue} type="text"  className="bg-slate-200 p-1 rounded-md"/>
                <input ref={passwordValue} type="password" className="bg-slate-200 p-1 rounded-md" />
                <div>
                <button type="submit" onClick={handleSubmit} className="bg-black text-white text-sm py-1 px-4 rounded-md font-semibold">Login</button>
                <button onClick={handleCancel} className="text-cyan-800  ml-5 text-sm" >Cancel</button>
                </div>
              {console.log(showLogin)}
                <p className="text-sm">Haven't an account? <strong className="text-sm">Subscribe Now</strong></p>
            </form></>}
            
         </div>
    )
}