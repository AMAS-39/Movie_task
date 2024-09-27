// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import { moviesData } from '../api/mockData';
import "./MovieList.css";

const MovieList = ({ theme }) => {
  return (
    <div className={`movie-list ${theme}`}>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
