import React from "react";
import cc from "classcat";

import styles from "./styles.module.scss";

const TextInput = ({
  label,
  isEdit,
  errorMessage,
  touched,
  isSearch = false,
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
          className={cc([styles.textInput, { [styles.editTextInput]: isEdit }])}
          {...props}
        />
      </label>
      {!isSearch && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
