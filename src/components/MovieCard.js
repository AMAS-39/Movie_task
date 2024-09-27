// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.posterUrl} alt={movie.title} />
        <div className="movie-card__info">
          <h3>{movie.title}</h3>
          <p>⭐ {movie.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
