import { useState } from 'react';

import css from './search-form.module.css';

const SearcForm = ({ onSubmit }) => {
  const [searchField, setSearchField] = useState('');

  const submitCheck = event => {
    event.preventDefault();
    onSubmit(searchField.trim().toLowerCase());
  };

  return (
    <form className={css.form} onSubmit={submitCheck}>
      <input
        name="searchInput"
        value={searchField}
        onChange={event => {
          setSearchField(event.target.value);
        }}
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movie name"
      />
      <button type="submit" className={css.button}>
        <span className={css.label}>Search</span>
      </button>
    </form>
  );
};

export default SearcForm;
