import React from "react";
import Message from './components/Message';
import './style/App.css'
function App() {
  return (
    <div>
      <Message post = {{ id:1, title: 'Заголовок', body: 'Текст поста'}}/>
    </div>
   
  );
}

export default App;