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
        <div className="mx-auto lg:mx-16 ">
            <button className="ml-2 imgIconEdit"><img className="text-white " src="/icon/crayon.png" alt="" /></button>
            {/* card */}
            <div className="grid-cols-1 grid md:grid-cols-2 lg:w-full lg:grid-cols-3  xl:grid-cols-3  mx-auto gap-2 mt-8">
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