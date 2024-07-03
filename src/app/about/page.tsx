import React from "react";
import styles from "./about.module.css";
import StaticNav from "@/components/StaticNav/StaticNav";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Image from "next/image";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";

export default function page() {
  return (
    <>
      <section>
        <CustomCursor />
        <StaticNav />
        <h1 className={styles.heading}>
          About <span style={{ color: "#7A6EDA" }}>Me</span>
        </h1>
        <div className={styles.aboutMain}>
          <div className={styles.subAbout}>
            <div className={styles.profileContainer}>
              <Image
                src={require("../../assets/images/profile pic.jpg")}
                alt="profile"
              />
            </div>
            <div className={styles.textHeading}>
              <h1>
                From creating sleek user interfaces to developing powerful
                backend solutions, I thrive on solving complex problems and
                delivering high-quality, efficient solutions.{" "}
                <span style={{ color: "#7A6EDA", fontWeight: "bold" }}>
                  Let's team up and build something truly amazing together!
                </span>{" "}
              </h1>
              <br />
              <h1>
                Hey there! I'm Hamza Maghfoor, a passionate{" "}
                <span style={{ color: "#7A6EDA", fontWeight: "bold" }}>
                  Web and Mobile developer
                </span>{" "}
                who loves turning innovative ideas into dynamic, responsive
                applications. With my expertise in the{" "}
                <span style={{ color: "#7A6EDA", fontWeight: "bold" }}>
                  MERN stack—MongoDB, Express.js, React, and Node.js
                </span>
                —I'm dedicated to crafting seamless web experiences and robust
                mobile apps.
              </h1>
            </div>
          </div>
          <div className={styles.subAbout2}>
            <h1 className={styles.textHeading2}> Why me?</h1>
            <br />
            <div className={styles.paragraph}>
              <p>
                <span
                  style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
                >
                  {" "}
                  Proven Success Project Alpha:{" "}
                </span>
                <br />
                <br />
                Developed a cutting-edge e-commerce platform that increased
                client sales by 40% within six months. This project involved
                creating a seamless user experience, integrating secure payment
                gateways, and implementing a robust inventory management system.
                <br />
                <br />
                <span
                  style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
                >
                  Mobile App Bravo:{" "}
                </span>
                <br />
                <br />
                Created a highly-rated mobile application for a leading fitness
                brand, which was downloaded over 50,000 times in the first three
                months. The app features real-time workout tracking,
                personalized fitness plans, and social sharing capabilities.
                <br />
                <br />
                <span
                  style={{ fontSize: 22, fontWeight: "bold", color: "#7A6EDA" }}
                >
                  Dashboard Delta:
                </span>
                <br />
                <br />
                Designed and developed an intuitive analytics dashboard for a
                financial services company, enabling real-time data
                visualization and insightful reporting. This tool significantly
                improved the client's decision-making process and operational
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.skillsMain}>
          <Skills />
        </div>
      </section>
      <section>
        <div>
          <Education />
        </div>
      </section>
      <section>
        <Experience />
      </section>
    </>
  );
}
