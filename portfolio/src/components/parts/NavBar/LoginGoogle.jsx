import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../../../firebase";
import { UseStateContext } from "../../../context/ContextProvider";
import AddTechnologyButton from "../AddTechnologyButton";
export default function LoginGoogle(){
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
        } catch (error) {
          console.error("Erreur lors de la déconnexion :", error);
        }
      };
    return (

             <div className="authgoogle">
                                <div>
                                    {console.log( user?.length )}
                                    {localStorage.getItem("displayName") ? (
                                        <div className="flex items-center">
                                        <h1>Bienvenue, {localStorage.getItem("displayName")}</h1>
                                        <img className="rounded-full w-12 mx-2" src={localStorage.getItem("photoURL")} alt="Avatar" />
                                        <button onClick={handleLogout}>Logout</button>
                                        <AddTechnologyButton/>
                                        </div>
                                    ) : (
                                      <div className="flex">
                                          <button onClick={handleLogin}>Connect with <img className="w-10 img_login_google inline-block  " src="../../../../public/icon/language_progra/gmail.svg" alt="" /></button>
                                          <AddTechnologyButton/>
                                      </div>
                                    )}
                                </div>
             </div>
    )
}