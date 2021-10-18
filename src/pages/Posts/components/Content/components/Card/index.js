import React, { useState } from "react";
import { useHistory } from "react-router";

import arrowDownIcon from "../../../../../../assets/images/arrow-down-white.svg";
import arrowUpIcon from "../../../../../../assets/images/arrow-up-white.svg";
import editIcon from "../../../../../../assets/images/edit-white.svg";
import deleteIcon from "../../../../../../assets/images/delete-white.svg";
import styles from "./styles.module.scss";

const Card = ({ post, onCardClickHandler }) => {
  const history = useHistory();

  const [isBodyVisible, setIsBodyVisible] = useState(false);

  return (
    <div className={styles.cardWrapper} onClick={onCardClickHandler}>
      <div className={styles.iconWrapper}>
        <img
          alt="edit"
          src={editIcon}
          onClick={() => history.push(`/posts/edit/${post.id}`)}
        />
        <img
          alt="delete"
          src={deleteIcon}
          onClick={() => setIsBodyVisible(!isBodyVisible)}
        />
        <img
          alt="showBody"
          src={isBodyVisible ? arrowUpIcon : arrowDownIcon}
          onClick={() => setIsBodyVisible(!isBodyVisible)}
        />
      </div>
      <h3 className={styles.header}>{post.title}</h3>
      {isBodyVisible && <p className={styles.body}>{post.body}</p>}
    </div>
  );
};

export default Card;
