import React from 'react';
import PropTypes from 'prop-types';


const Humidity = ({ humidity }) => (
  <div>Humidity: {humidity}</div>
);

Humidity.propTypes = {
  humidity: PropTypes.number,
};

Humidity.defaultProps = {
  humidity: '',
};

export default Humidity;
