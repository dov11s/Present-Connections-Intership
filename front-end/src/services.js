import axios from "axios";
const BASE_BACKEND_URL = "https://pre-con-intership-api.herokuapp.com/api";

export default {
  getAllPosts: () => axios.get(`${BASE_BACKEND_URL}/posts`),
  addPost: (post) => axios.post(`${BASE_BACKEND_URL}/posts`, post),
};
