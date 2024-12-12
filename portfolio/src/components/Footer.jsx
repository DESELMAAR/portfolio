import React from "react";
export default function Footer(){
    return(
       <div className="footer grid xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 bg-slate-800 py-8">
                <div className="contactme">
                    <div className="grid grid-cols-1 h-fit ">
                        <h3>Contact me :</h3>
                    <p>00212700161503</p>
                    <p>elmaarpro@gmail.com</p>
                    <p>www.myportfolio.com</p>
                    <p>github:elmaargood</p>
                    <p>frontend/elmaarpro</p>
                    </div>
                </div>

                <div className="contactme">
                    <h3>FontEnd</h3>

                    <p>Javascript</p>
                    <p>React js</p>
                    <p>Java</p>
                    <p>Vue</p>
                    <p>Angular</p>
                    <p>Design Pattern</p>
                </div>

                <div className="contactme">
                    <div className="grid grid-cols-1 h-fit ">
                            <h3>BackEnd</h3> 
                            <p>Php</p>
                            <p>Laravel</p>
                    </div>
                            

                </div>


                <div className="contactme">
                    <div className="grid grid-cols-1 h-fit ">
                            <h3>Database</h3>
                            <p>Mysql</p>
                            <p>Nosql</p>
                    </div>
                 
                </div>

                <div className="contactme">
                    <div className="grid grid-cols-1 h-fit ">
                            <h3>Database</h3>
                            <p>Mysql</p>
                            <p>Nosql</p>
                    </div>
                 
                </div>
       </div> 
    )
}