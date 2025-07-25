import axios from "axios";

const API = axios.create({
  baseURL: "https://login-register-flax-three.vercel.app/api",
  withCredentials: true,
});

export default API;
