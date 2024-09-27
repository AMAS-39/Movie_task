// src/pages/MoviesPage.js
import React from 'react';
import MovieList from '../components/MovieList';
import { moviesData } from '../api/mockData';
import './MoviesPage.css';

const MoviesPage = ({ theme }) => { // Accept theme as prop
  return (
    <div className={`movies-page ${theme}`}> {/* Apply theme class */}
      <h1>Movies</h1>
      <MovieList movies={moviesData} theme={theme} /> {/* Pass theme to MovieList */}
    </div>
  );
};

export default MoviesPage;
