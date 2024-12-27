import React, { useState } from "react";
import { useRef } from "react"
import axiosClient from "../../../axios-client";
import Spinner from "../spinner";
import { UseStateContext } from "../../../context/ContextProvider";

export default function FormToAddFile({ShowHideFormAddFile,isVisible}){

    const [loading,setLoading]=useState(false)
    const fileValue=useRef();
    const nameValue=useRef();
    const descriptionValue=useRef();
    const {notification,setNotification}=UseStateContext()

    const SaveFile=(e)=>{
      e.preventDefault();
        const formData = new FormData();
        formData.append('image', fileValue.current.files[0]);
        formData.append('name', nameValue.current.value);
        formData.append('description', descriptionValue.current.value);

        // console.log("tosave",formData)
        setLoading(true)
        axiosClient.post("/storefile",formData,{headers:{'Content-Type':"multipart/form-data"},}).then(({data})=>{
            // console.log(data)
            setLoading(false)
            setNotification("File uploaded successfully")
            ShowHideFormAddFile(false)
        }).catch((err)=>{
            // console.log(err)
            setLoading(false)
        })
    }
    return (

<div className="w-fit  h-full  p-4 rounded-md bg-white ">
    <h3 className="text-center font-bold text-purple-900">Add new CV</h3>
    <p className=" font-semibold text-slate-800 text-center py-2">A new CV will replace the old one</p>
            <form action="" className="grid grid-cols-1 gap-4 overflow-x-hidden  mb-2" encType="multipart/form-data" >
                <input ref={nameValue} type="text" placeholder="File Name" className="py-2 bg-slate-100 pl-2 focus:outline-none text-black font-semibold rounded-md "/>
               
                <textarea ref={descriptionValue} placeholder="Description" name="" id="" className="resize-none bg-slate-100 pl-2 focus:outline-none text-black font-semibold rounded-md "></textarea>
                <label htmlFor="inputfile " className="bg-cyan-600">
                    <input  ref={fileValue} id="inputfile" type="file" className="savefilelabel rounded-md ml-4 " />
                </label>
                <div className="">
                    <button onClick={SaveFile} className="savefile rounded-full  px-8 py-2 bg-red-500 ">Save File </button>

                </div>
            </form>
            <span className="mt-2">{loading && <Spinner/>}</span>
        </div>

        
    )
}