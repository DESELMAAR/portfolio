import React, { useReducer, useState } from "react";
import FormAdd from "./parts/FormAdd";
import { UseStateContext } from "../context/ContextProvider";
import Cards from "./parts/SkillsParts/Cards";
import useForceUpdate from "./parts/customHookReRendering";
import Technology from "./parts/SkillsParts/Technology";
import AlertNotification from "./parts/AlertNotification";
import { CSSTransition } from "react-transition-group";
import { Link,Element } from "react-scroll";

export default function Skills(){
    const {token,user,showAddForm,setShowAddForm,notification,setNotification,showModalAddTechnology}=UseStateContext()
    const [reload,setReload]=useState(false);
    const forceUpdate = useForceUpdate();

   
   
   
  

    return(
                  <div className="">
                     <Element name="skills" className="Skills    sm:mx-0  lg:p-4 md:p-2 sm:p-1 relative ">
                       
                       <div className="mx-auto">
                           <p className="skills_title">Skills</p>
                           <p className="skill-info ml-5  w-4/5 flex-wrap text-md font-semibold">Solid skills as a fullStack Developper,  making differents projects to maintain my skills and develope  new features. Here you find some projects that I have made with these frontend and backend technologies</p>
                           <Cards/>
                       </div>
                  </Element>
                  </div>
                 
    )
}