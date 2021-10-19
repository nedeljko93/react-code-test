import React from "react";
import cc from "classcat";

import styles from "./styles.module.scss";

const Button = ({ title, icon, isCancel, ...props }) => {
  return (
    <button
      className={cc([styles.button, { [styles.cancelButton]: isCancel }])}
      {...props}
    >
      {title}
      {icon && <img alt="" className={styles.buttonIcon} src={icon} />}
    </button>
  );
};

export default Button;
