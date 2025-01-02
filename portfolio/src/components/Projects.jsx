import React, { useState } from "react";
import ProjectsList from "./parts/ProjectParts/ProjectsList";
import AddProject from "./parts/ProjectParts/AddProject";
import ProjectWord from "./parts/ProjectParts/ProjectWord";
import { Link,Element } from "react-scroll";
import { UseStateContext } from "../context/ContextProvider";
import Technology from "./parts/SkillsParts/Technology";
import { CSSTransition } from "react-transition-group";

export default function Projects(){
    const {showModalAddTechnology}=UseStateContext();
    
    return(
       <Element name="project" className=" Projects      sm:mx-0    relative  ">
        <ProjectWord/>
        <ProjectsList/>

        
       </Element> 
    )
}