import { Outlet, Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'
export const navigate = [
  {
    id: 1,
    name: 'Начальная страница',
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
]

export function Header() {

  const name = useSelector((store) => store.name)

  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigate.map((link) => (
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
        <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}