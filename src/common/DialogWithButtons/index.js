import { Modal } from "@material-ui/core";
import React from "react";

import Button from "../Button";
import styles from "./styles.module.scss";

const DialogWithButtons = ({ isOpen, handleClose, handleConfirm, title }) => {
  return (
    <Modal className={styles.modal} onClose={handleClose} open={isOpen}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <div className={styles.buttonWrapper}>
          <Button
            isCancel={true}
            title="Cancel"
            type="button"
            onClick={handleClose}
          />

          <Button title="Yes" type="button" onClick={handleConfirm} />
        </div>
      </div>
    </Modal>
  );
};

export default DialogWithButtons;
