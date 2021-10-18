import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Card from "./components/Card";
import { usePosts } from "../../../../stores";
import styles from "./styles.module.scss";

const Content = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.contentWrapper}>
      {posts.map((post) => (
        <Card key={post.id} post={post} onCardClickHandler={() => true} />
      ))}
    </div>
  );
};

export default observer(Content);
