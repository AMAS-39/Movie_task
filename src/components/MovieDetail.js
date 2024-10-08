// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMovies } from '../api/tmdbApi'; // Fetch from API now
import './MovieDetail.css';

const MovieDetail = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movies = await fetchTrendingMovies();
      const movieData = movies.find((m) => m.id === parseInt(movieId));
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail__poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-detail__info">
        <h1>{movie.title}</h1>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
        <p><strong>Release Date:</strong> {movie.release_date || 'Unknown'}</p>
        <p>{movie.overview || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
