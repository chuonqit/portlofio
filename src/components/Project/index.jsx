import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

const Project = ({ title, data }) => {
  return (
    <>
      <h2 className="px-1 text-left m-0">{title}</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Link to="slug-bai-viet" className={styles.sreen}>
            <div className={styles.bar}>
              <h3 className={styles.title}>Project name</h3>
            </div>
            <div className={styles.main}>
              <div className={styles.image}>
                <img src="https://caferati.me/images/portfolio/sky-go-desktop/list.jpg" />
              </div>
              <div className={styles.viewMore}></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
