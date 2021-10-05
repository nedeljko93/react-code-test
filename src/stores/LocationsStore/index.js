import { getLocations } from "../../api/locationApi";
import { makeObservable, observable, action, runInAction } from "mobx";

class LocationsStore {
  locations = [];

  constructor() {
    makeObservable(this, {
      locations: observable,
      getAllLocations: action,
      increaseView: action,
    });
  }

  getAllLocations = async () => {
    const { data, error, status } = await getLocations("/api/locations");
    runInAction(() => {
      if (!error && status === 200) {
        this.locations = data;
        this.locations = this.locations.map((location) => ({
          ...location,
          views: 0,
        }));
      } else {
        console.log("Error!", error);
      }
    });
  };

  increaseView = (index) => {
    this.locations[index].views++;
  };
}

export default LocationsStore;
