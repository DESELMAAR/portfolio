import React from "react";
export default function Footer(){
    return(
       <div className="footer grid xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 bg-slate-800 py-8">
                <div className="contactme">
                <div className="grid grid-cols-1 h-fit ">
                    <a href="#" class="grid grid-cols-1 justify-center gap-0">
                      
                      <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white"><span className="bg-white dark:text-slate-700">A</span>bdessamad</span>
                      <span class="self-center text-center text-sm -mt-1 bg-white  font-semibold whitespace-nowrap dark:text-slate-700">ELMAAROUFI</span>
                  </a>
                </div>
                <div className="socialmedia flex gap-2">
                  <a target="_blank" href="https://www.linkedin.com/in/abdessamad-el-maaroufi-6b18bb224/">
                  <img className="w-10" src="../../public/icon/language_progra/linkedin.svg" alt="" />
                  </a>
                  <a target="_blank" href="https://web.facebook.com/abdessamad.elmaaroufi.31/">
                  <img className="w-10" src="../../public/icon/language_progra/facebook.svg" alt="" />
                  </a>
                  <a target="_blank" href="https://github.com/DESELMAAR">
                  <img className="w-10" src="../../public/icon/language_progra/github3.svg" alt="" />
                  </a>
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
                        <h3>Contact me :</h3>
                    <p>00212700161503</p>
                    <p>elmaarpro@gmail.com</p>
                    <p>www.myportfolio.com</p>
                    <p>github:elmaargood</p>
                    <p>frontend/elmaarpro</p>
                    </div>
                 
                </div>
       </div> 
    )
}