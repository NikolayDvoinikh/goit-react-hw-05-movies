import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

import Navbar from './Navbar/Navbar';
export const App = () => {
  return (
    <BrowserRouter
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
