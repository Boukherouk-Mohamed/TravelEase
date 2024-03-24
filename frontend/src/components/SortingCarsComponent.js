import React, { useState, useEffect } from 'react';

function SortingCarsComponent({ onSelectedFilters }) {
  const [airConditioning, setAirConditioning] = useState(false);
  const [doors4, setDoors4] = useState(false);
  const [doors2, setDoors2] = useState(false);
  const [price, setPrice] = useState(10000);
  const [transmissionAutomatic, setTransmissionAutomatic] = useState(false);
  const [transmissionManual, setTransmissionManual] = useState(false);
  const [typeHybrid, setTypeHybrid] = useState(false);
  const [typeElectric, setTypeElectric] = useState(false);
  const [typeFuel, setTypeFuel] = useState(false);
  const [typeSmall, setTypeSmall] = useState(false);
  const [typeLarge, setTypeLarge] = useState(false);
  const [typeFamilial, setTypeFamilial] = useState(false);

  var carAdresse = localStorage.getItem('carAdresse');
  var checkOutCAr = localStorage.getItem('checkOutCAr');
  var checkInCAr = localStorage.getItem('checkInCAr');
  function changeAirConditioning(){
      setAirConditioning(true);
  }
  useEffect(() => {

    setTimeout(changeAirConditioning,200)
    // clearTimeout(changeAirConditioning);
    
    const selectedFilters = {
      airConditioning,
      doors4,
      doors2,
      price,
      transmissionAutomatic,
      transmissionManual,
      typeHybrid,
      typeElectric,
      typeFuel,
      typeSmall,
      typeLarge,
      typeFamilial,
      carAdresse,
      checkInCAr,
      checkOutCAr,
    };
    onSelectedFilters(selectedFilters);
  }, [airConditioning, doors4, doors2, price, transmissionAutomatic, transmissionManual, typeHybrid, typeElectric,typeFuel, typeSmall,typeLarge,typeFamilial,carAdresse,checkOutCAr,checkInCAr]);

  return (

    <div>
      <div className="itemFilter">
        <h2>Filters</h2>
        <input
          type="checkbox"
          id="air_conditioning"
          name="air_conditioning"
          value="Air conditioning"
          checked={airConditioning}
          onChange={() => setAirConditioning(!airConditioning)}
        />
        <label htmlFor="air_conditioning">Air conditioning</label>
        <br />
        <input
          type="checkbox"
          id="4_doors"
          name="4_doors"
          value="+4 doors"
          checked={doors4}
          onChange={() => setDoors4(!doors4)}
        />
        <label htmlFor="4_doors">+4 doors</label>
        <br />
        <input
          type="checkbox"
          id="2_doors"
          name="2_doors"
          value="2 doors"
          checked={doors2}
          onChange={() => setDoors2(!doors2)}
        />
        <label htmlFor="2_doors">2 doors</label>
        <br />
      </div>

      <div className="rangePriceFilter">
        <h2>Price</h2>
        <div className="priceBar">
          <span className="minPrice">10000 MAD</span>
          <span className="slider-value minPrice">{price} MAD</span>
        </div>

        <div className="slider-container">
          <input
            type="range"
            className="slider"
            min="100"
            max="10000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="ModelFlights">
        <div className="itemFilter">
          <h2>Transmission</h2>
          <input
            type="checkbox"
            id="automatic"
            name="automatic"
            value="Automatic"
            checked={transmissionAutomatic}
            onChange={() => setTransmissionAutomatic(!transmissionAutomatic)}
          />
          <label htmlFor="automatic">Automatic</label>
          <br />
          <input
            type="checkbox"
            id="manual"
            name="manual"
            value="Manual"
            checked={transmissionManual}
            onChange={() => setTransmissionManual(!transmissionManual)}
          />
          <label htmlFor="manual">Manual</label>
          <br />
        </div>
      </div>
      <div className="ModelFlights">
        
        <div className="itemFilter">
          <h2>Type</h2>
          <input
            type="checkbox"
            id="hybrid"
            name="hybrid"
            value="Hybrid"
            checked={typeHybrid}
            onChange={() => setTypeHybrid(!typeHybrid)}
          />
          <label htmlFor="hybrid">Hybrid</label>
          <br />
          <input
            type="checkbox"
            id="electric"
            name="electric"
            value="Fully electric"
            checked={typeElectric}
            onChange={() => setTypeElectric(!typeElectric)}
          />
          <label htmlFor="electric">Fully electric</label><br />
          <input
            type="checkbox"
            id="fuel"
            name="fuel"
            value="fuel"
            checked={typeFuel}
            onChange={() => setTypeFuel(!typeFuel)}
          />
          <label htmlFor="fuel">Fuel</label>
          <br />
        </div>

        <div className="itemFilter">
          <h2>Category</h2>
          <input
            type="checkbox"
            id="Familial"
            name="Familial"
            value="Familial"
            checked={typeFamilial}
            onChange={() => setTypeFamilial(!typeFamilial)}
          />
          <label htmlFor="Familial">Familial</label>
          <br />
          <input
            type="checkbox"
            id="Large"
            name="Large"
            value="Fully Large"
            checked={typeLarge}
            onChange={() => setTypeLarge(!typeLarge)}
          />
          <label htmlFor="Large">Large</label><br />
          <input
            type="checkbox"
            id="Small"
            name="Small"
            value="Small"
            checked={typeSmall}
            onChange={() => setTypeSmall(!typeSmall)}
          />
          <label htmlFor="Small">Small</label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SortingCarsComponent;
