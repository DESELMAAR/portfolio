import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Comments from './components/Comments'
import Footer from './components/Footer'
import './App.css'
import { Login } from './components/parts/login'
import { ContextProvider, UseStateContext } from './context/ContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlertNotification from './components/parts/AlertNotification'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [load,setLoad]=useState(false)
  const {token,user}=UseStateContext();
  const reload=(value)=>{
    if(value){
      setLoad(true)

    }else{
      setLoad(false)

    }
  }
  return (
    <ContextProvider>
      <div className='max-sm:px-2 '>
            <NavBar reload={reload}/>
            <Bio/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Comments/>
            <Footer/>
          </div>
    </ContextProvider>
   
   
  )
}
export default App
