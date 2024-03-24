import React, { useState } from 'react';

function SortingComponent({ airlineFilters, setAirlineFilters, priceFilter, setPriceFilter }) {
  const handleAirlineFilterChange = (event) => {
    const { id, checked } = event.target;
    setAirlineFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  const handleChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div>
      <div className="itemFilter">
        <h2>AirLine</h2>
        <input
          type="checkbox"
          id="RAM"
          name="RAM"
          value="RAM"
          checked={airlineFilters.RAM}
          onChange={handleAirlineFilterChange}
        />
        <label htmlFor="RAM"> Qatar Airways</label><br/>
        <input
          type="checkbox"
          id="RAMM"
          name="RAMM"
          value="RAMM"
          checked={airlineFilters.RAMM}
          onChange={handleAirlineFilterChange}
        />
        <label htmlFor="RAMM"> Xiamen Airlines</label><br/>


        <input
          type="checkbox"
          id="MultipleAirlines"
          name="MultipleAirlines"
          value="MultipleAirlines"
          checked={airlineFilters.MultipleAirlines}
          onChange={handleAirlineFilterChange}
        />
        <label htmlFor="MultipleAirlines">  All</label>
      </div>



      {/* Add the rest of your Model filtering code here if needed */}
    </div>
  );
}

export default SortingComponent;
