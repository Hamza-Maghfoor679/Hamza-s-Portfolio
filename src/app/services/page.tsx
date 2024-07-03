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
  description: string;
}

const services: Service[] = [
  { 
    title: "Web Development", 
    description: "Building responsive and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in creating user-friendly interfaces with rich client-side interactions, backed by scalable and secure backend architectures." 
  },
  { 
    title: "Mobile Development", 
    description: "Creating cross-platform mobile applications using React Native for seamless user experiences on iOS and Android. I focus on developing applications that leverage native device capabilities while maintaining code efficiency and consistency across platforms." 
  },
  { 
    title: "API Development", 
    description: "Developing scalable and secure APIs with Node.js and Express, ensuring efficient communication between frontend and backend systems. I design APIs that adhere to RESTful principles, supporting data integration and interoperability for diverse application ecosystems." 
  },
  { 
    title: "Database Management", 
    description: "Designing and managing databases using MongoDB for flexible and robust data storage solutions. I optimize database performance, implement data security measures, and ensure data integrity for applications requiring efficient data handling and retrieval." 
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
          <p>{service.description}</p>
        </div>
      ))}
    </div>
    </>

  );
};

export default Services;
