import PropTypes from 'prop-types';
// import {
//   SearchbarHeader,
//   SearchForm,
//   SearchFormBtn,
//   SearchFormBtnLabel,
//   SearchFormInput,
// } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value;

    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
