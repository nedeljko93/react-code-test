import React from "react";
import LocationDetails from "../LocationDetails";

import editIcon from "../../../../../../assets/images/Edit.svg";
import styles from "./styles.module.scss";

const Card = ({ location, onCardClickHandler }) => {
  return (
    <div className={styles.cardWrapper} onClick={onCardClickHandler}>
      <div className={styles.iconWrapper}>
        <img alt="edit" src={editIcon} />
      </div>
      <h3 className={styles.header}>{location.name}</h3>
      <LocationDetails location={location} />
    </div>
  );
};

export default Card;
