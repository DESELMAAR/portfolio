import React from "react";
export default function Comments(){
    return(
       <div className="Comments bg-slate-50 md:m-16  p-14 rounded-md lg:mx-16 md:mx-8 sm:mx-0 opacity-80">
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
            <button className="">Sent</button>
        </form>
       </div> 
    )
}