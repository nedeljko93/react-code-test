import React from "react";
import cc from "classcat";

import styles from "./styles.module.scss";

const TextInput = ({
  errorMessage,
  isEdit,
  isSearch = false,
  label,
  touched,
  ...props
}) => {
  return (
    <div
      className={cc([
        styles.inputWrapper,
        { [styles.withOutPadding]: isSearch },
      ])}
    >
      <label>
        {!isSearch && <p className={styles.label}>{label}</p>}
        <input
          className={cc([styles.input, { [styles.editInput]: isEdit }])}
          {...props}
        />
      </label>
      {!isSearch && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
