import React from "react";
import { Link,Element } from "react-scroll";
import CommentsPart from "./parts/CommentParts/Comments";
import SendComment from "./parts/CommentParts/SendComment";

export default function Comments(){
    return(
       <Element name="comment"  className="Comments mt-10 bg-gradient-to-r from-blue-950  to-indigo-950 p-2 md:p-14  sm:mx-0 ">

        <p className="text-xl text-slate-400 font-semibold">Comments</p>
        <p className="text-md text-slate-500">Leave comment here </p>
      
        <CommentsPart/>


       <div>
            <SendComment/>
       </div>
      

        
       </Element> 
    )
}