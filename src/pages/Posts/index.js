import React, { useState } from "react";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";

import addIcon from "../../assets/images/add-white.svg";
import searchIcon from "../../assets/images/search-white.svg";
import Button from "../../common/Button";
import Content from "./components/Content";
import Header from "../commonComponents/Header";
import TextInput from "../../common/TextInput";
import styles from "./styles.module.scss";
import { usePosts } from "../../stores";

const Posts = () => {
  const history = useHistory();
  const { handleSearchTextChange, searchValue } = usePosts();

  return (
    <>
      <Header title="Posts">
        <div className={styles.searchContainer}>
          <img className={styles.searchIcon} src={searchIcon} />

          <TextInput
            isSearch={true}
            name="body"
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => handleSearchTextChange(event.target.value)}
          />
        </div>
        <Button
          title="Add new Post"
          icon={addIcon}
          onClick={() => history.push("/posts/add")}
        />
      </Header>
      <Content />
    </>
  );
};

export default observer(Posts);
