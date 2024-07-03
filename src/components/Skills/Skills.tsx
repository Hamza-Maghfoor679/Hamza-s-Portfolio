'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: string;
  className: string;
}



const platforms: Skill[] = [
  { name: 'HTML5', level: '95%', className: styles.wordpress },
  { name: 'CSS3', level: '95%', className: styles.prestashop },
  { name: 'JavaScript', level: '80%', className: styles.joomla },
  { name: 'React JS', level: '80%', className: styles.blogger },
  { name: 'React Native', level: '90%', className: styles.tridion },
  { name: 'Node JS', level: '70%', className: styles.tridion },
  { name: 'Express JS', level: '70%', className: styles.tridion },
  { name: 'MongoDb', level: '70%', className: styles.tridion },
  { name: 'Firebase', level: '70%', className: styles.tridion },
];



const Skills: React.FC = () => {
  const skillRefs = useRef<(HTMLSpanElement | null)[][]>([[], [], []]);

  useEffect(() => {
    [platforms].forEach((skillSet, colIndex) => {
      skillSet.forEach((skill, index) => {
        if (skillRefs.current[colIndex][index]) {
          gsap.fromTo(
            skillRefs.current[colIndex][index],
            { width: '0%' },
            { width: skill.level, duration: 1.5, ease: 'power2.out', delay: 0.5 * index }
          );
        }
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      
      <div className={styles.col}>
        <h2 className={`${styles.plataformas} ${styles.titulo}`}>Skills</h2>
        <ul className={styles.skill}>
          {platforms.map((skill, index) => (
            <li key={skill.name}>
              <span
                className={`${styles.greenline} ${skill.className}`}
                ref={(el) => { skillRefs.current[1][index] = el; }}
              ></span>
              <em>{skill.name}</em>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Skills;
