import React, { useState , useEffect } from 'react';
import '../css/index.css';
import axios from 'axios';

function SortingHotelsComponent({ onFilteredHotels , listeHotels, onListUpdate   }) {
  const [price, setPrice] = useState(50);
  const [selection, setSelection] = useState('include');
  const [rating, setRating] = useState('');
  const [distance, setDistance] = useState('');
  const [beach, setBeach] = useState(false);
  const [swiming_pool, setSwimingPool] = useState(false);
  const [guest_house, setGuestHouse] = useState(false);



  const handleSearchHotels = () => {
    // Prepare the data to send to the server
    const searchData = {
      price,
      selection,
      rating,
      distance,
      guest_house,
      swiming_pool,
      beach,
      // Add other filters as needed
    };

     // Perform filtering based on searchData and setFilteredHotels with the filtered data
     const filteredData = listeHotels.filter((hotel) => {
      // Implement your filter logic based on searchData
      return hotel.price <= searchData.price ;
      // return true;
     });


    // Pass the filteredHotels back to the HotelsResults component using the callback function
    // updateFilteredHotels(filteredData);
    console.log('the filtred data list is : ',filteredData);

    // Make a POST request to the backend with the search data
    axios
      .post('http://localhost:5000/api/searchHotel', searchData)
      .then((response) => {
        // Handle the response from the backend and update the state if needed
        console.log('Data received from the server:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };




  const [filters, setFilters] = useState({
    beach: true,
    swimmingPool: false,
    guestHouse: false,
    price: 10000,
    rating: [], // Change rating to an array to store multiple selected ratings

  });
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (name === "rating") {
      // Handle rating filter separately as it's an array
      setFilters((prevFilters) => ({
        ...prevFilters,
        rating: checked
          ? [...prevFilters.rating, value] // Add the selected rating to the array
          : prevFilters.rating.filter((r) => r !== value), // Remove the deselected rating from the array
      }));
    } else {
      // Handle other filters as before
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: type === "checkbox" ? checked : parseInt(value),
      }));
    }
  
    updateList();
  };


  const filteredHotels = listeHotels.filter((hotel) => {
    return (
      (!filters.beach || hotel.beach === 'yes') &&
      (!filters.swimmingPool || hotel.swiming_pool === 'yes') &&
      (!filters.guestHouse || hotel.guest_house === 'yes') &&
      (!filters.rating.length || filters.rating.includes(hotel.rating)) &&
      hotel.price <= filters.price
    );
  });

  

  // const [listFilter, setList] = useState([]);

    const updateList = () => {
      onListUpdate(filteredHotels); // Call the callback function in the parent to update the list.
      onFilteredHotels(filteredHotels); // Call the callback function in the parent to send the filtered hotels.
    };



    useEffect(() => {
      updateList(); // Call updateList once when the component is loaded
    }, [filters]);









  return (
    <div>
      <div className="itemFilter">
        <h2>Filters</h2>
        <input
          type="checkbox"
          id="beach"
          name="beach"
          checked={filters.beach}
          onChange={handleFilterChange}
        />
        <label htmlFor="beach">Beach</label>
        <br />
        <input
          type="checkbox"
          id="swimmingPool"
          name="swimmingPool"
          checked={filters.swimmingPool}
          onChange={handleFilterChange}
        />
        <label htmlFor="swimmingPool">Swimming Pool</label>
        <br />
        <input
          type="checkbox"
          id="guestHouse"
          name="guestHouse"
          checked={filters.guestHouse}
          onChange={handleFilterChange}
        />
        <label htmlFor="guestHouse">Guest houses</label>
        <br />
      </div>

      <div className="rangePriceFilter">
        <h2>Price</h2>
        <div className="priceBar">
          <span className="minPrice">100 MAD</span>
          <span className="slider-value minPrice"> {filters.price} MAD</span>
        </div>

        <div className="slider-container">
          <input
            type="range"
            className="slider"
            min="100"
            max="10000"
            value={filters.price}
            name="price"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="ModelFlights">
        <div className="itemFilter">
          <h2>Rating</h2>
          <input
            type="checkbox"
            id="3Stars"
            name="rating"
            value="3Stars"
            checked={filters.rating.includes("3Stars")}
            onChange={handleFilterChange}
          />
          <label htmlFor="3Stars">3 Stars</label>
          <br />
          <input
            type="checkbox"
            id="4Stars"
            name="rating"
            value="4Stars"
            checked={filters.rating.includes("4Stars")}
            onChange={handleFilterChange}
          />
          <label htmlFor="4Stars">4 Stars</label>
          <br />
          <input
            type="checkbox"
            id="5Stars"
            name="rating"
            value="5Stars"
            checked={filters.rating.includes("5Stars")}
            onChange={handleFilterChange}
          />
          <label htmlFor="5Stars">5 Stars</label>
          <br />
        </div>

      </div>
    </div>
  );
}

export default SortingHotelsComponent;
