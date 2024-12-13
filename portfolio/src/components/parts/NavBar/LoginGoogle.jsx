import React from "react";
import { auth, provider, signInWithPopup, signOut } from "../../../firebase";
import { UseStateContext } from "../../../context/ContextProvider";
import AddTechnologyButton from "../AddTechnologyButton";
export default function LoginGoogle(){
    const {user,token,showLogin ,setUser}=UseStateContext();
    const handleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          if( Object.keys(result.user).length>0){
            setUser(result.user); // L'utilisateur connecté

            localStorage.setItem("usergoogle",result.user);

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
    return (

             <div className="authgoogle">
                                <div>
                                    {console.log(user)}
                                    {!(Object.keys(user).length===0) ? (
                                        <div className="flex items-center">
                                        <h1>Bienvenue, {user.displayName}</h1>
                                        <img className="rounded-full w-12 mx-2" src={user.photoURL} alt="Avatar" />
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