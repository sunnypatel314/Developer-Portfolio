import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{"Hi, I'm Sunny Patel"}</h1>
        <p className={styles.description}>
          {
            "I'm a Computer Science student with an interest in software development and machine learning. Here, you'll find a showcase of my experiences, skills, and projects that reflect my dedication to technology. Let's build something amazing together!"
          }
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:sunnysp314@gmail.com"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage2.png")}
        alt="hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
