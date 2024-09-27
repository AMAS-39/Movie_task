// src/pages/TVShowDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { tvShowsData } from '../api/mockData';
import './TVShowDetailPage.css';

const TVShowDetailPage = ({ theme }) => { // Accept theme as prop
  const { showId } = useParams(); // Get the TV show ID from the URL
  const show = tvShowsData.find((s) => s.id === parseInt(showId));

  if (!show) {
    return <h1 className="tvshow-not-found">TV Show not found!</h1>;
  }

  return (
    <div className={`tvshow-detail-page ${theme}`}> {/* Apply theme class */}
      <div className="tvshow-detail__poster">
        <img src={show.posterUrl} alt={show.title} />
      </div>
      <div className="tvshow-detail__info">
        <h1>{show.title}</h1>
        <p className="tvshow-rating">⭐ {show.rating}</p>
        <p className="tvshow-release">Release Date: {show.releaseDate}</p>
        <p className="tvshow-description">{show.description}</p>
      </div>
    </div>
  );
};

export default TVShowDetailPage;
