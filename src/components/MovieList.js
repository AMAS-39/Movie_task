// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchTrendingMovies } from '../api/tmdbApi'; // Fetch movies from API
import "./MovieList.css";

const MovieList = ({ theme }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies); // Set the state with API data
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={`movie-list ${theme}`}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
