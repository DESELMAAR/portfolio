import React from "react";
import { Link,Element } from "react-scroll";

export default function Comments(){
    return(
       <Element name="comment"  className="Comments bg-slate-50   p-14  sm:mx-0 ">
        <p className="text-xl text-slate-950 font-semibold">Comments</p>
        <p className="text-md text-slate-700">Leave comment here </p>
        <form action="">
            <div className="Comments_img_textarea mt-4 flex  flex-cols-2  ">
                <div className="">
                {/* <img className="img-Comment" src="/project_img/pexels-monoar-rahman-22660-109371.jpg" alt=",,,"  /> */}
                <img className="img-Comment" src={localStorage.getItem("photoURL") ? localStorage.getItem("photoURL"):"/project_img/pexels-monoar-rahman-22660-109371.jpg"} alt="avatar"  />

                {/* {localStorage.getItem("photoURL")?} */}
                </div>
                <textarea className="w-3/4 ml-4" type="text" placeholder="Leave comment..." />
            </div> 
            <a className=""><img className="w-16 cursor-pointer hover:bg-slate-300 transition-all duration-300 p-4 rounded-full " src="/icon/language_progra/send.svg" alt="" /></a>
        </form>
       </Element> 
    )
}