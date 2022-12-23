import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../../store/profile/actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Profile() {

    const name = useSelector((store) => store.name)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const hendleChange = () => {
        console.log(value,setValue)
        dispatch(changeName(value))
        setValue('')
    }

    return (
        <div>
      <h1>Профиль пользователя</h1> 
        <hr />
      <h2>{name}</h2>
      <TextField
        variant="outlined"
        size="small"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <Button variant="contained" onClick={() => dispatch(changeName(value))}>Изменить имя</Button>
    </div>
    )
  
}
