import React, { useState } from "react";
import ProjectsList from "./parts/ProjectParts/ProjectsList";
import AddProject from "./parts/ProjectParts/AddProject";
import ProjectWord from "./parts/ProjectParts/ProjectWord";

export default function Projects(){
    const [showAddProjectForm,setShowAddProjectForm]=useState(true);
    return(
       <div className=" Projects  lg:mx-16 md:mx-8 sm:mx-0 rounded-md  lg:p-4 md:p-2 sm:p-1 relative  ">
        <ProjectWord/>
        <ProjectsList/>
            {showAddProjectForm && <AddProject/>}
       </div> 
    )
}