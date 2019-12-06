import React from 'react';
import PropTypes from 'prop-types';


const Max = ({ tempMax }) => (
  <div>Max temperature: {tempMax}&deg; </div>
);

Max.propTypes = {
  tempMax: PropTypes.number,
};

Max.defaultProps = {
  tempMax: '',
};

export default Max;
