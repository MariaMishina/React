import PropTypes from 'prop-types'
import styles from './Button.module.css'

export function Button(props) {
  return (
    <>
      <button style={{color: 'black'}} className={styles.myBut} {...props} onClick={props.click}>{props.children}</button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string
}