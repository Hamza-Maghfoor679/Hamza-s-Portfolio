// pages/services.tsx

'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from './Services.module.css';
import Navbar from "../Navbar/Navbar";
import StaticNav from "@/components/StaticNav/StaticNav";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

interface Service {
  title: string;
  description: string[];
}

const services: Service[] = [
  { 
    title: "Web Development", 
    description: [
      "Build responsive web applications",
      "Utilize the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Create user-friendly interfaces",
      "Ensure high performance and scalability",
      "Implement secure backend architectures"
    ]
  },
  { 
    title: "Mobile Development", 
    description: [
      "Develop cross-platform mobile applications",
      "Use React Native for iOS and Android",
      "Leverage native device capabilities",
      "Ensure seamless user experiences",
      "Maintain code efficiency and consistency"
    ]
  },
  { 
    title: "API Development", 
    description: [
      "Design and develop scalable APIs",
      "Use Node.js and Express framework",
      "Adhere to RESTful principles",
      "Support data integration and interoperability",
      "Ensure efficient communication between frontend and backend"
    ]
  },
  { 
    title: "Database Management", 
    description: [
      "Design and manage MongoDB databases",
      "Optimize database performance",
      "Implement data security measures",
      "Ensure data integrity and reliability",
      "Support efficient data handling and retrieval"
    ]
  },
];

const Services: React.FC = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(service, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, delay: index * 0.3 }
        );
      }
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <StaticNav />
      <h1 className={styles.title}>Services I <span style={{color: "#7A6EDA"}}> Offer</span></h1>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.service}
            ref={(el) => { serviceRefs.current[index] = el }}
          >
            <h2>{service.title}</h2>
            <ul className={styles.descriptionList}>
              {service.description.map((point, idx) => (
                <li key={idx}><span className={styles.bullet}></span>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
