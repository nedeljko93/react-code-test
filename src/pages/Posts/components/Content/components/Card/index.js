import React, { useState } from "react";
import { useHistory } from "react-router";

import arrowDownIcon from "../../../../../../assets/images/arrow-down-white.svg";
import arrowUpIcon from "../../../../../../assets/images/arrow-up-white.svg";
import editIcon from "../../../../../../assets/images/edit-white.svg";
import deleteIcon from "../../../../../../assets/images/delete-white.svg";
import DialogWithButtons from "../../../../../../common/DialogWithButtons";
import { usePosts, useNotificationModal } from "../../../../../../stores";
import styles from "./styles.module.scss";

const Card = ({ post, onCardClickHandler, reference }) => {
  const history = useHistory();

  const { deletePost } = usePosts();
  const { showDialog } = useNotificationModal();

  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);

  const handleConfirm = () => {
    deletePost(post.id).then((resp) => {
      setIsDeleteDialogVisible(false);
      if (!resp.error) {
        showDialog("Notification", "Post deleted successfully!");
      }
    });
  };

  return (
    <div
      className={styles.cardWrapper}
      onClick={onCardClickHandler}
      ref={reference}
    >
      <div className={styles.iconWrapper}>
        <img
          alt="edit"
          src={editIcon}
          onClick={() => history.push(`/posts/edit/${post.id}`)}
        />
        <img
          alt="delete"
          src={deleteIcon}
          onClick={() => setIsDeleteDialogVisible(true)}
        />
        <img
          alt="showBody"
          src={isBodyVisible ? arrowUpIcon : arrowDownIcon}
          onClick={() => setIsBodyVisible(!isBodyVisible)}
        />
      </div>
      <h3 className={styles.header}>{post.title}</h3>
      {isBodyVisible && <p className={styles.body}>{post.body}</p>}

      <DialogWithButtons
        isOpen={isDeleteDialogVisible}
        handleClose={() => setIsDeleteDialogVisible(false)}
        title="Are you sure you wanna delete post?"
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

export default Card;
