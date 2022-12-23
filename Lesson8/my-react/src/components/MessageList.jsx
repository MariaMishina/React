import React from 'react';
import Message from './Message';

const MessageList = ({posts}) => {
    return (
        <div>
            {
              posts.map((post,) =>
                <div>
                  <Message post = {post} key = {post.id}/>
                </div>
              )
            }
        </div>
    )
}
export default MessageList;