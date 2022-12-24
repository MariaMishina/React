import PropTypes from 'prop-types'
import styles from './Button.module.css'

export function Button(props) {
  return (
    <>
      <button className={styles.myBut} {...props}>{props.children}</button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string
}