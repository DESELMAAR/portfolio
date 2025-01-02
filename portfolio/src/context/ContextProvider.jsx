import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
// create context
const StateContext = createContext({
    user: null,
    token: null,
    IsAdmin:null,
    showLogin:null,
    showAddForm:null,
    notification:null,
    colorNotification:null,
    showModalAddTechnology:null,
    refreshComment:null,
    setRefreshComment:()=>{},
    setColorNotification:()=>{},
    responseId:null,
    setResponseId:()=>{},
    showHolLoginDiv:null,
    setShowHolLoginDiv:()=>{},
    setShowModalAddTechnology:()=>{},
    setNotificatio:()=>{},
    setShowAddForm:()=>{},
    setShowLogin:()=>{},
    setUser: () => {},
    setToken: () => {},
    setIsAdmin:()=> {},

});
// create context provider
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        // name:"Abdessamad"
    });

    // debugger
    const [IsAdmin,setIsAdmin]=useState("")
    const [notification,setNotification]=useState("")
    const [showAddForm,setShowAddForm]=useState(false)
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [showLogin,setShowLogin]=useState(false)
    const [showModalAddTechnology,setShowModalAddTechnology]=useState(false);
    const [colorNotification,setColorNotification]=useState(false);
const [showHolLoginDiv,setShowHolLoginDiv]=useState(true);
const [responseId,setResponseId]=useState("");
const [ refreshComment,setRefreshComment]=useState(false);

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    setTimeout(()=>{
        if(notification){
            setNotification(false)

        }
    },5000)

    setTimeout(()=>{
        if(refreshComment){
            setRefreshComment(false)

        }
    },300)
    return (
        <StateContext.Provider value={{
            // pass data that we need for children pages user info and token ...
            user,
            token,
            showLogin,
            showAddForm,
            notification,
            showModalAddTechnology,
            colorNotification,
            showHolLoginDiv,
            responseId,
            refreshComment,
            setRefreshComment,
            setResponseId,
            setShowHolLoginDiv,
            setColorNotification,
            setShowModalAddTechnology,
            setNotification,
            setShowAddForm,
            setShowLogin,
            setUser,
            setToken,
            IsAdmin,
            setIsAdmin,
        }}>
            {/* component that will use values :user,token ..... */}
            {children}
        </StateContext.Provider>
    )
}

// export useStateContext to be used 
export const UseStateContext = () => useContext(StateContext);

// after that we can use useStateContext by import it in AdminLayout or UserLayout or DefaultLayout destructing const {user,token}=useStateContext()
// And use ContextProvider in main.jsx  <ContextProvider><RouterProvider router..../><ContextProvider/>  (to debugg use debugger to see value of token null or not)
// so if token is false we return to a login page : if(!token){return <Navigate to="/login"/>}   importing Navigate also 
// so by this we can protect our DefaultLayout pages or AdminLayout pages from not authenticated user and redirect them to GuestLayout (login page )