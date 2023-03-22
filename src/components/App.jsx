import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

import { NavLinkSt } from './App.styled';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <nav>
        <NavLinkSt to="/">Home</NavLinkSt>
        <NavLinkSt to="/movies">Movies</NavLinkSt>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
};
