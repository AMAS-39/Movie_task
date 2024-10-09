import React, { useEffect, useState } from 'react';
import TVShowCard from './TVShowCard';
import { fetchPopularTVShows } from '../api/tmdbApi';
import './TVShowList.css';

const TVShowList = ({ theme, currentPage, searchQuery }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getTVShows = async () => {
      const tvShows = await fetchPopularTVShows(currentPage);
      const filteredShows = tvShows.filter(show =>
        show.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setShows(filteredShows);
    };
    getTVShows();
  }, [currentPage, searchQuery]);

  return (
    <div className={`tvshow-list ${theme}`}>
      {shows.map(show => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default TVShowList;
