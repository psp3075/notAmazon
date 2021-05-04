import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/not-3a66d/us-central1/api",
});

export default instance;
