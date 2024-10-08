import axios from 'axios';

// Add your API Key here
const API_KEY = '39f9518d5c407e0c16441726f8c888fa';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch Trending Movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results; // Array of movie objects
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

// Fetch Popular TV Shows
export const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    return response.data.results; // Array of TV show objects
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};
