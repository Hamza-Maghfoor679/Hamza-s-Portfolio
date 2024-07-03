'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out',
        });

        gsap.to(cursor, {
          backgroundPosition: `${e.clientX / 10}px ${e.clientY / 10}px`,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
