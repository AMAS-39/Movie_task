// src/components/TVShowCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './TVShowCard.css';

const TVShowCard = ({ show, theme }) => { // Accept theme as prop if needed
  return (
    <div className={`tvshow-card ${theme}`}> {/* Add theme class */}
      <Link to={`/tv-shows/${show.id}`}>
        <img src={show.posterUrl} alt={show.title} />
        <div className="tvshow-card__info">
          <h3>{show.title}</h3>
          <p>⭐ {show.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default TVShowCard;
