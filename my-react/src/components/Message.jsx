import React from "react";

const Message = (props) =>{
    return (
       <div className="App">
        <strong className="post">{props.post.id}.{props.post.title}</strong>
        <div className="post_content">
            {props.post.body}
        </div>
       </div>
    );
};

export default Message;