import React, { useEffect, useState } from "react";
import { Login } from "./parts/login";
import { UseStateContext } from "../context/ContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormToAddFile from "./parts/BioParts/formToAddFile";
import AlertNotification from "./parts/AlertNotification";
import axiosClient from "../axios-client";
import AddTechnologyButton from "./parts/AddTechnologyButton";
import { CSSTransition } from "react-transition-group";
import { Link,Element } from "react-scroll";


export default function Bio(){
   const [isVisible, setIsVisible] = useState(false);
   const [show, setShow] = useState(false);
   const {showModalAddTechnology,setShowModalAddTechnology}=UseStateContext();
   

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
toggleFormAddFile()
}

const handleDownloadCv=()=>{
   
  
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

const ShowModal=()=>{
   if(showModalAddTechnology){
       setShowModalAddTechnology(false)
   }else{
       setShowModalAddTechnology(true)
   }
   }

    return(
      <>
                 <Element name="bio"  className="Bio grid mb-4 relative  lg:grid-cols-2   z-50 grid-cols-1 ">
            <div className="left bg-white p-4   max-sm:grid max-sm:justify-center">
               <div className="socialmedia flex gap-2">
               { <img className="h-40" src="/project_img/99.jpg" alt="" />}

                  <a target="_blank" href="https://www.linkedin.com/in/abdessamad-el-maaroufi-6b18bb224/">
                  <img className="w-10" src="/icon/language_progra/linkedin.svg" alt="" />
                  </a>
                  <a  target="_blank" href="https://web.facebook.com/abdessamad.elmaaroufi.31/">
                  <img className="w-10" src="/icon/language_progra/facebook.svg" alt="" />
                  </a>
                  <a target="_blank" href="https://github.com/DESELMAAR">
                  <img className="w-10" src="/icon/language_progra/github3.svg" alt="" />
                  </a>
               </div>
               <p className=" text-xl md:text-xl text-pink-950 font-semibold">Hello! I'm Abdessamad <br /> A FullStack Develloper </p>
               <p className="welcomeToMyPortfolio max-md:text-3xl max-md:font-semibold lg:text-4xl  md:text-6xl text-6xl flex-wrap text-cyan-900 md:font-bold">Welcome to my Portfolio</p>
               <p className="moreInfo text-md font-semibold sm:text-md text-slate-900  mb-3">Full Stack Developer,developing and designing responsive web applications, using modern frameworks and new technologies for frontend and backend development, enjoying collaborate with teams and learn more skills as a Full Stack Developer.</p>
               {
               token? <div> <div className="flex mb-2">
                  <a onClick={()=>{downloadFileAtURL("http://127.0.0.1:8000/storage/"+file)}} target="_blank"    id="downloadCv" className="flex items-center px-2 rounded-full" >Download Cv</a>
                  
                  <button className="ml-2 rounded-full">See profile</button>
                  <button className="ml-2 imgIconEdit0 rounded-full">
                  <label htmlFor="iconinput">
                  <img onClick={handleShowToAddFile}  className="" src="/icon/language_progra/addfile.svg" alt="" />
                  </label>
                  </button>
                  </div>
                        <a onClick={ShowModal} className="text-fuchsia-950 font-semibold hover:border-b-2 border-fuchsia-950 transition-color duration-100  cursor-pointer">Add a new programing language</a>
                  </div>
                  :
                  <>
                  {localStorage.getItem("email")  ? <p  onClick={handleShowLogin} className="md:mx-auto flex items-center gap-4 text-blue-900 font-semibold text-xl rounded-full" ><img className="w-20" src="https://www.svgrepo.com/show/39989/welcome.svg" alt="welcome" /> Welcome to my portfolio!</p> :<button onClick={handleShowLogin} className="md:mx-auto  bg-teal-800 rounded-full">Login Now</button>}
                  </> 
               }
            </div>
            <div className="right max-md:w-full max-md:mx-auto max-md:bg-white">
            <CSSTransition
                  in={showFormToAddFile}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                  >
                  <FormToAddFile/>
            </CSSTransition>
            </div>
            {/* <Login/> */}
      </Element> 
      </>
    )
}