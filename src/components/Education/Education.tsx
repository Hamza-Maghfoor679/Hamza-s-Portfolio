import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <>
      <h1 className={styles.heading}>Education</h1>
      <div className={styles.eduMain}>
        <div className={styles.subEdu}>
          <h2 className={styles.bachelors}><span
                  style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
                >Bachelor of Science </span> in Computer Science</h2>
          <h3 className={styles.subBach}>Univerity of Gujrat, Hafiz Hayat Campus, Gujrat</h3>
          <h3 className={styles.subBach}>2017-2021</h3>
        </div>
        
      </div>
    </>
  );
};

export default Education;
