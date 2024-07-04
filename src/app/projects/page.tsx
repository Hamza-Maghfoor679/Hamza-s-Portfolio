'use client'

import React, { useState } from 'react';
import styles from './projects.module.css';
import StaticNav from '@/components/StaticNav/StaticNav';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const webProjects = [
  { title: 'Web Project 1', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Web Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  // Add more web projects with background images as needed
];

const mobileProjects = [
  { title: 'Mobile Project 1', backgroundImage: require('../../assets/images/atom.png').default },
  { title: 'Mobile Project 2', backgroundImage: require('../../assets/images/atom.png').default },
  // Add more mobile projects with background images as needed
];

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState('web');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <CustomCursor />
      <StaticNav />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Projects</h1>
          <div className={styles.tabs}>
            <button
              className={selectedTab === 'web' ? styles.activeTab : ''}
              onClick={() => handleTabClick('web')}
            >
              Web
            </button>
            <button
              className={selectedTab === 'mobile' ? styles.activeTab : ''}
              onClick={() => handleTabClick('mobile')}
            >
              Mobile
            </button>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          {selectedTab === 'web' && (
            <div className={styles.projects}>
              {webProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
          {selectedTab === 'mobile' && (
            <div className={styles.projects}>
              {mobileProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;