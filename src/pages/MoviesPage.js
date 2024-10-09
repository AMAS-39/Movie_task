import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import './MoviesPage.css';

const MoviesPage = ({ theme, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageClick = (page) => setCurrentPage(page);

  return (
    <div className={`movies-page ${theme}`}>
      <h1>Movies</h1>
      <MovieList theme={theme} currentPage={currentPage} searchQuery={searchQuery} />
      <div className="pagination-controls">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-button ${theme}`}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`pagination-number ${theme} ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-button ${theme}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;
