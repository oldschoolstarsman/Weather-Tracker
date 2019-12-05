import React from 'react';

// local import
import Day from './Day';
import Night from './Night';
import Morning from './Morning';
import Humidity from './Humidity';
import Current from './Current';

import './weather.scss';

const Weather = (props) => {
  // console.log('Weather:', weatherNow);
  return (
    <div className="wrapper">
      <div className="current__weather">
        <Current
          {...props}
        />
      </div>
      <div className="statistics">
        <Day />
        <Night tempMax={props.tempMax} />
        <Morning tempMin={props.tempMin} />
        <Humidity humidity={props.humidity} />
      </div>
    </div>
  );
};


export default Weather;
