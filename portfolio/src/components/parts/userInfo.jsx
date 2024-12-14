import React, { useState } from "react"
import { UseStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";
import AddTechnologyButton from "./AddTechnologyButton";
export default function UserInfo({handleLogoutg}){
    const {user,token,showLogin,setShowLogin}=UseStateContext();
    const [visible,setVisible]=useState(false);
    // const [showLogin,setShowLogin]=useState(false);
    const btn =document.getElementById("dropdownDefaultButton")
    const userstorage=localStorage.getItem("user")
const handleClick=()=>{
    if(!visible){
        setVisible(true)

    }else{
        setVisible(false)
    }
}

const handleShowLogin=()=>{
    console.log("show login")
    handleLogoutg
    if(!showLogin){
        setShowLogin(true)
    }else{
        setShowLogin(false)
    }
}


const handleLogout=()=>{
    axiosClient.post("/logout").then((data)=>{
        console.log(data)
        localStorage.setItem("ACCESS_TOKEN","")
    localStorage.setItem("user","")
    location. reload(false);
    }).catch((err)=>{
        console.log(err)
    })
}
    return(
        <li className="list-none float-right">
              {token ? <button id="dropdownDefaultButton" onClick={handleClick} data-dropdown-toggle="dropdown" class="text-white   focus:outline-none text-lg font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center  " type="button"><p className="hidden lg:inline-block "> Welcome home Mr.</p> {userstorage} <svg class="w-2.5  h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>      
        </button>:<button onClick={handleShowLogin}>{!localStorage.getItem("displayName")? "login Now":<><img className="w-8 rounded-full" src={localStorage.getItem("photoURL")} alt="" /></>}</button>}
        
        <div id="dropdown" class={visible? "z-10 overflow-visible absolute   bg-white divide-y divide-gray-100 shadow w-44 dark:bg-black":"z-10 hidden overflow-visible absolute bg-white divide-y divide-gray-100  shadow w-44 dark:bg-blueray-800"}>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Profile</a>
              </li>
              
              <li>
                <a href="#" onClick={handleLogout} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 
                 dark:hover:text-white">Quit</a>
              </li>
             
   
            </ul>
        </div>
        </li>
     
    )
}