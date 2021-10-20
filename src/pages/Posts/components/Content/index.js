import React, { useEffect, useState, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";

import Card from "./components/Card";
import UseTransformPostListToSmallerList from "../../../../hooks/UseTransformPostListToSmallerList";
import { usePosts } from "../../../../stores";
import styles from "./styles.module.scss";

const Content = () => {
  const {
    changePageNumber,
    filteredList,
    getPosts,
    isSearching,
    needsReload,
    pageNumber,
    posts,
    setFiltredList,
    setNeedsReload,
  } = usePosts();

  const [hasMore, setHasMore] = useState(true);
  const obs = useRef();

  const lastPostElement = useCallback(
    (node) => {
      if (obs.current) {
        obs.current.disconnect();
      }
      obs.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          changePageNumber();
        }
      });
      if (node) {
        obs.current.observe(node);
      }
      if (!hasMore || isSearching) {
        obs.current.disconnect();
      }
    },
    [hasMore, isSearching]
  );

  const getPage = () => {
    const { newList } = UseTransformPostListToSmallerList(
      pageNumber,
      30,
      posts
    );
    setFiltredList(newList);
  };

  useEffect(() => {
    if (needsReload) {
      setNeedsReload(false);
      getPosts();
    }
  }, [getPosts, needsReload]);

  useEffect(() => {
    if (pageNumber === 1) {
      setHasMore(true);
    }
    if (posts !== undefined && posts.length > 0) {
      getPage();
    }
  }, [posts, pageNumber]);

  useEffect(() => {
    if (posts.length > 0 && filteredList.length >= posts.length) {
      setHasMore(false);
    }
  }, [filteredList]);

  return (
    <div className={styles.contentWrapper}>
      {filteredList.map((post, index) => {
        if (index + 1 === filteredList.length) {
          return (
            <Card
              key={post.id}
              reference={lastPostElement}
              post={post}
              onCardClickHandler={() => true}
            />
          );
        } else {
          return (
            <Card key={post.id} post={post} onCardClickHandler={() => true} />
          );
        }
      })}
    </div>
  );
};

export default observer(Content);
