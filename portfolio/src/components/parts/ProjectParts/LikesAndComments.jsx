import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import { UseStateContext } from "../../../context/ContextProvider";
export default function LikesAndComments({projectid,getProjectList,myRerender}){
    const {notification,setNotification}=UseStateContext();
    const handleLike = ()=>{
       
        const payload={
            name:localStorage.getItem("displayName"),
            email:localStorage.getItem("email"),
            project_id:projectid
        }
        
        if(localStorage.getItem("displayName")){
            axiosClient.post("/storelike",payload).then(({data})=>{
                if(data.status==="success"){
                    setNotification("Thank you!, you've just liked my project")
                    gettingLikes()

                }else if(data.status==="error"){
                    setNotification("Like removed")

                    gettingLikes()

                }
            }).catch((err)=>{
                console.log(err)
            })
             console.log("google auth fait ")
        }else{
             setNotification("Please log in to like this project")

        }
    }

    // get number o all likes here with the state where to store likes
    const gettingLikes=()=>{
        axiosClient.get("/getlikes").then(({data})=>{
            if(data){
                setLikes(data.data)
            }
            }).catch((err)=>{
              console.log(err)
            })
    }
    const [likes,setLikes]=useState([]);
    useEffect(()=>{
        gettingLikes()
      },[])

    // 

  
    return(
        <div className="absolute bottom-2 left-2 flex gap-4 items-center">
        <div className="flex gap-1">
          {/* make conditions to show liked projects and unliked project depending to logged user */}
           <img onClick={handleLike} className="w-8 cursor-pointer" src={( likes.filter((item)=>item.project_id===projectid).length>0 &&  (likes.filter((item)=>item.email===localStorage.getItem("email")
        )).length>0 ) ? "https://www.svgrepo.com/show/474057/like.svg":"https://www.svgrepo.com/show/474152/like.svg"} alt="like" />
           <span>
           {likes.filter((item)=>item.project_id===projectid
           ).length }
            </span>
           {/* <span>{(likes)? (likes).length:""}</span> */}
        </div>
        </div>
    )
}