import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import {Button} from '../ui/Button'
import { useDispatch } from 'react-redux'
import { addMessageWithReply,addMessage, } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import styles from './Form.module.css'

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessageWithReply(chatId, {
      author: AUTHOR.user,
      text
    }))

    setText('')
  }
  
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
      label="Сообщение" 
      variant="outlined"
      size="small"
      fullWidth
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
      />
      <Button type="submit">Написать сообщение</Button>
      </form> 
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}