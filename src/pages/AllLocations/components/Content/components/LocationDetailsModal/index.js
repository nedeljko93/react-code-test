import React from "react";
import { Modal } from "@material-ui/core";
import { observer } from "mobx-react-lite";

import closeIcon from "../../../../../../assets/images/Close.svg";
import LocationDetails from "../LocationDetails";
import styles from "./styles.module.scss";

const LocationDetailsModal = ({ handleClose, isOpen, location }) => {
  return (
    <Modal className={styles.modal} onClose={handleClose} open={isOpen}>
      <div className={styles.detailsWrapper}>
        <div className={styles.modalHeader}>
          <p>{location && location.name}</p>
          <img alt="close" src={closeIcon} onClick={handleClose} />
        </div>
        <div className={styles.modalContentWrapper}>
          <LocationDetails location={location} />

          <p className={styles.descriptionLabel}>
            {location && location.description}
          </p>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
        <button onClick={handleClose}>Done</button>
      </div>
    </Modal>
  );
};

export default observer(LocationDetailsModal);
