// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import MovieDetailPage from './pages/MovieDetailPage';
import TVShowDetailPage from './pages/TVShowDetailPage';
import Footer from './components/Footer';
import './theme.css'; // Add this line to import theme.css


function App() {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}> {/* Add theme class to App component */}
      <Router>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/movies" element={<MoviesPage theme={theme} />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          <Route path="/tv-shows" element={<TVShowsPage theme={theme} />} />
          <Route path="/tv-shows/:showId" element={<TVShowDetailPage />} />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
