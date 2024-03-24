import React, { useState } from 'react';

const FlightsResults = () => {
  const [price, setPrice] = useState(50);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min="0"
        max="100"
        value={price}
        onChange={handleChange}
      />
      <div className="slider-value">Price: ${price}</div>
    </div>
  );
};

export default FlightsResults;
