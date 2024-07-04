// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './StaticNav.module.css';

const StaticNav = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={`${styles.hamza} nav-animation`}>Hamza</Link>
      </div>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></div>
      </button>
      <div className={`${styles.navbarMenu} ${isOpen ? styles.active : ''}`}>
        <Link href="/about" className={`${styles.navItem} nav-link-animation`}>About</Link>
        <Link href="/services" className={`${styles.navItem} nav-link-animation`}>Services</Link>
        <Link href="/projects" className={`${styles.navItem} nav-link-animation`}>Projects</Link>
        <Link href="/testimonials" className={`${styles.navItem} nav-link-animation`}>Testimonials</Link>
        <Link href="/contact" className={`${styles.navItem} nav-link-animation`}>Contact</Link>
      </div>
    </nav>
  );
};

export default StaticNav;
