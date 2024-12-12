import { useEffect, useState } from "react"
import axiosClient from "../../../axios-client";
import { UseStateContext } from "../../../context/ContextProvider";
import useForceUpdate from "../customHookReRendering";
import FormAdd from "../FormAdd";
import Spinner from "../spinner";

export default function Cards(){
    const [languages,setLanguages]=useState([]);
    const {notification,setNotification,token,showAddForm,setShowAddForm}=UseStateContext()
    const [showClose1,setShowClose1]=useState(false)
    const [showClose2,setShowClose2]=useState(false)
    const [showClose4,setShowClose4]=useState(false)
    const [showFormAdd,setShowFormAdd]=useState(true);
    const [loading,setLoading]=useState(false);


    const forceUpdate = useForceUpdate();

    const [showClose3,setShowClose3]=useState(false)


    const getLanguages=()=>{
        setLoading(true)
        axiosClient.get("/getlanguage").then(({data})=>{
            console.log(data.language)
            setLoading(false)
            if(data.language){
                setLanguages(data.language)

            }
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

    // function to avoid spinner loading

    const getLanguages2=()=>{
        axiosClient.get("/getlanguage").then(({data})=>{
            console.log(data.language)
            if(data.language){
                setLanguages(data.language)

            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    // 

    useEffect(()=>{
        getLanguages();
    },[])

    const handleClick1=(e)=>{
        console.log(e)
        if(showClose1){
            setShowClose1(false)
        }else{
            setShowClose1(true)

        }
    }
    const handleClick2=(e)=>{
        console.log(e)
        if(showClose2){
            setShowClose2(false)
        }else{
            setShowClose2(true)

        }
    }
    const handleClick3=(e)=>{
        console.log(e)
        if(showClose3){
            setShowClose3(false)
        }else{
            setShowClose3(true)

        }
    }
    const handleClick4=(e)=>{
        console.log(e)
        if(showClose4){
            setShowClose4(false)
        }else{
            setShowClose4(true)

        }
    }


    const handleDelete=(v)=>{
        console.log(v)
        axiosClient.delete("/delete/"+v).then(({data})=>{
            console.log(data)
            getLanguages2()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleAdd=()=>{
        if(showAddForm){
            setShowAddForm(false)
        }else{
            setShowAddForm(true)
        }
    }
    return(   
            <>
                {!loading ? <div className="">
                            {token && <button onClick={handleAdd} className="ml-2 imgIconEdit"><img className="" src="/icon/crayon.png" alt="" /></button>}
                            {showAddForm  && <div className=""><FormAdd getLanguages={getLanguages}/></div>}
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2  ">
                                        <div className="card  frontend  max-md:justify-center flex-wrap max-md:border-b-2 max-md:border-slate-300 md:border-l-2 md:border-slate-300 p-2">
                                                    <h1 className="font-semibold text-xl">Frontend</h1>
                                                    <div className="flex flex-wrap mt-2">
                                                    {languages.map((item,key)=>{                     
                                                                if(item.category==1){               
                                                                return  (
                                                                
                                                                <span onClick={()=>{handleClick1(item.id)}} key={key} className="m-2 relative spanimg">
                                                                    
                                                                    {showClose1 && token ? <button className="float-right absolute text-red-600 -top-2 -right-2 font-semibold" onClick={()=>{handleDelete(item.id)}}>X</button>:""}

                                                                    <img className="iconprogra" src={`../../../../public/icon/language_progra/`+item.language_name+`.svg`} alt="" />
                                                                    
                                                                    <p className="">{item.language_name}</p>
                                                                </span>
                                                                
                                                            )
                                                            }}
                                                            )}
                                                    </div>
                                        </div>

                                        <div className="card  backend max-md:justify-center max-md:border-b-2 max-md:border-slate-300 md:border-l-2 md:border-slate-300  p-2">
                                                    <h1 className="font-semibold text-xl ">Backend</h1>
                                                    <div className="flex flex-wrap mt-2">
                                                    {languages.map((item,key)=>{if(item.category==2){
                                                        
                                                        return  (     <span onClick={()=>{handleClick2(item.id)}} key={key} className="m-2 relative spanimg">
                                                                    
                                                        {showClose2 && token ? <button className="float-right absolute text-red-600 -top-2 -right-2 font-semibold" onClick={()=>{handleDelete(item.id)}}>X</button>:""}

                                                        <img className="iconprogra" src={`../../../../public/icon/language_progra/`+item.language_name+`.svg`} alt="" />
                                                        
                                                        <p className="">{item.language_name}</p>
                                                    </span>)
                                                    
                                                    }})}
                                                    </div>
                                            
                                        </div>

                                        <div className="card  database max-md:border-b-2   max-md:justify-center border-slate-300 md:border-l-2 max-md:border-slate-300 p-2">
                                                    <h1 className="font-semibold text-xl">Database</h1>
                                                    <div className="flex flex-wrap  mt-2">
                                                    {languages.map((item,key)=>{if(item.category==3){

                                                    return <span onClick={()=>{handleClick3(item.id)}} key={key} className="m-2 relative spanimg">
                                                                    
                                                    {showClose3 && token ? <button className="float-right absolute text-red-600 -top-2 -right-2 font-semibold" onClick={()=>{handleDelete(item.id)}}>X</button>:""}

                                                    <img className="iconprogra" src={`../../../../public/icon/language_progra/`+item.language_name+`.svg`} alt="" />
                                                    
                                                    <p className="">{item.language_name}</p>
                                                </span>
                                        
                                                    }})}
                                                    </div>
                                        </div>
                            </div>
                            <div className="mt-4">
                                <h1 className="font-semibold text-xl">Others technologiges</h1> 
                                <div className="flex flex-wrap mt-2 ">
                                                            {languages.map((item,key)=>{                     
                                                                if(item.category==4){               
                                                                return      <span onClick={()=>{handleClick4(item.id)}} key={key} className="m-2 relative spanimg">
                                                                    
                                                                {showClose4 && token ? <button className="float-right absolute text-red-600 -top-4 -right-4 font-semibold" onClick={()=>{handleDelete(item.id)}}>X</button>:""}

                                                                <img className="iconprogra" src={`../../../../public/icon/language_progra/`+item.language_name+`.svg`} alt="" />
                                                                
                                                                <p className="">{item.language_name}</p>
                                                            </span>
                                                            
                                                            }}
                                                            )}
                                </div>
                            </div>
                </div>: <div className="mx-auto"><Spinner/></div>}
            </>
       
    )
}