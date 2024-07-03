import React from 'react'
import styles from './DownloadButton.module.css'

export default function DownloadButton() {
  return (
    <button className={styles.button}>
  <span className={styles.buttonContent}><p className={styles.text}>Download My Resume</p></span>
</button>
  )
}
