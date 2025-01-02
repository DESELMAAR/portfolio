
import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import { UseStateContext } from "../../../context/ContextProvider";
import SendComment from "./SendComment";
import { CSSTransition } from "react-transition-group";

export default function CommentsPart() {
    const { responseId, setResponseId,refreshComment,setRefreshComment,setNotification } = UseStateContext();
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages
    const [responseVisible, setResponseVisible] = useState(null); // ID of the comment to show the response form

    const getComment = (page = 1) => {
        try {
            axiosClient.get(`/getcomment?page=${page}`)
                .then(({ data }) => {
                    setComments(data.data.data);

                    setTotalPages(data.data.last_page); // Update total pages

                    // console.log("getcomment rerender")
                })
                .catch((e) => {
                    // console.log(e);
                });
        } catch (err) {
            // console.log(err);
        }
    };
useEffect(() => {
    getComment(currentPage); // Fetch comments for the current page
}, [refreshComment]);

    useEffect(() => {
        getComment(currentPage); // Fetch comments for the current page
    }, [currentPage]);
    const handleResponse = (commentId) => {
        setResponseVisible((prev) => (prev === commentId ? null : commentId)); // Toggle response form visibility
    };
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleDelete=(e)=>{
    // console.log(e)
    try{
       axiosClient.delete(`/deletecomment/${e}`).then(({data})=>{
        // console.log(data)
        setRefreshComment(true)
        setNotification("Comment deleted success! ")
       }).catch((err)=>{
        // console.log(err)
       })

    }catch(err){

    }
    }
    const handleDeleteAnswer=(e)=>{
        try{
            axiosClient.delete(`/deleteanswer/${e}`).then(({data})=>{
            //  console.log(data)
             setRefreshComment(true)
             setNotification("Comment deleted success! ")
            }).catch((err)=>{
            //  console.log(err)
            })
     
         }catch(err){
     
         }
    }
    return (
        <div className="">
            <h1 className="text-slate-700">{responseId}</h1>
            {comments.map((comment, index) => (
               
                <div key={index} className="flex hover:bg-indigo-950 transition-all relative duration-300 rounded-md flex-col w-full md:w-3/5 mt-2 space-y-2">
              
                    <div className="flex items-start space-x-4">
                        <div>
                            <div className="grid grid-cols-1 text-slate-400 font-semibold">
                                <div className=" p-4 rounded-xl">
                                    <p className="text-xs text-slate-600">{comment.created_at.slice(0,10)}/{comment.created_at.slice(11,20)}</p>
                                    <a href="#" className="text-sky-700 inline-block font-semibold mr-2">
                                        {comment.name.slice(0,10)}@
                                    </a>
                                    <p className="inline">{comment.comment}</p>
                                    <div className="flex  gap-2">
                                    <button className="text-sm text-slate-500 hover:underline">
                                        Like
                                    </button>
                                    <button
                                        className="text-sm text-slate-500 hover:underline"
                                        onClick={() => handleResponse(comment.id)}
                                    >
                                        Response
                                    </button>
                                    {
                                           localStorage.getItem("email") ?     <button
                                           className="text-sm text-slate-500 ml-10 hover:underline"
                                           onClick={() => handleDelete(comment.id)}
                                       >
                                           Delete
                                       </button> : ""
                                        }
                                
                                </div>
                                </div>
                               
                                {/* Render the response form conditionally */}

                                <CSSTransition
                                        in={responseVisible === comment.id}
                                        timeout={500}
                                        classNames="fade"
                                        unmountOnExit
                                        >
                                            <div className="mt-4 ml-20">
                                                <SendComment parentId={comment.id}   onCommentSent={() => getComment(currentPage)} />
                                            </div>
                                </CSSTransition> 


                             
                                {/* Display answers if available */}
                                {comment.answers.length > 0 ?
                                   comment.answers.map((item,key)=>{
                                   return (<div key={key} className="grid grid-cols-1 ml-20 relative  border-l border-slate-700 pl-2 pb-2 text-slate-400 font-semibold">
                                    <div className="  rounded-xl">
                                    <p className="text-xs text-slate-600">{item.created_at.slice(0,10)}/{item.created_at.slice(11,20)}</p>
                                        <a href="#" className="text-sky-700 inline-block font-semibold mr-2">
                                            {item.name.slice(0,10)}
                                        </a>
                                        
                                        <p className="inline">{item.comment}</p>
                                    </div>
                                    <div className="flex pl-4 gap-2">
                                        <button className="text-sm text-slate-600 hover:underline">
                                            Like
                                        </button>
                                        <button
                                            className="text-sm text-slate-500 hover:underline"
                                            onClick={() => handleResponse(item.id)}
                                        >
                                            Response
                                        </button>
                                        {
                                           localStorage.getItem("email") ? <button
                                           className="text-sm  text-slate-500 ml-10 hover:underline"
                                           onClick={() => handleDeleteAnswer(item.id)}
                                       >
                                           Delete
                                       </button> : ""
                                        }
                                       
                                    </div>
                                  

                                </div> )

                                   }) 
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                                   
                </div>
            ))}
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    className="px-4 py-2  rounded hover:bg-indigo-900"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="text-slate-500 grid place-items-center font-semibold">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 rounded hover:bg-indigo-900"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}



