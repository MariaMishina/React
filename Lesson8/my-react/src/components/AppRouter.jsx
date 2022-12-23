import React from 'react';
import {Route,Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";
import {Profile} from "./pages/Profile";
import ChatPage from "./pages/ChatPage";
import { Provider } from 'react-redux';
import { store } from '../store';

function AppRouter (){
    const chatStruct =
      {
        "ivan_author": { author: "Иван", id: "ivan_author" },
        "olga_author": { author: "Ольга", id: "olga_author" }
      }
  
    return (
          <>
          <Provider store={store}>
      <Routes>
        <Route path ="/profile" element = {<Profile/>}></Route>
        <Route path ="/chat_bot" element = {<Chat bot_name = {'Вася Бот'}/>}></Route>
        <Route path ="chat_friend">
          <Route 
              path=":chatId" 
              element={< ChatPage chatStruct={chatStruct} />} 
          />
        </Route>
        <Route path ="/chat_list" element = {<ChatList list = {Object.values(chatStruct)}/>}></Route>
        <Route path = '*' element = {<h2>404 Page notFOUND</h2>}></Route>
      </Routes>
      </Provider>
      </> 
    );
};

export default AppRouter;