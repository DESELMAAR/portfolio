import React, { useState } from "react";
import { UseStateContext } from "../context/ContextProvider";
import UserInfo from "./parts/userInfo";
import { Login } from "./parts/login";
import AlertNotification from "./parts/AlertNotification";
import { auth, provider, signInWithPopup, signOut } from "../firebase";
import AddTechnologyButton from "./parts/AddTechnologyButton";
import LoginGoogle from "./parts/NavBar/LoginGoogle";
import { Link,Element } from "react-scroll";

export default function NavBar({reload}){
    const {user,token,showLogin ,setUser}=UseStateContext();
    const userstorage=localStorage.getItem("user");
    const [toggle,setToggle]=useState(false)

    const handleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          if( Object.keys(result.user).length>0){
            setUser(result.user); // L'utilisateur connecté

          }else{
            setUser(null)
          }
        } catch (error) {
          console.error("Erreur lors de la connexion :", error);
        }
      };
      const handleLogout = async () => {
        try {
          await signOut(auth);
          setUser(null);
        } catch (error) {
          console.error("Erreur lors de la déconnexion :", error);
        }
      };
const handleClickToggle=()=>{
    if(!toggle){
         setToggle(true)
    }else{
        setToggle(false)
    }
}
    return(
             
            <nav class=" border-gray-200 max-lg:bg-black  bg-opacity-95 overflow-visible    relative sticky top-0  navbarr">
                
                      <div class=" flex  flex-wrap overflow-visible items-center justify-between mx-auto p-2">
                          <a href="https://portfolio-elmaarpro.com/" class="grid grid-cols-1 justify-center gap-0">
                            
                              <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-slate-700"><span className="bg-red-950  dark:text-slate-200">A</span>bdessamad</span>
                              <span class="self-center text-center text-sm -mt-1 bg-red-950  font-semibold whitespace-nowrap dark:text-slate-200">ELMAAROUFI</span>
                          </a>

                          <button data-collapse-toggle="navbar-default" onClick={handleClickToggle} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                              <span class="sr-only">Open main menu</span>
                              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 1h15M1 7h15M1 13h15"/>
                              </svg>
                          </button>
                          <div class={toggle? "divdiv    w-full lg:block md:w-auto ":"divdiv   hidden w-full lg:block md:w-auto "} id="navbar-default">
                          <ul class={"font-bold flex flex-col p-4  max-md:hidden   items-center md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700 text-sm "}>
                              <li>
                              <Link  to="bio" class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-slate-700 " aria-current="page">Bio</Link>
                              </li>
                              <li>
                              <Link  to="skills" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</Link>
                              </li>
                              <li>
                              <Link  to="project" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                              </li>
                              <li>
                              <Link  to="contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-700 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">Contacts</Link>
                              </li>
                              <li>
                              <Link  to="comment" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-700 md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Comments</Link>

                              </li>

                          
                          </ul>
                          <ul class={toggle? "font-medium w-full flex flex-col p-4  md:hidden  items-center md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700 text-sm ":"font-medium  flex flex-col p-4 w-full  max-md:hidden  items-center md:p-0 mt-4   rounded-lg hidden  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700 text-sm "}>
                              <li>
                              <Link to="bio" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Bio</Link>
                              </li>
                              <li>
                              <Link to="skills" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</Link>
                              </li>
                              <li>
                              <Link to="project" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                              </li>
                              <li>
                              <Link to="contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacts</Link>
                              </li>
                              <li>
                              <Link to="comment" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Comments</Link>

                              </li>

                            {/* <Login/> */}

                            <div className="md:hidden">
                          <UserInfo reload={reload} handleLogout={handleLogout}/>

                          </div>
                          </ul>
                          
                          </div>
                          <div className="max-md:hidden">
                          <UserInfo reload={reload} handleLogout={handleLogout}/>


                          </div>
                    

                        
                          {/* <LoginGoogle/> */}
                      </div>
                      {/* <AlertNotification /> */}
                      <Login/>
            </nav>
            
          
    )
}