import React from "react";
import moment from "moment";
import { observer } from "mobx-react-lite";

import usersIcon from "../../../../../../assets/images/Users.svg";
import viewIcon from "../../../../../../assets/images/Views.svg";
import timezoneIcon from "../../../../../../assets/images/Timezone.svg";
import styles from "./styles.module.scss";

const LocationDetails = ({ location }) => {
  return (
    <ul className={styles.listOfDetails}>
      <li>
        <img alt="count" className={styles.icon} src={usersIcon} />
        {`${location.userCount} Users`}
      </li>
      <li>
        <img alt="createdAt" className={styles.icon} src={timezoneIcon} />
        {`${moment(location.createdAt).format("HH:mm a z")} (GMT+${moment(
          location.createdAt
        ).utcOffset()})`}
      </li>
      <li>
        <img alt="views" className={styles.icon} src={viewIcon} />
        {location.views}
      </li>
    </ul>
  );
};

export default observer(LocationDetails);
