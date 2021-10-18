import { action, makeObservable, observable } from "mobx";

class NotificationModalStore {
  isOpen = false;
  title = "";
  description = "";
  callback = undefined;

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      title: observable,
      description: observable,
      callback: observable,
      showDialog: action,
      closeDialog: action,
    });
  }

  showDialog = (title = "Notification", description, callback = undefined) => {
    this.isOpen = true;
    this.title = title;
    this.description = description;
    this.callback = callback;
  };

  closeDialog = () => {
    this.isOpen = false;
  };
}

export default NotificationModalStore;
