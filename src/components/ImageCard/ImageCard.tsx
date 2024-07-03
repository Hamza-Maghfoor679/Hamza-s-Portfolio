import React from 'react'
import styles from './ImageCard.module.css'
import Image from 'next/image'

export default function ImageCard() {
  return (
    <div className={styles.card}>
        <Image src={require('../../assets/images/profileBW.png')} alt='profile'/>
    </div>
  )
}
