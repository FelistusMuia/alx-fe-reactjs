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

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username to search
 * @returns {object} - User profile data from GitHub API
 */
export async function fetchUserData(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
}