"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import styles from "./MyIntroduction.module.css";
import LinkButton from "../Button/Button";
import DownloadButton from "../DownloadButton/DownloadButton";
import Image from "next/image";
import ImageCard from "../ImageCard/ImageCard";

const MyIntroduction: React.FC = () => {
  const typedElementRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5 }
    );

    // GSAP animation for floating image
    gsap.to(imageRef.current, {
      y: 40, // Increase this value for a larger vertical movement
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Initialize Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: [
        "Full Stack Mobile/Web Developer",
        "React JS Developer",
        "React Native Developer",
        "Node Js Developer",
        "Next JS Developer",
      ],
      typeSpeed: 45,
      loop: true,
    });

    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.subContainer}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>
            I am <span className={styles.subName}>Hamza Maghfoor</span>
          </h1>
          <h3 className={styles.profession}>
            I am a professional{" "}
            <span ref={typedElementRef} className={styles.subProfession}></span>
          </h3>
        </div>
        <div className={styles.btnContainer}>
          <LinkButton text="Explore Projects" link="projects" />
          <DownloadButton />
        </div>
      </div>
      <div className={styles.subContainer2}>
        <ImageCard />
      </div>
    </div>
  );
};

export default MyIntroduction;
