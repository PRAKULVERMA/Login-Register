import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://login-register-flax-three.vercel.app/api",
  withCredentials: true,
});

export default API;
