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
 * Advanced search for GitHub users
 * @param {object} params - Search parameters
 * @param {string} params.username - Username or keyword
 * @param {string} [params.location] - Location filter
 * @param {number} [params.minRepos] - Minimum number of repos
 * @returns {array} - List of users from GitHub Search API
 */
export async function searchUsers({ username, location, minRepos }) {
  try {
    // build query string
    let query = username ? `${username}` : "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await api.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // API returns { total_count, items: [...] }
  } catch (error) {
    console.error("GitHub Search API Error:", error);
    throw error;
  }
}