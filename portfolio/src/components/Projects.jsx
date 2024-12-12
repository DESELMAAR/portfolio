import React, { useState } from "react";
import ProjectsList from "./parts/ProjectParts/ProjectsList";


export default function Projects(){
    const [isModalVisible,setISModalVisible]=useState(false);
    
    return(
       <div className=" Projects lg:mx-16 md:mx-8 sm:mx-0  ">
        <p className="Projects_title text-center">Projects</p>
        <p className="text-center text-sm mb-1">here Some project made by React js ,Js,Tailwind css ,css in Backend , I used Laravel  </p>

        <ProjectsList/>
        <div className="App">
          
        </div>
       </div> 
    )
}