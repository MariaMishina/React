import React from 'react';
import ChatListItem from './ChatListItem';

function ChatList({list}){

    return (
        <div>{
            list.map((item) => <div>
                <ChatListItem item = {item} key = {item.id}></ChatListItem><br/>
            </div> )
        }

        
        </div>
    )


}
export default ChatList;