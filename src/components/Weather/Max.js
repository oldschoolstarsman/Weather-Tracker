import React from 'react';
import PropTypes from 'prop-types';


const Night = ({ tempMax }) => (
  <div>Max temperature: {tempMax}&deg; </div>
);

Night.propTypes = {
  tempMax: PropTypes.number.isRequired,
};

export default Night;
