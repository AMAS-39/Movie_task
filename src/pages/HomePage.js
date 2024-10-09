import React from 'react';
import MovieList from '../components/MovieList';
import './HomePage.css';

const HomePage = ({ theme, searchQuery }) => {
  return (
    <div className={`homepage ${theme}`}>
      <div className="homepage__hero">
        <div className="homepage__overlay">
          <h2>“Cinema is a mirror by which we often see ourselves.”</h2>
        </div>
      </div>
      <h1 className="homepage__title">Trending Movies</h1>
      {/* Limit the number of movies to display on the homepage */}
      <MovieList theme={theme} searchQuery={searchQuery} limit={6} /> {/* Limit to 6 movies */}
    </div>
  );
};

export default HomePage;
