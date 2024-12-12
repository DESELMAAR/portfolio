import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";


export default function(){
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
        axiosClient.get("/getProjects").then(({data})=>{
            console.log(data)
            setProjects(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className="mx-auto ">
            <button className="ml-2 imgIconEdit"><img className="text-white " src="/icon/crayon.png" alt="" /></button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                {console.log(projects)}
                {
                    projects? projects.map((item,key)=>{
                    return  (                     
                    <div key={key}  className="divProjects rounded-md shrink relative "> 
                        <button className="button_like top-2 left-2 absolute z-10 "> 
                            <i  className="fa-regular fa-heart text-4xl text-white "></i>
                        </button> 

                        <button className="  absolute bg-cyan-500 text-black bottom-2 left-2  p-2 rounded-md z-10 transition-all duration-700 hover:bg-red-900 text-white" >See Project</button>
                        
                        <button className="absolute top-2 right-2 z-10 bg-cyan-500 p-2">
                            <i class="fa-brands fa-github text-4xl hover:text-black "></i>
                        </button>
                         
                        <img className="h-56 imgProject w-full  z-0"  src={"http://127.0.0.1:8000/storage/"+item.image} alt={item.image} />      
                    </div>)
                    }):""
                }
            </div>



            {/* card */}
            <div className="grid-cols-1 grid md:grid-cols-2 lg:w-full lg:grid-cols-3  xl:grid-cols-3 xl:w-10/12 mx-auto gap-2 mt-8">
                  <div className="grid gap-2 bg-cyan-500 rounded-md p-4">
                    <img src="" alt="" />
                    <div>
                        <h4 className="text-center">details of the projects</h4>
                        <ul>
                            <li>Laravel</li>
                            <li>html</li>
                            <li>bootsrap</li>
                            <li>css3</li>
                        </ul>
                    </div>
                  </div>

                  <div className="grid gap-2 bg-cyan-500 rounded-md p-4">
                    <img src="" alt="" />
                    <div>
                        <h4>details of the projects</h4>
                        <ul>
                            <li>Laravel</li>
                            <li>html</li>
                            <li>bootsrap</li>
                            <li>css3</li>
                        </ul>
                    </div>
                  </div>

                  <div className="grid gap-2 bg-cyan-500 rounded-md p-4">
                    <img src="" alt="" />
                    <div>
                        <h4>details of the projects</h4>
                        <ul>
                            <li>Laravel</li>
                            <li>html</li>
                            <li>bootsrap</li>
                            <li>css3</li>
                        </ul>
                    </div>
                  </div>
            </div>
        </div>      
    )
}