import Blackhole from '@/components/Blackhole/Blackhole'
import React from 'react'
import styles from './projects.module.css'
import StaticNav from '@/components/StaticNav/StaticNav'
import CustomCursor from '@/components/CustomCursor/CustomCursor'

export default function page() {
  return (
    <>
    <CustomCursor />
    <StaticNav />
    <h1 className={styles.heading}>Projects Will be Uploaded Soon</h1>
    <div className={styles.container}>
    <Blackhole />
    </div>
    </>
  )
}
