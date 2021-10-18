import { CircularProgress } from "@material-ui/core";
import React from "react";

import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <CircularProgress className={styles.loader} />
    </div>
  );
};

export default Loader;
