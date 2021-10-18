import React, { useEffect } from "react";
import { Modal } from "@material-ui/core";
import { observer } from "mobx-react-lite";

import { useNotificationModal } from "../../stores";
import styles from "./styles.module.scss";

const NotificationModal = () => {
  const {
    isOpen,
    title,
    description,
    callback,
    closeDialog,
  } = useNotificationModal();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (callback) {
          callback();
        }
        closeDialog();
      }, 1500);
    }
  }, [isOpen]);

  return (
    <Modal className={styles.modal} onClose={closeDialog} open={isOpen}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </Modal>
  );
};

export default observer(NotificationModal);
