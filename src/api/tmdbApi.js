// src/api/tmdbApi.js
import axios from 'axios';

const API_KEY = '39f9518d5c407e0c16441726f8c888fa';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch Trending Movies with Pagination
export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

// Fetch Popular TV Shows with Pagination
export const fetchPopularTVShows = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};
