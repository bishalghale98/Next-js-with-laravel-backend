import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_APP_URL;

const api = axios.create({
  baseURL: baseURL, // Laravel API base
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // Get CSRF cookie
    await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    // Set Authorization dynamically
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
