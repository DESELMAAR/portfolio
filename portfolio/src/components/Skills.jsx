import React, { useReducer, useState } from "react";
import FormAdd from "./parts/FormAdd";
import { UseStateContext } from "../context/ContextProvider";
import Cards from "./parts/SkillsParts/Cards";
import useForceUpdate from "./parts/customHookReRendering";
import Technology from "./parts/SkillsParts/Technology";
import AlertNotification from "./parts/AlertNotification";
export default function Skills(){
    const {token,user,showAddForm,setShowAddForm,notification,setNotification}=UseStateContext()
    const [reload,setReload]=useState(false);
    const forceUpdate = useForceUpdate();

   
   
   
  

    return(
                  <div className="Skills lg:mx-16 md:mx-8 sm:mx-0 rounded-md  lg:p-4 md:p-2 sm:p-1 relative ">
                       
                        <div className="">
                            <p className="skills_title">Skills</p>
                            <p className="skill-info text-center flex-wrap text-sm">I have a solid experence as a fullStack Developper,  making differents projects to maintain my skills and developpe for new features.  you find some project that I have made with these technologies</p>
                            <Technology/>
                            <Cards/>
                        </div>
                        
                   </div>
    )
}