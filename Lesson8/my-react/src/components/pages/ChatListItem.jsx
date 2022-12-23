import React from 'react';
import { Link } from 'react-router-dom';



 
const ChatListItem = (props) => {
    return(
        <div>
          <Link to = {`/chat_friend/${props.item.id}`}>{props.item.author}</Link> 
        </div>
    )
}
export default ChatListItem;