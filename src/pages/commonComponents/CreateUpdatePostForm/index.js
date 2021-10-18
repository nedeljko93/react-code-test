import React from "react";
import { observer } from "mobx-react-lite";

import TextInput from "../../../common/TextInput";
import styles from "./styles.module.scss";
import { useFormikContext } from "formik";

const CreateUpdatePostForm = ({ isEdit = false }) => {
  const { errors, handleChange, touched, values } = useFormikContext();
  return (
    <div className={styles.formWrapper}>
      <TextInput
        isEdit={isEdit}
        touched={touched.title}
        errorMessage={errors.title}
        label="Title"
        value={values.title}
        name="title"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <TextInput
        isEdit={isEdit}
        touched={touched.body}
        errorMessage={errors.body}
        label="Body"
        value={values.body}
        name="body"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
};

export default observer(CreateUpdatePostForm);
