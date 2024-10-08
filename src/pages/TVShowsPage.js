// src/pages/TVShowsPage.js
import React from 'react';
import TVShowList from '../components/TVShowList';
import './TVShowsPage.css';

const TVShowsPage = ({ theme }) => {
  return (
    <div className={`tvshows-page ${theme}`}> {/* Apply theme class */}
      <h1>TV Shows</h1>
      <TVShowList theme={theme} /> {/* TVShowList already fetches data from the API */}
    </div>
  );
};

export default TVShowsPage;
