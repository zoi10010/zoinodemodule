import React from 'react'
import styles from './styles.module.css'

export const ZButton = ({ text }) => {
  return <input className={styles.test} type="button" value={text} />
}
