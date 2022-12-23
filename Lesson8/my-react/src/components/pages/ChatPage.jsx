import React from 'react';
import Chat from './Chat';
import { useParams, Navigate } from 'react-router-dom'

function ChatPage(params){

    const {chatId} = useParams();


    if(chatId && !params['chatStruct'][chatId]) {
      return <Navigate to="/profile" replace />
    }

    return (
      <Chat bot_name = {params['chatStruct'][chatId]['author']}/>
    )
}
export default ChatPage;