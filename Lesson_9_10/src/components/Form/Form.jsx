import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import {Button} from '../ui/Button'
import { useDispatch } from 'react-redux'
import { addMessage ,addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'

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
    push(getMessageListById(chatId), {
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
          <Button type="submit">Отправить</Button>
      </form>
      
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}