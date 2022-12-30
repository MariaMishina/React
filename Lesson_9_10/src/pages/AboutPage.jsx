import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { connect } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/actions'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AboutPage(props) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [value, setValue] = useState('')

  return (
    <>
      <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <Button size="small" variant="contained" onClick={toggleTheme}>Изменить тему</Button>
      <hr />
      <br />
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
      <Button size="small" variant="contained" onClick={() => props.changeName(value)}>Изменить имя</Button>
    </>
  )
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible
})

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
  changeName: value => dispatch(changeName(value))
}) 

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)