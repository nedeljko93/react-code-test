import React from "react";

import styles from "./styles.module.scss";

const Header = ({ title, children }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.contentWrapper}>
        <p className={styles.header}>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Header;
