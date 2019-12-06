import React from 'react';
import PropTypes from 'prop-types';


const Humidity = (props) => (
  <div>Humidity: {props.humidity}</div>
);

Humidity.propTypes = {
  humidity: PropTypes.number.isRequired,
};

export default Humidity;
