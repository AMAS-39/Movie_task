// src/components/TVShowList.js
import React from 'react';
import TVShowCard from './TVShowCard'; // Correctly import TVShowCard
import './TVShowList.css';

const TVShowList = ({ shows }) => {
  return (
    <div className="tvshow-list">
      {shows.map(show => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default TVShowList;
