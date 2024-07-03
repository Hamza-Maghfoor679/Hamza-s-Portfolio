'use client'

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import StaticNav from '@/components/StaticNav/StaticNav';
import styles from './Testimonials.module.css';
import Image from 'next/image';

const testimonialsData = [
  { name: 'John Doe', feedback: 'Great experience working with Hamza. Highly recommended!', position: 'CEO at Company' },
  { name: 'Jane Smith', feedback: 'Hamza delivered the project on time and exceeded our expectations.', position: 'CTO at TechCorp' },
  { name: 'Michael Johnson', feedback: 'Fantastic developer with a keen eye for detail.', position: 'Manager at DevFirm' },
  { name: 'Alice Brown', feedback: 'Hamza is a true professional. His work is top-notch.', position: 'Project Manager at WebWorks' },
  { name: 'David Wilson', feedback: 'Very satisfied with the results. Will hire again.', position: 'CEO at Innovatech' },
  { name: 'Emily Davis', feedback: 'Hamza has excellent coding skills and a great attitude.', position: 'Lead Developer at CodeBase' },
  { name: 'Frank Harris', feedback: 'Delivered beyond expectations. Highly skilled.', position: 'COO at SoftSolutions' },
  { name: 'Grace Lee', feedback: 'Pleasure to work with. Very professional.', position: 'Director at DesignHub' },
  { name: 'Henry Scott', feedback: 'Amazing work. Very detail-oriented.', position: 'Senior Engineer at BuildIt' },
  { name: 'Irene Walker', feedback: 'Hamza is a fantastic developer. Highly recommended.', position: 'Manager at Techies' },
  { name: 'Jack Young', feedback: 'Great results. Very reliable.', position: 'CEO at TechGen' },
  { name: 'Karen White', feedback: 'Hamza exceeded our expectations.', position: 'CTO at DevCompany' },
  { name: 'Liam Martinez', feedback: 'Highly recommend Hamza for any development work.', position: 'Lead Developer at WebFactory' },
  { name: 'Mia Robinson', feedback: 'Professional and very talented.', position: 'Product Manager at NetWorks' },
  { name: 'Noah Clark', feedback: 'Delivered high-quality work on time.', position: 'CEO at CloudCorp' },
  { name: 'Olivia Lewis', feedback: 'Very skilled and knowledgeable.', position: 'CTO at AppMasters' },
  { name: 'Peter Lee', feedback: 'Great experience working with Hamza.', position: 'Manager at IT Solutions' },
  { name: 'Quinn Hall', feedback: 'Hamza is a true expert in his field.', position: 'Director at DevStudios' },
  { name: 'Ryan Allen', feedback: 'Highly skilled and professional.', position: 'CEO at DigitalWorks' },
  { name: 'Sophia King', feedback: 'Exceptional developer. Very satisfied.', position: 'Project Manager at TechWave' },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <>
      <CustomCursor />
      <StaticNav />
      <div className={styles.container} ref={containerRef}>
        <h1 className={styles.heading}>Testimonials</h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ // Disable navigation buttons
            enabled: false,
          }}
          autoplay={{ delay: 2000 }}
          loop
          slidesPerView={1}
          className={styles.slider}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.testimonial}>
              <Image src={require('../../assets/images/profile pic.jpg')} alt='Testimonial Image' style={{width: 100, height: 100, borderRadius: 100,}}/>
                <p className={styles.feedback}>"{testimonial.feedback}"</p>
                <p className={styles.name}>- {testimonial.name}, {testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
