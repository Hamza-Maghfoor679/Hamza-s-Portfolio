// components/ProjectCard/ProjectCard.tsx

import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

interface ProjectCardProps {
  backgroundImage: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ backgroundImage, title }) => {
  return (
    <>
    <div className={styles.mainClass}>
    <div className={styles.card}>
      <Image src={backgroundImage} alt="Project Image" layout="fill" objectFit="cover" />
    </div>
    <div>
        <p className={styles.p}>{title}</p>
    </div>
    </div>
   
    </>
  );
};

export default ProjectCard;
