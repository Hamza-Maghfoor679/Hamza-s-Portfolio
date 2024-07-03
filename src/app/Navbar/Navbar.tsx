// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.nav-animation', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    gsap.fromTo('.nav-link-animation', { y: 80, opacity: 0 }, { y: 0, opacity: 2, duration: 1, stagger: 0.5 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={`${styles.hamza} nav-animation`}>Hamza</Link>
       
      </div>
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

export default Navbar;
