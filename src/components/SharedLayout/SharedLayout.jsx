import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavLinkSt } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLinkSt to="/">Home</NavLinkSt>
        <NavLinkSt to="/movies">Movies</NavLinkSt>
      </nav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
