// src/pages/MoviesPage.js
import React from 'react';
import MovieList from '../components/MovieList';
import './MoviesPage.css';

const MoviesPage = ({ theme }) => { 
  return (
    <div className={`movies-page ${theme}`}> {/* Apply theme class */}
      <h1>Movies</h1>
      <MovieList theme={theme} /> {/* Fetch movies from the API in MovieList */}
    </div>
  );
};

export default MoviesPage;
