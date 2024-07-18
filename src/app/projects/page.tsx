'use client'

import React, { useState } from 'react';
import styles from './projects.module.css';
import StaticNav from '@/components/StaticNav/StaticNav';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const webProjects = [
  { title: 'Oladoc Website', backgroundImage: require('../../assets/images/oladocLogo.jpg').default },
  { title: 'Shippelo Website', backgroundImage: require('../../assets/images/ShippeloLogo.png').default },
];

const mobileProjects = [
  { title: 'Oladoc Mobile App', backgroundImage: require('../../assets/images/oladocLogo.jpg').default },
  { title: 'Shippelo Customer', backgroundImage: require('../../assets/images/ShippeloLogo.png').default },
  { title: 'Shippelo Driver', backgroundImage: require('../../assets/images/ShippeloLogo.png').default },
  { title: 'Shippelo Warehouse', backgroundImage: require('../../assets/images/ShippeloLogo.png').default },
  { title: 'Shippelo Admin', backgroundImage: require('../../assets/images/ShippeloLogo.png').default },
  { title: 'RMP', backgroundImage: require('../../assets/images/Logo-RMP.png').default },
  { title: 'RLY', backgroundImage: require('../../assets/images/Rly-logo.png').default },
  { title: 'Blood Donation', backgroundImage: require('../../assets/images/bloodLogo.png').default },
  { title: 'CFX Quantum(Wallet)', backgroundImage: require('../../assets/images/cfxquantum_logo.png').default },
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
