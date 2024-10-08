// src/pages/HomePage.js
import React from 'react';
import MovieList from '../components/MovieList';
import './HomePage.css';

const HomePage = ({ theme }) => {
  return (
    <div className={`homepage ${theme}`}> {/* Ensure theme class is applied here */}
      {/* Hero Section with Background Image */}
      <div className="homepage__hero">
        <div className="homepage__overlay">
          <h2>“Cinema is a mirror by which we often see ourselves.”</h2>
        </div>
      </div>

      {/* Trending Movies Section */}
      <h1 className="homepage__title">Trending Movies</h1>
      <MovieList theme={theme} /> {/* Pass theme to MovieList */}
    </div>
  );
};

export default HomePage;
