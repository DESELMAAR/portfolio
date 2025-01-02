import React, { useRef, useState } from "react";
import { UseStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axios-client";
import { CSSTransition } from "react-transition-group";
export default function SendComment({ parentId, onCommentSent }) {
    const { notification, setNotification,refreshComment,setRefreshComment } = UseStateContext();
    const commentValue = useRef('');

    const handleSend = (e) => {
        const name = localStorage.getItem("displayName");
        const email = localStorage.getItem("email");
        const photo = localStorage.getItem("photoURL");
        e.preventDefault();
        // console.log(parentId)

        const payload = parentId
            ? {
                comment_id: parentId,
                comment: commentValue.current.value,
                name,
                email,
                photo
            }
            : {
                comment: commentValue.current.value,
                name,
                email,
                photo
            };
        const endpoint = parentId ? "/storeanswer" : "/storecomment";
        axiosClient.post(endpoint, payload)
            .then(({ data }) => {
                // console.log(data);
                if (onCommentSent) onCommentSent(); // Notify parent to refresh comments
                setNotification("Comment added success! ")

                setRefreshComment(true);
                commentValue.current.value = '';
            })
            .catch((err) => {
                // console.log(err);
            });
    };

    return (

      
        <form action="" onSubmit={handleSend}>
            <div className="Comments_img_textarea  my-2 flex  flex-cols-2">
                <div>
                    <img
                        className="img-Comment"
                        src={localStorage.getItem("photoURL") || "/project_img/default-avatar.jpg"}
                        alt="avatar"
                    />
                </div>
                <div className="relative w-3/4 ml-1">
                    <textarea
                        ref={commentValue}
                        className="w-full p-4 pr-16 border bg-inherit text-slate-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        type="text"
                        placeholder="Leave comment..."
                    />
                    <button
                        type="submit"
                        className=" bottom-4 right-2 px-4 text-lg bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>
       
       
    );
}

