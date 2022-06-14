import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ title, description }) => {
  return (
    <header className={styles.wrapper}>
      <div className="text-center">
        <Link to="/">
          <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" style={{ marginBottom: "1rem" }} />
        </Link>
      </div>
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <h3 className={styles.description}>{description}</h3>}
    </header>
  );
};

export default Header;
