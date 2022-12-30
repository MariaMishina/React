import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './ChatList.module.css';
import { push, set, remove } from "firebase/database";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase'


export function ChatList({messagesDB, chats}) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))

    set(messagesRef, {
      ...messagesDB,
      [value]: {
        name: value
      }
    })
    push(getMessageListById(value), {
      text: 'Чат создан',
      author: 'Админ',
    });

    setValue('');
  }

  const handleDeleteChat = (chatId) => {
    remove(getChatById(chatId));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link className ={styles.addChat} to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <Button size="small" variant="contained" onClick={() => dispatch(handleDeleteChat(chat.name))}>X</Button >
          </li>
        ))}
      </ul>

      
      <form className={styles.addChat} onSubmit={handleSubmit}>
      <TextField
        label="Название чата" 
        variant="outlined"
        size="small"
        fullWidth
        autoFocus={true}
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" type="submit">Создать чат</Button >
      </form>
    </>
  )
}