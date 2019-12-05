import React from 'react';

const Humidity = ( props ) => {
  console.log(props.humidity)
  return (
    <div className="">
      Humidity: {props.humidity}
    </div>
  )
}

Humidity.propTypes = {
  // tempCurrent: PropTypes.number.isRequired,
};

export default Humidity;
