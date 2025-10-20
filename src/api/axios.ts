import axios from "axios";

export const ACCOUNTS_URL = "/accounts";
export const USERS_URL = "/users";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
