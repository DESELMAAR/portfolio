import React from "react";
import { UseStateContext } from "../../context/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AlertNotification(){
    const {notification,setNotification,colorNotification,setColorNotification}=UseStateContext()
    const notify = () => toast(notification);
    const handleClose =()=>{
        setNotification("")
    }

    return(
        
        <div className="sticky absolute top-0 mx-auto   text-black  ">
            {console.log()}
                {notification && <div className={colorNotification ? "bg-red-800   pl-2 py-2  text-center":"bg-blue-950   pl-2 py-2  text-center"}><span className="text-gray-200 font-semibold">{notification} <a className="ml-4 text-white " onClick={handleClose}>X</a><ToastContainer /></span></div> }

        </div>

    )
}