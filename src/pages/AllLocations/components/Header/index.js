import React from "react";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.topPar}>All Locations</p>
      <h3 className={styles.header}>Acme locations</h3>
    </div>
  );
};

export default Header;
