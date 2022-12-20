import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from '../store/profile/selectors'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './ProfilePage.module.css'

export function ProfilePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  // const hendleChange = () => {
  //   dispatch(changeName(value))
  //   setValue('')
  // }

  return (
    <>
      <h1>Профиль пользователя</h1>
      <h2 className={styles.profile}>{name}</h2>
      {/* <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())} >Изменить состояние</button>
      <br /> */}
      <TextField
        label="Имя" 
        variant="outlined"
        size="small"
        fullWidth
        autoFocus={true}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained" onClick={() => dispatch(changeName(value))}>Изменить имя</Button>
    </>
  )
}