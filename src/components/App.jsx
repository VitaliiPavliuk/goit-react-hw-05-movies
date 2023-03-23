import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavLinkSt } from './App.styled';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <nav>
        <NavLinkSt to="/">Home</NavLinkSt>
        <NavLinkSt to="/movies">Movies</NavLinkSt>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
