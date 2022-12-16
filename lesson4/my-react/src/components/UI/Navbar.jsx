import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className = 'navbar'>
        <div className="navbar__link">
          <Link className='link' to ="/profile">Профиль</Link>
          <Link className='link' to ="/chat_bot">Чат c ботом</Link>
          <Link className='link' to ="/chat_list">Список чатов</Link>
        </div>
      </div>
    )
}
export default Navbar;