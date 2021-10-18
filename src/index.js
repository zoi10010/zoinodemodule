import React from 'react'
import styles from './styles.module.css'

export const ZButton = ({ text, style, className, onClick }) => {
  return <input className={className ? className : styles.test} style={style} type="button" onClick={onClick} value={text ? text : "Submit"} />
}

export const ZTextBox = ({ value, style, className,onChange }) => {
  return <input className={className ? className : styles.test}  onChange={onChange} style={style} type="text" value={value} />
}
