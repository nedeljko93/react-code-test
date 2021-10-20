import { makeObservable, observable, action, runInAction } from "mobx";
import { UseFetchApi } from "../../utilities/apiUtilities";

class PostsStore {
  posts = [];
  filteredListCopy = [];
  filteredList = [];
  post = { body: "", id: -1, title: "", userId: -1 };
  isSpinerVisible = false;
  searchValue = "";
  isSearching = false;
  pageNumber = 1;
  needsReload = true;

  constructor() {
    makeObservable(this, {
      posts: observable,
      post: observable,
      isSpinerVisible: observable,
      searchValue: observable,
      filteredListCopy: observable,
      pageNumber: observable,
      filteredList: observable,
      isSearching: observable,
      needsReload: observable,
      searchPosts: action,
      getPosts: action,
      getPost: action,
      savePost: action,
      updatePost: action,
      resetPostObject: action,
      handleSearchTextChange: action,
      deletePost: action,
      changePageNumber: action,
      setFiltredList: action,
      setNeedsReload: action,
    });
  }

  getPosts = async () => {
    this.isSpinerVisible = true;
    const { data, error, status } = await UseFetchApi({
      path: "/posts",
      method: "GET",
    });
    runInAction(() => {
      this.isSpinerVisible = false;
      if (!error && status === 200) {
        this.posts = data;
        this.postCopy = data;
        this.searchPosts(this.searchValue);
      } else {
        console.log("Error!", error);
      }
    });
  };

  getPost = async (id) => {
    this.isSpinerVisible = true;
    const { data, error, status } = await UseFetchApi({
      path: `/posts/${id}`,
      method: "GET",
    });
    runInAction(() => {
      this.isSpinerVisible = false;
      if (!error && status === 200) {
        this.post = data;
      } else {
        console.log("Error!", error);
      }
    });
  };

  savePost = async (post) => {
    this.isSpinerVisible = true;
    const { status, error } = await UseFetchApi({
      path: "/posts",
      method: "POST",
      bodyData: post,
    });
    runInAction(() => {
      this.isSpinerVisible = false;
      if (error && status !== 201) {
        console.log("Error!", error);
      }
    });
    return { status, error };
  };

  updatePost = async (post) => {
    this.isSpinerVisible = true;
    const { status, error } = await UseFetchApi({
      path: `/posts/${post.id}`,
      method: "PUT",
      bodyData: post,
    });
    runInAction(() => {
      this.isSpinerVisible = false;
      if (error && status !== 200) {
        console.log("Error!", error);
      }
    });
    return { status, error };
  };

  deletePost = async (id) => {
    this.isSpinerVisible = true;
    const { status, error } = await UseFetchApi({
      path: `/posts/${id}`,
      method: "DELETE",
    });
    runInAction(() => {
      this.isSpinerVisible = false;
      if (error && status !== 200) {
        console.log("Error!", error);
      }
    });
    return { status, error };
  };

  searchPosts = (filter) => {
    if (filter && filter !== "") {
      this.isSearching = true;
      this.filteredList = this.filteredListCopy.filter((s) =>
        s.title.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      this.isSearching = false;
      this.filteredList = this.filteredList = this.filteredListCopy;
    }
  };

  handleSearchTextChange = (value) => {
    this.searchValue = value;
    this.searchPosts(this.searchValue);
  };

  changePageNumber = () => {
    let tempPageNumber = this.pageNumber;
    tempPageNumber = tempPageNumber + 1;
    this.pageNumber = tempPageNumber;
  };

  setFiltredList = (list) => {
    this.filteredList = list;
    this.filteredListCopy = list;
  };

  setNeedsReload = (needsReload) => {
    this.needsReload = needsReload;
  };

  resetPostObject = () => {
    this.post = { body: "", id: -1, title: "", userId: -1 };
  };
}

export default PostsStore;
