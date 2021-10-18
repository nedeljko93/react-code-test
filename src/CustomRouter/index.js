import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react-lite";

import Loader from "../common/Loader";
import AddPost from "../pages/AddPost";
import Posts from "../pages/Posts";
import UpdatePost from "../pages/UpdatePost";
import NotificationModal from "../common/NotificationModal";
import { usePosts } from "../stores";

const CustomRouter = () => {
  const { isSpinerVisible } = usePosts();

  return (
    <>
      {isSpinerVisible && <Loader />}
      <Switch>
        <Route component={Posts} path="/posts" exact />
        <Route component={AddPost} path="/posts/add" exact />
        <Route component={UpdatePost} path="/posts/edit/:postId" exact />
      </Switch>
      <NotificationModal />
    </>
  );
};

export default observer(CustomRouter);
