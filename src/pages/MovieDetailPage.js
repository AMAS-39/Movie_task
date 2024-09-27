// src/pages/MovieDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../api/mockData';
import './MovieDetailPage.css';

const MovieDetailPage = ({ theme }) => { // Accept theme as prop
  const { movieId } = useParams(); // Get the movie ID from the URL
  const movie = moviesData.find((m) => m.id === parseInt(movieId)); // Find the movie by ID

  if (!movie) {
    return <h1 className="movie-not-found">Movie not found!</h1>;
  }

  return (
    <div className={`movie-detail-page ${theme}`}> {/* Apply theme class */}
      <div className="movie-detail__poster">
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
      <div className="movie-detail__info">
        <h1>{movie.title}</h1>
        <p className="movie-rating">⭐ {movie.rating}</p>
        <p className="movie-release">Release Date: {movie.releaseDate || 'Unknown'}</p>
        <p className="movie-description">{movie.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
