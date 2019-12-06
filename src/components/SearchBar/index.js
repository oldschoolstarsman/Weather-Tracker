import React from 'react';
import PropTypes from 'prop-types';


import './form.scss';

const SearchBar = (props) => {
  // console.log('FORM', props);

  const handleChange = (event) => {
    const { changeValue } = props;
    const { value } = event.target;
    changeValue('inputValue', value);
  };

  const { loadStats, inputValue } = props;

  return (
    <div className="search">
      <p>Enter a city of your choice</p>
      <form onSubmit={loadStats} >
        <input className="form" type="text" name="city" placeholder="ex: London" value={inputValue} onChange={handleChange} />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  changeValue: PropTypes.func.isRequired,
  loadStats: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};


export default SearchBar;
