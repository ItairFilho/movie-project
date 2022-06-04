import axios from "axios";

const api = axios.create ({
    baseURL: 'https://cinelist-api98.herokuapp.com'
});

export default api;