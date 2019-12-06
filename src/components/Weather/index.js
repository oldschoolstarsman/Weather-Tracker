// == Import : npm
import React from 'react';

// == Import : local
import Min from './Min';
import Max from './Max';
import Humidity from './Humidity';
import Current from './Current';

import './weather.scss';


const Weather = (props) => {
  return (
    <div className="wrapper">
      <div className="current__weather">
        <Current
          {...props}
        />
      </div>
      <div className="statistics">
        <Min tempMin={props.tempMin} />
        <Max tempMax={props.tempMax} />
        <Humidity humidity={props.humidity} />
      </div>
    </div>
  );
};


export default Weather;
