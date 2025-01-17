import React, { useRef, useState } from "react";
import { UseStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axios-client";
import Spinner from "../spinner";
export default function Technology({getProjectList}){
    const {user,showModalAddTechnology,setShowModalAddTechnology,notification,setNotification,colorNotification,setColorNotification}=UseStateContext();
    const [loading,setLoading]=useState(false)

    const CloseModal=()=>{
        setShowModalAddTechnology(false)
    }
    const TechnologyValue=useRef("")
    const projectidValue=useRef("")

    const AddTechnology=(e)=>{
        e.preventDefault();
       const technology=TechnologyValue.current.value;

const payload={
    name:TechnologyValue.current.value,
    // project_id:projectidValue.current.value
}
     
        // console.log(payload)
        setLoading(true)
        axiosClient.post("/technology",payload).then(({data})=>{
            console.log(data.status)
            getProjectList();
            if(data.status){
                setNotification("Language Added successfully! Thank you ! keep going!")
                setColorNotification(false)
                
            }else{
                setNotification("Something Went wrong!")
                // setColorNotification(true)
            }
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
            setNotification("Something Went wrong!")
            setColorNotification(true)
        })
    }

    return(
    <>
    
        <div>
             {showModalAddTechnology && 
             
                <div className="max-w-xl:w-3/12 max-md:w-11/12 max-md:mx-auto max-lg:w-3/5  h-fit p-4  mx-auto  bg-white   fixed inset-y-14 right-0 z-50">
                    <h3 className="text-md font-semibold text-slate-700">Add new Language</h3>
                    <form className="grid gap-2 m-4">
                        <input ref={TechnologyValue} className="py-2 pl-2 bg-slate-100 text-purple-700 border-none outline-0 rounded-md" type="text" placeholder="Set A new Language..."/>
                        
                        <div className="grid gap-2 grid-cols-3">
                        <button type="submit" onClick={AddTechnology} className=" bg-orange-600 text-white  text-blue-700 px-8 py-2 font-semibold rounded-full hover:bg-cyan-700   transition-all duration-300">Save</button>
                        <button onClick={CloseModal} className="bg-white   px-8 py-2 font-semibold rounded-md  hover:text-blue-700 hover:text-white transition-all duration-300 text-cyan-600 ml-4">Cancel</button>
                        </div> 
                    </form>
                </div>
                
                }
        </div>
    </>
    )
}