import React from 'react'
import styles from './styles.module.css'

export const ZButton = ({ text, style, className }) => {
  return <input className={className ? className : styles.test} style={style} type="button" value={text ? text : "Submit"} />
}
