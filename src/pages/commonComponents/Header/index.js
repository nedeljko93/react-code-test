import React from "react";

import styles from "./styles.module.scss";

const Header = ({ title, children }) => {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.header}>{title}</p>
      {children}
    </div>
  );
};

export default Header;
