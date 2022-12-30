import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import { selectName, selectVisible } from '../store/profile/selectors'
import styles from './ProfilePage.module.css'

export function ProfilePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()



  return (
    <>
      <h1>Профиль пользователя</h1>
      <h2 className={styles.profile}>{name}</h2>
    </>
  )
}