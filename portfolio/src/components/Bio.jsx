import React, { useEffect, useState } from "react";
import { Login } from "./parts/login";
import { UseStateContext } from "../context/ContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormToAddFile from "./parts/BioParts/formToAddFile";
import AlertNotification from "./parts/AlertNotification";
import axiosClient from "../axios-client";

export default function Bio(){
   const {token,user,showLogin,setShowLogin}=UseStateContext();
   const [showFormToAddFile,setShowFormToAddFile]=useState(false); //state to manage showing form to add CV file
   const [file,setFile]=useState("");
const handleShowLogin=()=>{
   if(showLogin){
      setShowLogin(false)
   }else{
      setShowLogin(true)
   }
}

// function for showing form to add a CV file 
const handleShowToAddFile=()=>{
   if(showFormToAddFile){
      
      setShowFormToAddFile(false)
   }else{
      setShowFormToAddFile(true)
   }
}
// 

const ShowHideFormAddFile=(value)=>{     //callback to hide and show form file adding 
console.log("showhideform",value)
setShowFormToAddFile(value)
}

const handleDownloadCv=()=>{
   // e.preventDefault();
  
   axiosClient.get(`/getfiles/${1}`).then(({data})=>{
      console.log(data.file.image)
      if(data.file.image){
         setFile(data.file.image)

      }
   }).catch((err)=>{
      console.log(err)
   })
}
useEffect(()=>{
   handleDownloadCv()
},[])

const downloadFileAtURL=(url)=>{
   const fileName = url.split("/").pop();
   const aTag=document.createElement("a");
   aTag.href=url;
   aTag.setAttribute("download",fileName);
   document.body.appendChild(aTag);

   aTag.click();
   aTag.remove();
}

    return(
      <div className="Bio grid  lg:grid-cols-2 lg:gap-6  z-50 grid-cols-1 ">
           {      console.log(file)
           }
            <div className="left max-sm:grid max-sm:justify-center">
               
               <p className="HiMyName text-xl md:text-3xl">Hello! My name is Abdessamad <br /> A FullStack Develloper</p>
               <p className="welcomeToMyPortfolio lg:text-7xl  md:text-6xl text-5xl flex-wrap">Welcome to my Portfolio</p>
               <p className="moreInfo text-sm sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, alias. Debitis nobis fugiat cum mollitia, suscipit quisquam omnis, magni aspernatur, aliquam est aliquid eius animi corrupti quam nam sapiente quis.</p>

               {
               token? <div> <div className="flex">
                  <a onClick={()=>{downloadFileAtURL("http://127.0.0.1:8000/storage/"+file)}} target="_blank"    id="downloadCv" className="flex items-center px-2" >Download Cv</a>
                  
                  <button className="ml-2">See profile</button>
                  <button className="ml-2 imgIconEdit0">
                  <label htmlFor="iconinput">
                  <img onClick={handleShowToAddFile}  className="" src="/icon/crayon.png" alt="" />
                  </label>
                  </button>
               

                  </div>
                  </div>
                  :
                  <>
                  <button onClick={handleShowLogin} className="md:mx-auto">Connect Now</button>

                  </> 
                  
               }
               
            </div>
            <div className="right">
               {showFormToAddFile && <FormToAddFile ShowHideFormAddFile={ShowHideFormAddFile}/> }
            </div>

      </div> 
    )
}