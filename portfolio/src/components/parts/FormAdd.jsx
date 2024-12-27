import React, { useRef } from "react";
import { UseStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";

export default function FormAdd({getLanguages}){
    const {showAddForm,setShowAddForm,notification,setNotification}=UseStateContext();
    const handleBack=()=>{
        if(showAddForm){
            setShowAddForm(false)
        }else{
            setShowAddForm(true)
        }
    }
    const languageValue=useRef();
    const categoryValue=useRef();
    const handleSave=(e)=>{
        const payload={
            language_name:languageValue.current.value,
            category:categoryValue.current.value
        }
         e.preventDefault();
        //  console.log(payload)
        axiosClient.post("/storelanguage",payload).then((data)=>{
            // console.log(data.data)
            if(data.data.status===200){
                setNotification("Saved successfully!")
                getLanguages()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="w-1/4 mx-auto">
            <h3 className="text-sm font-semibold text-slate-700">Add new Skill</h3>
          
        <form action="" className="grid gap-3">
           
            <select ref={languageValue} name="" id="" className="px-4 py-1 text-sm rounded-md outline-none font-semibold border-gray-600 border">
                <option value="php">PHP</option>
                <option value="laravel">Laravel</option>
                <option value="javascript">Javascript</option>
                <option value="reactjs">Reactjs</option>
                <option value="python">Python</option>
                <option value="django">Django</option>
                <option value="java">Java</option>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="bootstrap">Bootstrap</option>
                <option value="tailwind">Tailwind css</option>
                <option value="mysql">Mysql</option>
                <option value="cassandra">Cassandra</option>
                <option value="hbase">Hbase</option>
                <option value="mongodb">Mangodb</option>
                <option value="git">Git</option>
                <option value="github">Github</option>
                <option value="docker">Docker</option>
                <option value="azure">Azure</option>
                <option value="firebase">Firebase</option>
                <option value="api">Api</option>


            </select>
            <select ref={categoryValue} name="" id="" className="px-4 py-1 font-semibold rounded-md outline-none  text-sm border-gray-600 border">
                <option value="1">Frontend</option>
                <option value="2">Backend</option>
                <option value="3">Database</option>
                <option value="4">Others</option>
            </select>
            <div>
            <button onClick={handleSave} className="bg-slate-500 rounded-md font-semibold text-sm  px-4 py-1 text-white">Save</button>
            <button onClick={handleBack} className=" font-semibold text-sm text-blue-800 px-4 py-2 ">Back</button>
            </div>
        </form>
        </div>
       
    )
}