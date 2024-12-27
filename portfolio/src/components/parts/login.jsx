import React, { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import { UseStateContext } from "../../context/ContextProvider";
import Spinner from "./spinner";
import LoginGoogle from "./NavBar/LoginGoogle";
import { CSSTransition } from "react-transition-group";

export function Login(){
    const {setToken,setUser,token,user,showLogin,setShowLogin ,showHolLoginDiv,setShowHolLoginDiv}=UseStateContext();
    const [mount,setMount]=useState(true);

    const userValue=useRef();
    const passwordValue=useRef();
    const [loading,setLoading]=useState(false);
    const handleSubmit=(e)=>{
        const payload={
            user:userValue.current.value,
            password:passwordValue.current.value
        }
        e.preventDefault();
  
    setLoading(true);
    axiosClient.post("/login",payload).then((data)=>{
        setLoading(false);
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

const toggleComponent = () => {
        setMount(false); // Unmount
        setTimeout(() => setMount(true), 0); // Remount
      };
    return (
        <>
            <CSSTransition
                  in={showLogin}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                  >
                   <div className={ token? "bg-white absolute -top-20 right-0  sticky login  top-0  sm:top-10 right-60 p-2  max-sm:w-full max-sm:top-16 2xl:w-1/5 xl:w-2/5 max-lg:w-2/5 text-slate-700" :"bg-white sticky absolute top-0 right-0 login  top-0 sm:top-10 p-2 max-sm:top-16 max-sm:w-full 2xl:w-1/5 max-xl:w-2/5 max-lg:w-2/5 right-60 text-slate-700"}>
                        <LoginGoogle toggleComponent1={toggleComponent}/>
                        <hr className="mb-4"/>
                        <>
                            {<>
                                {!localStorage.getItem("displayName")? <p className="text-sm font-bold">Login Administrator</p>:""}
                                {loading? 
                                <div className="mx-auto"><Spinner/></div>:<>{!localStorage.getItem("displayName")?<p className="py-2 text-sm">Enter your user Account and Password</p>:""}
                            </>}
                        {!localStorage.getItem("displayName") ? <form action=""  className="grid grid-cols-1 gap-2">
                                <input ref={userValue} type="text"  className="bg-slate-200  rounded-md"/>
                                <input ref={passwordValue} type="password" className="bg-slate-200  rounded-md" />
                                <div>
                                <button type="submit" onClick={handleSubmit} className="bg-black text-white text-sm py-1 px-4 rounded-md font-semibold">Login </button>
                                <button onClick={handleCancel} className="text-cyan-800  ml-5 text-sm" >Cancel</button>
                                </div>
                                <p className="text-sm">Haven't an account? <strong className="text-sm">Subscribe Now</strong></p>
                                
                            </form>:""}
                            
                            </>
                            
                            }
                            
                            </>
                    </div>
            </CSSTransition>
       {/* {showLogin &&   
       
     
         
         } */}
        </>
       
    )
}