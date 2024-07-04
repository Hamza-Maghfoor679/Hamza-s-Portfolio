"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <h1 className={styles.heading}>Experience</h1>
      <div className={styles.eduMain}>
        
        <div className={styles.subEdu}>
          <h2 className={styles.bachelors}>
            <span
              style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
            >
              React/React Native Developer{" "}
            </span>{" "}
            (Kodex Technologies)
          </h2>
          <h3 style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
            2023-current
          </h3>
          <h3 className={styles.subBach}>
            {" "}
            Kodex Technologies is a prominent software house where I
            significantly contributed to the success of various projects. I
            spearheaded the development of multiple high-impact applications,
            leveraging my expertise in React Native to deliver cutting-edge
            solutions. Notable achievements include:
          </h3>
          <li className={styles.subBach}>
            {" "}
            Led the development team in creating and maintaining high-impact
            applications using React Native and web technologies.
          </li>
          <li className={styles.subBach}>
            Designed and implemented responsive and user-friendly interfaces,
            ensuring optimal user experiences across platforms
          </li>
          <li className={styles.subBach}>
            Developed and integrated APIs to enhance application functionalities
            and data processing capabilities.
          </li>
          <li className={styles.subBach}>
            Played a pivotal role in optimizing application responsiveness and
            scalability, resulting in improved user engagement and satisfaction.
          </li>
          <li className={styles.subBach}>
            Collaborated closely with cross-functional teams to ensure seamless
            project delivery and adherence to best practices.
          </li>
          <li className={styles.subBach}>
            Contributed to making Kodex Technologies a leader in software
            development by delivering innovative solutions that exceed client
            expectations.
          </li>
          <p className={styles.subBach}>
            During my tenure as a Senior React Native Developer at Kodex
            Technologies, a prominent software house, I played a pivotal role in
            developing cutting-edge Web/Mobile applications. My contributions
            led to significant advancements in user experience and
            functionality, positioning Kodex as a leader in delivering
            innovative software solutions to clients.
          </p>
        </div>
        <div className={styles.subEdu}>
          <h2 className={styles.bachelors}>
            <span
              style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
            >
              React Native Developer{" "}
            </span>{" "}
            (Oladoc)
          </h2>
          <h3 style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
            2021-2023
          </h3>
          <h3 className={styles.subBach}>
            The finest and most used health care Application in Pakisan. Oladoc
            is the leading healthcare application in Pakistan, facilitating
            millions of users with seamless access to healthcare services.
          </h3>
          <li className={styles.subBach}>
            Worked as Senior React Native Developer in Oladoc for almost 3 years
            and took their Application on next level.
          </li>
          <li className={styles.subBach}>
            Led the development team as a Senior React Native Developer,
            contributing to significant advancements in the Oladoc app.
          </li>
          <li className={styles.subBach}>
            Designed and implemented various complex screens and user
            interfaces, ensuring high performance and user satisfaction.
          </li>
          <li className={styles.subBach}>
            Integrated APIs for improved functionality, enhancing data
            processing and user experience across the application.
          </li>
          <li className={styles.subBach}>
            Optimized application performance and responsiveness, resulting in
            increased user engagement and retention rates.
          </li>
          <li className={styles.subBach}>
            Collaborated with cross-functional teams including designers,
            backend developers, and QA testers to deliver high-quality features
            on schedule.
          </li>
          <p className={styles.subBach}>
            These efforts contributed to making Oladoc the most used healthcare
            application in Pakistan, revolutionizing access to healthcare
            services nationwide.
          </p>
        </div>
        <div className={styles.subEdu}>
          <h2 className={styles.bachelors}>
            <span
              style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
            >
              Junior React/React Native Developer{" "}
            </span>{" "}
            (MikroStarTech)
          </h2>
          <h3 style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
            2020-2021
          </h3>
          <h3 className={styles.subBach}>
            {" "}
            As a Junior React/React Native Developer at MikroStarTech, I play a
            pivotal role in the development and enhancement of mobile and web
            applications using cutting-edge technologies. My responsibilities
            included:
          </h3>
          <li className={styles.subBach}>
            {" "}
            Frontend Development: Crafting responsive and intuitive user
            interfaces using React and React Native.
          </li>
          <li className={styles.subBach}>
            Feature Implementation: Translating design wireframes and
            requirements into high-quality code and functionalities.
          </li>
          <li className={styles.subBach}>
            Collaborative Problem Solving: Working closely with cross-functional
            teams to troubleshoot and resolve technical issues.
          </li>
          <li className={styles.subBach}>
            Played a pivotal role in optimizing application responsiveness and
            scalability, resulting in improved user engagement and satisfaction.
          </li>
          <li className={styles.subBach}>
            Code Optimization: Ensuring the performance, scalability, and
            maintainability of applications through efficient coding practices.
          </li>
          <li className={styles.subBach}>
            Continuous Learning: Actively engaging in learning opportunities to
            stay updated with the latest advancements in React and React Native
            development.
          </li>
          <p className={styles.subBach}>
            As a Junior React/React Native Developer at MikroStarTech, I
            specialize in crafting responsive interfaces and implementing
            features that enhance user experiences across web and mobile
            platforms.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
