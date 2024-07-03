// components/LinkButton.tsx

import React from "react";
import styles from "./Button.module.css";

interface LinkButtonProps {
  text: string;
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, link }) => {
  return (
    <a href={link} className={styles.linkButton}>
      <p className={styles.text}>{text}</p>
      <span className={styles.shine}></span>
    </a>
  );
};

export default LinkButton;
