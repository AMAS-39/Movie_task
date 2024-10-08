// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMovies } from '../api/tmdbApi'; // Fetch from TMDb API
import './MovieDetailPage.css';

const MovieDetailPage = ({ theme }) => { 
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
    return <h1 className="movie-not-found">Movie not found!</h1>;
  }

  return (
    <div className={`movie-detail-page ${theme}`}> {/* Apply theme class */}
      <div className="movie-detail__poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-detail__info">
        <h1>{movie.title}</h1>
        <p className="movie-rating">⭐ {movie.vote_average}</p>
        <p className="movie-release">Release Date: {movie.release_date || 'Unknown'}</p>
        <p className="movie-description">{movie.overview || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
