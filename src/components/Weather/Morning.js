import React from 'react';

const Morning = ({ tempMin }) => {
  console.log('tempMin', tempMin)
  return (
    <div className="">
      <h1>Min temperature: {tempMin}&deg; </h1>
    </div>
  ) 
}

Morning.propTypes = {
  // tempCurrent: PropTypes.number.isRequired,
};


export default Morning;
