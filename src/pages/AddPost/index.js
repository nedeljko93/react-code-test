import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Form, Formik } from "formik";

import saveIcon from "../../assets/images/save-white.svg";
import Button from "../../common/Button";
import CreateUpdatePostForm from "../commonComponents/CreateUpdatePostForm";
import Header from "../commonComponents/Header";
import { useNotificationModal, usePosts } from "../../stores";
import { PostSchema } from "../commonComponents/CreateUpdatePostForm/PostSchema";
import styles from "./styles.module.scss";

const AddPost = () => {
  const history = useHistory();
  const { resetPostObject, post, savePost } = usePosts();
  const { showDialog } = useNotificationModal();

  const handleSavePost = (value) => {
    savePost({
      body: value.body,
      title: value.title,
    }).then((resp) => {
      if (resp.status === 201 && !resp.error) {
        showDialog("Notification", "Post added successfully!", () =>
          history.goBack()
        );
      }
    });
  };

  useEffect(
    () => () => {
      resetPostObject();
    },
    []
  );
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...post }}
      validationSchema={PostSchema}
      onSubmit={handleSavePost}
    >
      {() => {
        return (
          <Form>
            <Header title="Add post">
              <div className={styles.buttonsWrapper}>
                <Button
                  isCancel={true}
                  title="Cancel"
                  type="button"
                  onClick={() => history.goBack()}
                />
                <Button title="Save" type="submit" icon={saveIcon} />
              </div>
            </Header>
            <CreateUpdatePostForm />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPost;
