import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './Header/Header';
const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />{' '}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
