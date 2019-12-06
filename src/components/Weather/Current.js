import React from 'react';
import PropTypes from 'prop-types';


const Current = ({ city, tempCurrent, weatherNow }) => (
  <>
    <div className="display__city">{city}</div>
    <div className="display__temperature">{tempCurrent}&deg;</div>
    <div className="display__weather">
      {weatherNow}
      <i className="wi wi-day-sunny" />
    </div>
  </>
);

Current.propTypes = {
  city: PropTypes.string.isRequired,
  weatherNow: PropTypes.string.isRequired,
  tempCurrent: PropTypes.number,
};

Current.defaultProps = {
  tempCurrent: '',
};

export default Current;
