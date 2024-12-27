import React from "react";
import { UseStateContext } from "../../context/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from "react-transition-group";
export default function AlertNotification(){
    const {notification,setNotification,colorNotification,setColorNotification}=UseStateContext()
    const notify = () => toast(notification);
    const handleClose =()=>{
        setNotification("")
    }

    return(
        
        <div className="sticky  top-0 mx-auto   text-black  ">
                           <CSSTransition
                                in={notification}
                                timeout={300}
                                classNames="fade"
                                unmountOnExit
                                >
                                <div className={colorNotification ? "bg-red-800  pl-2 py-2  text-center":"bg-red-800   pl-2 py-2  text-center"}>
                                     <span className="text-gray-200 font-semibold">{notification} <a className="ml-4 text-white " onClick={handleClose}>X</a><ToastContainer /></span>
                                </div>
                           </CSSTransition>
                {/* {notification && <div className={colorNotification ? "bg-red-800   pl-2 py-2  text-center":"bg-red-800   pl-2 py-2  text-center"}><span className="text-gray-200 font-semibold">{notification} <a className="ml-4 text-white " onClick={handleClose}>X</a><ToastContainer /></span></div> } */}

        </div>

    )
}