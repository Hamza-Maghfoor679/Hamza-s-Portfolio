import Blackhole from '@/components/Blackhole/Blackhole'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import StaticNav from '@/components/StaticNav/StaticNav'
import React from 'react'
import styles from './contact.module.css'

export default function contact() {
  return (
    <>
    <CustomCursor />
    <StaticNav />
    <h1 className={styles.heading}>Sorry Unable to Contact right now</h1>
    <div className={styles.container}>
    <Blackhole />
    </div>
   
    </>
  )
}
