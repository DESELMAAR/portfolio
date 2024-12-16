import React, { useRef } from "react";
import axiosClient from "../../../axios-client";

export default function AddProject(){
    const nameValue=useRef('');
    const fileValue=useRef('');
    const urlValue=useRef('');
    const urlrepoValue=useRef('');

   const handlesubmit=(e)=>{
         e.preventDefault();
         const formData = new FormData();
        formData.append('image', fileValue.current.files[0]);
        formData.append('name', nameValue.current.value);
        formData.append('url', urlValue.current.value);
        formData.append('github', urlrepoValue.current.value);

        
        
         axiosClient.post("/storeProject",formData).then(({data})=>{
            console.log(data)
         }).catch((err)=>{
            console.log(err)
         })
   }
    return (

        <div className="my-2">
             <form onSubmit={handlesubmit} className="grid AddProject max-md:w-full rounded-md max-lg:w-4/5 w-2/5 gap-2 py-4 bg-gradient-to-tr from-sky-800  via-cyan-900 to-cyan-700 p-2 ">
                <input ref={nameValue}  type="text" placeholder="Enter Name project ..." />
                <input  ref={fileValue} type="file"  />
                <input  ref={urlValue} type="text" placeholder="Set url of the project ..." />
                <input  ref={urlrepoValue} type="text" placeholder="set url repo of project ..." />
                 <div>
                 <button className="bg-white px-8 py-2 text-gray-700 font-semibold">Save </button>

                 </div>
             </form>
        </div>
    )
}