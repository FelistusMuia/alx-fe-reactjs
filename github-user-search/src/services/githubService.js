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

/**
 * Search GitHub users with advanced filters
 * @param {string} query - Main search term (username/keyword)
 * @param {object} filters - Optional filters (location, repos, language, etc.)
 * @returns {object} - List of users from GitHub API
 */
export async function searchUsers(query, filters = {}) {
  try {
    let filterString = "";

    if (filters.location) filterString += `+location:${filters.location}`;
    if (filters.repos) filterString += `+repos:${filters.repos}`;
    if (filters.language) filterString += `+language:${filters.language}`;

    const response = await api.get(`/search/users?q=${query}${filterString}`);
    return response.data; // contains { total_count, incomplete_results, items }
  } catch (error) {
    console.error("GitHub API Search Error:", error);
    throw error;
  }
}