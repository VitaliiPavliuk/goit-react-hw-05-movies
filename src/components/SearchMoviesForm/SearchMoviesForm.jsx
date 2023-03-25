import React from 'react';
import PropTypes from 'prop-types';

export const SearchMoviesForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="Search movies" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchMoviesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
