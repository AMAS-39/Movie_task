import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchTrendingMovies } from '../api/tmdbApi';
import "./MovieList.css";

const MovieList = ({ theme, currentPage, searchQuery, limit }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies(currentPage);
      setMovies(trendingMovies);
    };
    getTrendingMovies();
  }, [currentPage]);

  // Filter movies based on the search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply limit if provided
  const displayedMovies = limit ? filteredMovies.slice(0, limit) : filteredMovies;

  return (
    <div className={`movie-list ${theme}`}>
      {displayedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
