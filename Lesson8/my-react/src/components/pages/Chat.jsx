import React, { useEffect, useState } from "react";
import MessageList from "../MessageList";
import { v4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../../style/App.css';



function Chat(params) {
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
  const sendAnswer = async (bot_name) => {
    await delay(2000);
    addBotResponse(bot_name);
  };

  useEffect(
    () => {
      if(sended){
        sendAnswer(params['bot_name']);        
      }
      setSended(false)   
    },
    [posts]
  )

  const addBotResponse = (bot_name) => {
    const newMessage = {
      author: bot_name,
      text: 'Bot answer',
      id: v4()
    }
    setPosts ([...posts, newMessage])
  }

  return (
    <div >
      <div className="App">
      <form>
      <TextField value = {author} 
        onChange = {e => setAuthor(e.target.value)} 
        type = 'text' 
        id="outlined-basic" 
        variant="outlined"
        size="small"
        fullWidth
        autoFocus={true} />
        <TextField
        value = {text} 
        onChange = {e => setText(e.target.value)} 
        type = 'text' 
        label = 'Введите сообщение'
        id="outlined-basic"
        variant="outlined"
        size="small"
        fullWidth/>
        <Button variant="contained"  
        onClick = {addNewMessage} key={v4()} >Отправить сообщение</Button>
     </form>
     </div>
      <div>Чат с {params['bot_name']}</div>
      <MessageList posts = {posts} key={v4()} />
   
      
      
    </div>
  );
}

export default Chat;