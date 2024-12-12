import React from "react";
export default function Comments(){
    return(
       <div className="Comments bg-slate-50 md:m-16  p-14  lg:mx-16 md:mx-8 sm:mx-0">
        <p className="text-5xl text-slate-950">Comments</p>
        <p className="text-2xl text-slate-700">Leave comment here </p>
        <form action="">
            <div className="Comments_img_textarea mt-4 flex  flex-cols-2  ">
                <div className="">
                <img className="img-Comment" src="/project_img/pexels-monoar-rahman-22660-109371.jpg" alt=",,,"  />
                </div>
                <textarea className="w-3/4 ml-4" type="text" placeholder="Leave comment..." />
            </div> 
            <button >Sent</button>
        </form>
       </div> 
    )
}