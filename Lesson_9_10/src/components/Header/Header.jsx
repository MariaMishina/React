import { Outlet, Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase'
import styles from './Header.module.css'
import Button from '@mui/material/Button';

export const navigates = [
  {
    id: 1,
    name: 'Главная страница',
    to: '/'
  },
  {
    id: 2,
    name: 'Профиль',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Чат',
    to: '/chats'
  },
  {
    id: 4,
    name: 'Статьи',
    to: '/articles'
  },
  {
    id: 5,
    name: 'О странице',
    to: '/about'
  }
]

export function Header() {

  const navigate = useNavigate()
  const name = useSelector((store) => store.profile.name)
  const isAuth = useSelector((store) => store.profile.isAuth)
  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogout = async () => {
    await logOut()
  }

  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigates.map((link) => (
              <li key={link.id}>
                <NavLink 
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'black' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
            {!isAuth && (
              <>
                <Button size="small" variant="contained" onClick={handleLogin}>Войти</Button >
                <Button size="small" variant="contained" onClick={handleSignUp}>Зарегистрироватся</Button>
              </>
            )}
            {isAuth && (
              <>
                <Button size="small" variant="contained" onClick={handleLogout}>Выйти</Button>
              </>
            )}
        <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}