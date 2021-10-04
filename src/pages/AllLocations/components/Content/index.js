import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import Card from "./components/Card";
import LocationDetailsModal from "./components/LocationDetailsModal";
import { useLocation } from "../../../../stores";
import styles from "./styles.module.scss";

const Content = () => {
  const { locations, getAllLocations, increaseView } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState();

  const handleCardClick = (location, index) => {
    increaseView(index);
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  useEffect(() => {
    getAllLocations();
  }, [getAllLocations]);

  return (
    <div className={styles.contentWrapper}>
      {locations.map((location, index) => (
        <Card
          key={location.id}
          location={location}
          onCardClickHandler={() => handleCardClick(location, index)}
        />
      ))}
      <LocationDetailsModal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        location={selectedLocation}
      />
    </div>
  );
};

export default observer(Content);
