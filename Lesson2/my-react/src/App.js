import React, { useEffect, useState } from "react";
import MessageList from "./components/MessageList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './style/App.css';
import { v4 } from 'uuid';

function App() {
  
  const [posts,setPosts] = useState([])

  const [text,setText] = useState('')
  const [author,setAuthor] = useState('')

  const [sended, setSended] = useState(false)
 
  const addNewMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      author: author,
      text: text,
      id: v4()
    }
   
    setAuthor('');
    setText('');
    setSended(true);
    setPosts ([...posts, newMessage])
  }


  const delay = ms => new Promise(res => setTimeout(res, ms));
  const sendAnswer = async () => {
    await delay(2000);
    addBotResponse();
  };

  useEffect(
    () => {
      if(sended){
        sendAnswer();        
      }
      setSended(false)   
    },
    [posts]
  )

  const addBotResponse = () => {
    const newMessage = {
      author: 'Bot',
      text: 'Bot answer',
      id: v4()
    }
    setPosts ([...posts, newMessage])
  }

  return (
    <div>
      <form>
        <MyInput value = {author} onChange = {e => setAuthor(e.target.value)} type = 'text' placeholder = 'Автор сообщения'/>
        <MyInput value = {text} onChange = {e => setText(e.target.value)} type = 'text' placeholder = 'Введите сообщение'/>
        <MyButton onClick = {addNewMessage} key={v4()} >Отправить сообщение</MyButton>
     </form>
      <MessageList posts = {posts} key={v4()} />
    </div>
  );
}

export default App;