import PropTypes from 'prop-types'

export function MessageList ({messages}) {
  return (
    <>
      <h1>ЧАТ</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.author} : {message.text}
          </li>
        ))}
      </ul>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}