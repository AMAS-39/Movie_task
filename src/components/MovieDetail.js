// src/components/MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../api/mockData'; // Using the mock data for now
import './MovieDetail.css';

const MovieDetail = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const movie = moviesData.find((m) => m.id === parseInt(movieId)); // Find the movie by ID

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail__poster">
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
      <div className="movie-detail__info">
        <h1>{movie.title}</h1>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
        <p><strong>Release Date:</strong> {movie.releaseDate || 'Unknown'}</p>
        <p>{movie.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
