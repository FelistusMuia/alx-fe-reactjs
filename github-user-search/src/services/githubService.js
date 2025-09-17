import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined,
  },
});

// Fetch a GitHub user by username
export async function fetchUser(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
}