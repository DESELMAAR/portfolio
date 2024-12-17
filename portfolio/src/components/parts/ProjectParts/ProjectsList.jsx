import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";


export default function(){
    const [projects,setProjects]=useState([]);
    const [keyHover,setKeyHover]=useState("");

    useEffect(()=>{
        axiosClient.get("/getProjects").then(({data})=>{
            console.log(data)
            setProjects(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleMouseHover=(e,i)=>{
        console.log(e)
        setKeyHover(e)
    }
    return (
        <div className="mx-auto  ">
            <button className="ml-2 imgIconEdit"><img className="text-white " src="/icon/crayon.png" alt="" /></button>
            <div className="grid-cols-1 grid md:grid-cols-2 lg:w-full lg:grid-cols-3  xl:grid-cols-3  mx-auto gap-2 mt-8">

                  {projects.map((item,key)=>{
                     return (
                     <div onMouseLeave={()=>{handleMouseHover(null)}} onMouseOver={()=>{handleMouseHover(item.id,key)}} key={key} className={keyHover===item.id ? "project_itemOne":"project_item"}>
                      <img src={`http://127.0.0.1:8000/storage/${item.image}`} alt={item.image} />
                      <div>
                          <h4 className="text-center   border-slate-400">Details of the projects</h4>
                          <h3>Project name: {item.name}</h3>
                          <ul>
                              <li>Laravel</li>
                              <li>html</li>
                              <li>bootsrap</li>
                              <li>css3</li>
                          </ul>
                      </div>
                      <div  className={keyHover===item.id ? "btnsdivRelativeOne":"btnsdivRelative"}>
                        <div className="w-fit flex items-center gap-3 divlink z-50 opacity-50 hover:opacity-90 bg-slate-300 hover:bg-slate-700 transition-all duration-300 text-white  px-3 py-1 rounded-3xl">
                        <a href={item.url} target="_blanc" className="hover:bg-slate-800 transition-all duration-300 p-1 rounded-full flex">
                                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                                </svg>
                                {/* Go to the app */}
                       </a>
                        
                        <a href={item.github} target="_blanc" className="hover:bg-slate-900 transition-all duration-300 p-1 rounded-full">
                                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                </svg>

                        </a>
                        <a href="" className="hover:bg-slate-900 transition-all duration-300 p-1 rounded-full">

                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                </svg>

                        </a>
                        </div>     
                      </div>
                    </div>)
                  }) 
                  
                  }
            </div>
        </div>      
    )
}