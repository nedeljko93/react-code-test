import React from "react";
import { observer } from "mobx-react-lite";
import { useFormikContext } from "formik";

import TextInput from "../../../common/TextInput";
import TextArea from "../../../common/TextArea";
import backgroundImage from "../../../assets/images/background-form.jpg";
import styles from "./styles.module.scss";

const CreateUpdatePostForm = ({ isEdit = false }) => {
  const { errors, handleChange, touched, values } = useFormikContext();

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img alt="background" className={styles.image} src={backgroundImage} />
      </div>
      <div className={styles.formWrapper}>
        <p className={styles.subtitle}>
          {isEdit ? "Edit values" : "Add values"}
        </p>
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
        <TextArea
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
    </div>
  );
};

export default observer(CreateUpdatePostForm);
