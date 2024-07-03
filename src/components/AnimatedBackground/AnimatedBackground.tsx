'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';
import robot from '../../assets/images/robot.png';

const AnimatedBackground = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const [showRobotText1, setShowRobotText1] = useState(false);
  const [showRobotText2, setShowRobotText2] = useState(false);
  const [showRobotText3, setShowRobotText3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirstText(true);
    }, 4000);

    const timer2 = setTimeout(() => {
      setShowFirstText(false);
    }, 7000);

    const timer3 = setTimeout(() => {
      setShowSecondText(true);
    }, 8000);

    const timer4 = setTimeout(() => {
      setShowSecondText(false);
    }, 11000);

    const timer5 = setTimeout(() => {
      setShowRobot(true);
    }, 12000);

    const timer6 = setTimeout(() => {
      setShowRobotText1(true);
    }, 12000);

    const timer7 = setTimeout(() => {
      setShowRobotText1(false);
      setShowRobotText2(true);
    }, 15000);

    const timer8 = setTimeout(() => {
      setShowRobotText2(false);
      setShowRobotText3(true);
    }, 21000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
    };
  }, []);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.blackHole}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
      />
      {showFirstText && (
        <motion.div
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Hi!!!
        </motion.div>
      )}
      {showSecondText && (
        <motion.div
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          My Name is Hamza Maghfoor
        </motion.div>
      )}
      {showRobot && (
        <motion.div
          className={styles.robotContainer}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          {showRobotText1 && (
            <motion.div
              className={styles.robotText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              I am an expert MERN Stack Developer
            </motion.div>
          )}
          {showRobotText2 && (
            <motion.div
              className={styles.robotText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              I can create exeptional Mobile/Web Applications using javascript.
            </motion.div>
          )}
          {showRobotText3 && (
            <motion.div
              className={styles.robotText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              For Further Information You can Visit My projects.
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedBackground;
