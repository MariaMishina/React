import React from "react";

const Message = (props) =>{
    
    return (
       <div className="App">
        <strong className="post">{props.post.author}</strong>
        <div className="post_content">
            {props.post.text}
        </div>
       </div>
    );
};

export default Message;