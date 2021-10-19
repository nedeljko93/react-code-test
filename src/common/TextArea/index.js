import React from "react";
import cc from "classcat";

import styles from "./styles.module.scss";

const TextArea = ({ label, errorMessage, touched, isEdit, ...props }) => {
  return (
    <div className={styles.textAreaWrapper}>
      <label>
        <p className={styles.label}> {label}</p>
        <textarea
          className={cc([styles.input, { [styles.editInput]: isEdit }])}
          {...props}
        />
      </label>
      {touched && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
};

export default TextArea;
