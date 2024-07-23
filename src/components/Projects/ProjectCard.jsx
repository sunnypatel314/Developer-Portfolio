import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { FaGlobe, FaWebAwesome } from "react-icons/fa6";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, link, source },
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, i) => {
          return (
            <li className={styles.skill} key={i}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {link && (
          <a className={styles.link} href={link} target="_blank">
            Link
          </a>
        )}
        <a className={styles.link} href={source} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
