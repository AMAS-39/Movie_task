// src/pages/TVShowDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPopularTVShows } from '../api/tmdbApi'; // Fetch from TMDb API
import './TVShowDetailPage.css';

const TVShowDetailPage = ({ theme }) => { 
  const { showId } = useParams(); // Get the TV show ID from the URL
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      const shows = await fetchPopularTVShows();
      const showData = shows.find((s) => s.id === parseInt(showId));
      setShow(showData);
    };

    getShowDetails();
  }, [showId]);

  if (!show) {
    return <h1 className="tvshow-not-found">TV Show not found!</h1>;
  }

  return (
    <div className={`tvshow-detail-page ${theme}`}> {/* Apply theme class */}
      <div className="tvshow-detail__poster">
        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
      </div>
      <div className="tvshow-detail__info">
        <h1>{show.name}</h1>
        <p className="tvshow-rating">⭐ {show.vote_average}</p>
        <p className="tvshow-release">Release Date: {show.first_air_date}</p>
        <p className="tvshow-description">{show.overview}</p>
      </div>
    </div>
  );
};

export default TVShowDetailPage;
