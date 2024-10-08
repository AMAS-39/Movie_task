// src/components/TVShowCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './TVShowCard.css';

const TVShowCard = ({ show }) => { 
  return (
    <div className="tvshow-card">
      <Link to={`/tv-shows/${show.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={show.name} />
        <div className="tvshow-card__info">
          <h3>{show.name}</h3>
          <p>⭐ {show.vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default TVShowCard;
