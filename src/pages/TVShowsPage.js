// src/pages/TVShowsPage.js
import React from 'react';
import TVShowList from '../components/TVShowList';
import { tvShowsData } from '../api/mockData';
import './TVShowsPage.css';

const TVShowsPage = ({ theme }) => {
  return (
    <div className={`tvshows-page ${theme}`}> {/* Apply theme class here */}
      <h1>TV Shows</h1>
      <TVShowList shows={tvShowsData} />
    </div>
  );
};

export default TVShowsPage;
