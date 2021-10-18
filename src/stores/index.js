import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";

import PostsStore from "./PostsStore";
import NotificationModalStore from "./NotificationModalStore";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const postsStore = new PostsStore();
  const notificationModalStore = new NotificationModalStore();

  return (
    <StoreContext.Provider
      value={useLocalObservable(() => ({ postsStore, notificationModalStore }))}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const usePosts = () => {
  const { postsStore } = useContext(StoreContext);
  return postsStore;
};

export const useNotificationModal = () => {
  const { notificationModalStore } = useContext(StoreContext);
  return notificationModalStore;
};
