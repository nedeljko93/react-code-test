import React, { useEffect, useState, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";

import Card from "./components/Card";
import UseConvertPostListToSmallerList from "../../../../hooks/UseConvertPostListToSmallerList";
import { usePosts } from "../../../../stores";
import styles from "./styles.module.scss";

const Content = () => {
  const {
    changePageNumber,
    filteredList,
    getPosts,
    isSearching,
    pageNumber,
    posts,
    setFiltredList,
  } = usePosts();

  const [hasMore, setHasMore] = useState(true);
  const obs = useRef();

  const lastBookElementRef = useCallback(
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
    const { newList } = UseConvertPostListToSmallerList(pageNumber, 30, posts);
    setFiltredList(newList);
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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
              reference={lastBookElementRef}
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
