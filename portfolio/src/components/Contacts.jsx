import React from "react";
export default function Contacts(){
    return(
       <div className="Contacts p-10 lg:mx-16 md:mx-8 sm:mx-0  bg-gradient-to-r from-black  via-black via-black to-pink-950 ">
        <p className="text-center text-5xl font-semibold">Mail us</p>
        <p className="text-xl text-center ">You can use your google account to login and send us an email <button className="ConnectNow">Connect Now</button> </p>
        <div className="grid lg:grid-cols-2 mt-6 gap-6">
            <div className="mailLeft">
                <img src="/project_img/contact-img.svg" alt="....." />
            </div>
            <div className="mailright">
                <form action="" className="grid ">
                    <input type="text" placeholder="Name" />
                    {/* <input type="text" placeholder="Message..." /> */}
                    <textarea name="message" placeholder="Message..." id=""></textarea>
                    <div>
                         <button >Submit</button>
                    </div>
                </form>
            </div>
        </div>
       </div> 
    )
}