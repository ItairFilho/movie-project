import axios from "axios";

const api = axios.create({
  baseURL: "https://cinelist-api98.herokuapp.com",
});
const token = localStorage.getItem("token");
api.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
