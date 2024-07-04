'use client';

import React from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  iconClass: string;
  className: string;
}

const skills: Skill[] = [
  { name: 'HTML5', iconClass: 'devicon-html5-plain', className: styles.skillBox },
  { name: 'CSS3', iconClass: 'devicon-css3-plain', className: styles.skillBox },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain', className: styles.skillBox },
  { name: 'React JS', iconClass: 'devicon-react-original', className: styles.skillBox },
  { name: 'React Native', iconClass: 'devicon-react-original', className: styles.skillBox },
  { name: 'Node JS', iconClass: 'devicon-nodejs-plain', className: styles.skillBox },
  { name: 'Express JS', iconClass: 'devicon-express-original', className: styles.skillBox },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain', className: styles.skillBox },
  { name: 'Firebase', iconClass: 'devicon-firebase-plain', className: styles.skillBox },
];

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.plataformas} ${styles.titulo}`}>Technologies</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={skill.className}>
            <i className={`${skill.iconClass} ${styles.skillIcon}`}></i>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
