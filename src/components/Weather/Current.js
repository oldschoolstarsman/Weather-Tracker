import React from 'react';
import PropTypes from 'prop-types';

import './current.scss';

const Current = (props) => {
  console.log('Current Component:', props);

  return (
    <div className="">
      <div className="display__city">{props.city}</div>
      <div className="display__temperature">{props.tempCurrent}&deg;</div>
      <div className="display__weather">
        {props.weatherNow}
        <i className="wi wi-day-sunny" />
      </div>
    </div>
  );
};

Current.propTypes = {
  city: PropTypes.string.isRequired,
  weatherNow: PropTypes.string.isRequired,
  tempCurrent: PropTypes.number.isRequired,
};

export default Current;


