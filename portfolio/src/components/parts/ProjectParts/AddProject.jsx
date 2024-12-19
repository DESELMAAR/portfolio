import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../../axios-client";

export default function AddProject({getProjectList}){
    const nameValue=useRef('');
    const fileValue=useRef('');
    const urlValue=useRef('');
    const urlrepoValue=useRef('');
    const selectValue=useRef(null);
    const [options,setOptions]=useState([]);

   const handlesubmit=(e)=>{
         e.preventDefault();
       const selectedValues=  Array.from(selectValue.current.selectedOptions).map(option=>
            (option.value)

         );
         console.log(selectedValues)
         const formData = new FormData();
        formData.append('image', fileValue.current.files[0]);
        formData.append('name', nameValue.current.value);
        formData.append('url', urlValue.current.value);
        formData.append('github', urlrepoValue.current.value);
        // formData.append('technologies', selectedValues);
        selectedValues.forEach((value) => {
            formData.append('technologies[]', value);
        });
        console.log(formData);
         axiosClient.post("/storeProject",formData).then(({data})=>{
            console.log(data);
            console.log(formData);
            getProjectList();
         }).catch((err)=>{
            console.log(err)
         })
   }

   useEffect(()=>{
     axiosClient.get("/technologies").then(({data})=>{
        console.log(data)
        setOptions(data)
     }).catch((err)=>{
        console.log(err)
     })
   },[])
    return (

        <div className="my-2">
             <form onSubmit={handlesubmit} className="grid  max-md:w-full rounded-md max-lg:w-4/5 w-2/5 gap-2 py-4 bg-white p-2 ">
                <input ref={nameValue} className="bg-slate-100 py-1 pl-2 rounded-sm text-slate-700"  type="text" placeholder="Enter Name project ..." />
                <input  ref={fileValue} className="bg-slate-100 py-1 pl-2 rounded-sm text-slate-700" type="file"  />
                <input  ref={urlValue} className="bg-slate-100 py-1 pl-2 rounded-sm text-slate-700" type="text" placeholder="Set url of the project ..." />
                <select ref={selectValue} className="bg-slate-100 py-1 pl-2 rounded-sm text-slate-700"  multiple>
                    {options.map((option,key)=>{
                        return (
                            <option key={key} value={option.id}>{option.name}</option>

                        )
                    })}
                </select>
                <input  ref={urlrepoValue} className="bg-slate-100 py-1 pl-2 rounded-sm text-slate-700" type="text" placeholder="set url repo of project ..." />
                 <div>
                 <button className="bg-cyan-800 rounded-full  px-8 py-1 hover:bg-emerald-700 text-white font-semibold">Save </button>

                 </div>
             </form>
        </div>
    )
}