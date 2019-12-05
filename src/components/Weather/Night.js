import React from 'react';

const Night = ({ tempMax }) => {

  return (
    <div className="">
      <h1>Max temperature: {tempMax}&deg; </h1>
    </div>
  )
}

Night.propTypes = {
  // tempCurrent: PropTypes.number.isRequired,
};

export default Night;
