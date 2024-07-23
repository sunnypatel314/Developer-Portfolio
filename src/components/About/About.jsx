import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import specialities from "../../data/specialities.json";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {specialities.map((speciality, index) => {
            return (
              <li key={index} className={styles.aboutItem}>
                <img
                  className={styles.aboutItemImg}
                  src={getImageUrl(speciality.imageSrc)}
                  alt={speciality.imageAlt}
                />
                <div className={styles.aboutItemText}>
                  <h1>{speciality.title}</h1>
                  <p>{speciality.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
