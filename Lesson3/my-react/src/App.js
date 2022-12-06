import React, { useEffect, useState } from "react";
import MessageList from "./components/MessageList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import './style/App.css';
import { v4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import axios from "axios";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';






function App() {
  const [posts,setPosts] = useState([])

  const [text,setText] = useState('')
  const [author,setAuthor] = useState('')

  const [sended, setSended] = useState(false)
  // Массив чатов:
  // async function fetchUser() {
  //   const respons = await UserService.getAll();
  //   console.log(respons)
  // }
   // fetchUser();
 
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
    <div >
      <div className="App">
      <div className="chat">
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Список чатов" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Список чатов" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
       <ListItemText primary="Список чатов" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Список чатов" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Список чатов" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Список чатов" />
      </ListItemButton>
     </div>
      <form>
      <TextField value = {author} 
        onChange = {e => setAuthor(e.target.value)} 
        type = 'text' 
        id="outlined-basic" 
        label="Автор сообщения" 
        variant="outlined"
        color="success"
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
        color="success"
        size="small"
        fullWidth/>
        <Button variant="contained" 
        color="success" 
        onClick = {addNewMessage} key={v4()} >Отправить сообщение</Button>
     </form>
     </div>
      <MessageList posts = {posts} key={v4()} />
   
      
      
    </div>
  );
}

export default App;