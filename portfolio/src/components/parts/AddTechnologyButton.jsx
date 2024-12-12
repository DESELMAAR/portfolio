import React from "react";
import { UseStateContext } from "../../context/ContextProvider";


export default function AddTechnologyButton(){

    const {user,showModalAddTechnology,setShowModalAddTechnology}=UseStateContext();
    const ShowModal=()=>{
        console.log(user)
        if(showModalAddTechnology){
            setShowModalAddTechnology(false)
        }else{
            setShowModalAddTechnology(true)
        }
        }

    return (
        <div className="px-10">
            <button onClick={ShowModal} className=""><i class="fa-solid fa-folder-plus text-4xl hover:text-orange-300 "></i></button>
        </div>
    )
}