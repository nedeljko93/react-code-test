import { makeObservable, observable, action, runInAction } from "mobx";
import { fetchApi } from "../../utilities/apiUtilities";

class PostsStore {
  posts = [];
  postCopy = [];
  post = { body: "", id: -1, title: "", userId: -1 };
  isSpinerVisible = false;
  searchValue = "";

  constructor() {
    makeObservable(this, {
      posts: observable,
      post: observable,
      isSpinerVisible: observable,
      searchValue: observable,
      postCopy: observable,
      searchPosts: action,
      getPosts: action,
      getPost: action,
      resetPostObject: action,
      handleSearchTextChange: action,
    });
  }

  getPosts = async () => {
    this.isSpinerVisible = true;
    const { data, error, status } = await fetchApi({
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
    const { data, error, status } = await fetchApi({
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
    const { status, error } = await fetchApi({
      path: "/posts",
      method: "POST",
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

  updatePost = async (post) => {
    this.isSpinerVisible = true;
    const { status, error } = await fetchApi({
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

  searchPosts = (filter) => {
    if (filter && filter !== "") {
      this.posts = this.postCopy.filter((s) =>
        s.title.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      this.posts = this.postCopy;
    }
  };

  handleSearchTextChange = (value) => {
    this.searchValue = value;
    this.searchPosts(this.searchValue);
  };

  resetPostObject = () => {
    this.post = { body: "", id: -1, title: "", userId: -1 };
  };
}

export default PostsStore;
