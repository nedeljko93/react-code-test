import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useHistory, useParams } from "react-router";
import { Form, Formik } from "formik";

import saveIcon from "../../assets/images/save-white.svg";
import Button from "../../common/Button";
import Header from "../commonComponents/Header";
import CreateUpdatePostForm from "../commonComponents/CreateUpdatePostForm";
import { useNotificationModal, usePosts } from "../../stores";
import { PostSchema } from "../commonComponents/CreateUpdatePostForm/PostSchema";
import styles from "./styles.module.scss";

const UpdatePost = () => {
  const history = useHistory();
  const { postId } = useParams();

  const { getPost, resetPostObject, updatePost, post } = usePosts();
  const { showDialog } = useNotificationModal();

  const handleUpdatePost = (value) => {
    updatePost({
      id: post.id,
      body: value.body,
      title: value.title,
      userId: post.userId,
    }).then((resp) => {
      if (resp.status === 200 && !resp.error) {
        showDialog("Notification", "Post updated successfully!", () =>
          history.goBack()
        );
      }
    });
  };

  useEffect(() => {
    getPost(postId);

    return () => {
      resetPostObject();
    };
  }, [getPost, postId, resetPostObject]);

  return (
    <Formik
      enableReinitialize
      initialValues={{ ...post }}
      validationSchema={PostSchema}
      onSubmit={handleUpdatePost}
    >
      {() => {
        return (
          <Form>
            <Header title="Edit post">
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
            <CreateUpdatePostForm isEdit={true} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default observer(UpdatePost);
