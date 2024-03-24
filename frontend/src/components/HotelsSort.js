import React from 'react'
import { useState , useEffect } from 'react';

function HotelsSort({ onSelectedFilters }) {
    const [beach, setbeach] = useState(false);
    const [swimmingPool, setswimmingPool] = useState(false);
    const [guestHouse, setguestHouse] = useState(false);
    const [price, setPrice] = useState(10000);
    const [ThreeStars, set3Stars] = useState(false);
    const [FourStars, set4Stars] = useState(false);
    const [FiveStars, set5Stars] = useState(false);

  
    var HotelAdresse = localStorage.getItem('adresseHotel');
    function changeBeachCondition(){
        setbeach(true);
    }
    useEffect(() => {
  
    //   setTimeout(changeBeachCondition,200)
      // clearTimeout(changeAirConditioning);
      
      const selectedFilters = {
        beach,
        swimmingPool,
        guestHouse,
        price,
        ThreeStars,
        FourStars,
        FiveStars,
        HotelAdresse,
      };
      onSelectedFilters(selectedFilters);
    }, [beach,swimmingPool,guestHouse,price,ThreeStars, FourStars, FiveStars ,HotelAdresse]);
  
    return (
  
      <div>
        <div className="itemFilter">
          <h2>Filters</h2>
          <input
            type="checkbox"
            id="beach"
            name="beach"
            value="beach"
            checked={beach}
            onChange={() => setbeach(!beach)}
          />
          <label htmlFor="beach">beach</label>
          <br />
          <input
            type="checkbox"
            id="swimmingPool"
            name="swimmingPool"
            value="swimmingPool"
            checked={swimmingPool}
            onChange={() => setswimmingPool(!swimmingPool)}
          />
          <label htmlFor="swimmingPool">swimmingPool</label>
          <br />
          <input
            type="checkbox"
            id="guestHouse"
            name="guestHouse"
            value="guestHouse"
            checked={guestHouse}
            onChange={() => setguestHouse(!guestHouse)}
          />
          <label htmlFor="guestHouse">guestHouse</label>
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
            <h2>Rating</h2>
            <input
              type="checkbox"
              id="3Stars"
              name="3Stars"
              value="3Stars"
              checked={ThreeStars}
              onChange={() => set3Stars(!ThreeStars)}
            />
            <label htmlFor="3Stars">3Stars</label>            <br />
            <input
              type="checkbox"
              id="4Stars"
              name="4Stars"
              value="4Stars"
              checked={FourStars}
              onChange={() => set4Stars(!FourStars)}
            />
            <label htmlFor="4Stars">4Stars</label>            <br />
            <input
              type="checkbox"
              id="5stars"
              name="5stars"
              value="5stars"
              checked={FiveStars}
              onChange={() => set5Stars(!FiveStars)}
            />
            <label htmlFor="5stars">5stars</label>
            <br />
            
        </div>
      </div>
      </div>
    );
  }
  
export default HotelsSort
