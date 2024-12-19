import React from  "react";
import axiosClient from "../../../axios-client";

export default function DeleteProject({id,getProjectList}){

const handleClickToDeleteProject=(e)=>{
    e.preventDefault();
console.log(id)

axiosClient.delete(`/deleteproject/${id}`).then(({data})=>{
    console.log(data)
    getProjectList()
}).catch((err)=>{
    console.log(err)
})
}
    return(

        <>
                        {localStorage.getItem("user") ? <a onClick={handleClickToDeleteProject} className="float-right absolute bottom-2 right-2  " href="#">
                        
                        
                        <img className="w-8 " src="../../../public/icon/language_progra/delete.svg" alt="" />
                        </a> :""}
        </>
     
    )
}