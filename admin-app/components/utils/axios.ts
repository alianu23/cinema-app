import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instanceAxios = axios.create({
  baseURL: API_URL,
});

export default instanceAxios;

export const admin = process.env.ADMIN_ID;
