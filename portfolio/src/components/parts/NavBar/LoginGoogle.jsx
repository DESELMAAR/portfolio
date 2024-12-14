import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../../../firebase";
import { UseStateContext } from "../../../context/ContextProvider";
import AddTechnologyButton from "../AddTechnologyButton";
export default function LoginGoogle({toggleComponent1}){
    const {user,token,showLogin ,setUser}=UseStateContext();
    const [mount,setMount]=useState(true);
    const handleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          if(result.user && typeof result.user==="object"){
            if( Object.keys(result.user).length>0){
                setUser(result.user); // L'utilisateur connecté
                localStorage.setItem("email",result.user.email);
                localStorage.setItem("displayName",result.user.displayName
                );
                localStorage.setItem("photoURL",result.user.photoURL
                );
              }
          }
        } catch (error) {
          console.error("Erreur lors de la connexion :", error);
        }
      };
      const toggleComponent = () => {
        setMount(false); // Unmount
        setTimeout(() => setMount(true), 0); // Remount
      };
      const handleLogout = async () => {
        try {
          await signOut(auth);
        //   setUser(null);
          localStorage.clear()
          toggleComponent();
          toggleComponent1()
        } catch (error) {
          console.error("Erreur lors de la déconnexion :", error);
        }
      };
    return (
             <div className="authgoogle">
                                <div>
                                    {localStorage.getItem("displayName") ? (
                                        <div className="flex items-center">
                                        <h1 className="text-sm">Bienvenue, {localStorage.getItem("displayName")}</h1>
                                        <img className="rounded-full w-8 mx-2" src={localStorage.getItem("photoURL")} alt="Avatar" />
                                        <button className="text-sm font-semibold hover:border-b-2" onClick={handleLogout}>Logout</button>
                                        </div>
                                    ) : (
                                      <div className="flex">
                                          <button className="text-sm flex  items-center" onClick={handleLogin}>Connect with <img className="w-8 ml-2 rounded-full img_login_google  " src="../../../../public/icon/language_progra/gmail.svg" alt="" /></button>
                                          {/* <AddTechnologyButton/> */}
                                      </div>
                                    )}
                                </div>
             </div>
    )
}