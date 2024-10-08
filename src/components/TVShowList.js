// src/components/TVShowList.js
import React, { useEffect, useState } from 'react';
import TVShowCard from './TVShowCard'; // Correctly import TVShowCard
import './TVShowList.css';
import { fetchPopularTVShows } from '../api/tmdbApi';

const TVShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getTVShows = async () => {
      const tvShows = await fetchPopularTVShows();
      setShows(tvShows);
    };

    getTVShows();
  }, []);

  return (
    <div className="tvshow-list">
      {shows.map(show => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default TVShowList;
