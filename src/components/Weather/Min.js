import React from 'react';
import PropTypes from 'prop-types';


const Min = ({ tempMin }) => (
  <div>Min temperature: {tempMin}&deg; </div>
);


Min.propTypes = {
  tempMin: PropTypes.number.isRequired,
};


export default Min;
