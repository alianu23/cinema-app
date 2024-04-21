import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instanceAxios = axios.create({
  // Configuration
  baseURL: API_URL,
});

export default instanceAxios;
