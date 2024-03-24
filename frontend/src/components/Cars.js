import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortingCarsComponent from './SortingCarsComponent';

function Cars() {
  const [listCars, setListCars] = useState([]);
  const [addressFilter, setAddressFilter] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
//   const [addressFilter, setAddressFilter] = useState('');
  // const [daysNumber, setDaysNumber] = useState(1);
  const [check_in, setCheckInn] = useState('');
  const [check_out, setCheckOutt] = useState('');

  useEffect(() => {
    getLocalStorageData();
    searchCarsWithFilters();
    // searchCarsTwo();
  }, []);

  const getLocalStorageData = () => {
    setCheckIn(localStorage.getItem('checkInCar'));
    setCheckOut(localStorage.getItem('checkOutCar'));
    setAddressFilter(localStorage.getItem('carAddress'));
  };

  const choosenCar = (car) => {
    localStorage.setItem('carSelected', JSON.stringify(car));
  };


  

        function calculateDaysDifference(startDateStr, endDateStr) {

          const startDate = new Date(startDateStr);
          const endDate = new Date(endDateStr);
      
          // Calculate the difference in milliseconds
          const differenceMs = endDate - startDate;
      
          // Convert the difference to days
          const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      
          return daysDifference;
        }

        function setAddressFilterUpdated(value) {
            if (value !== undefined && value !== null) {
              setAddressFilter(value);
            } else {
              setAddressFilter('');
              localStorage.setItem('carAdresse', '');
            }
          }
          
          


  function searchHotelss(){
    localStorage.setItem('carAdresse',addressFilter)
    localStorage.setItem('checkInCAr',check_in)
    localStorage.setItem('checkOutCAr',check_out)
  }





  function searchCarsTwo(){
    var adresseToSearch = localStorage.getItem('carAdresse');
    // console.log(adresseToSearch);
    axios.post('http://localhost:5000/api/searchCarsFromStorage', {adresseToSearch})
      .then((response) => {

        let numberDays = calculateDaysDifference(check_in, check_out);
      
        localStorage.setItem('daysNumber',numberDays);
        localStorage.setItem('checkInCAr',check_in);
        localStorage.setItem('checkOutCAr',check_out);
        
        setListCars(response.data.carsFiltred);
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error('Error sending data:', error);
      });

  }

  // function searchCarsTwo() {
  //   axios.get('http://localhost:5000/api/searchCarsFromStorage')
  //     .then((response) => {
  //       console.log(response.data);
  //       setListCars(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending data:', error);
  //     });
  // }

  function searchCarsWithFilters(filters) {
    axios.post('http://localhost:5000/api/searchCarsFromStorage', filters)
      .then((response) => {
        console.log(response.data);
        setListCars(response.data.results);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  }

  return (
    <div id='containerResults'>
                          <div>
             

             <div className="FlightsSearchVol2">
                <form >
                    <input
               type="text"
               placeholder="Where?"
               value={addressFilter}
               onChange={(e) => setAddressFilterUpdated(e.target.value)}
               required
             />
             <input type="date"
               placeholder="Check in"
               onChange={(e) => setCheckInn(e.target.value)}
               required
             />
             <input type="date"
               placeholder="Check in"
               onChange={(e) => setCheckOutt(e.target.value)}
               required
             />

    
            <a href="">
            <input type="submit"
               value="Search"
               className="submitFlightsResultsVol2"
               onClick={searchHotelss}
             />
            </a>
                </form>

             
             
           </div>


     <img src="images/menu.png" id="showBtn" alt="" className="barSideSecond" />
     <div className="sideBar" id="sideBar">
       <button className="closeBtn" id="closeBtn">
         X
       </button>
       <SortingCarsComponent
              onSelectedFilters={searchCarsWithFilters}
          />
     </div>

      <div className="containerResultsFlights" style={{ display: 'flex' }}>
        <div className="leftSideResultsFlights">
          <SortingCarsComponent
              onSelectedFilters={searchCarsWithFilters}
          />
        </div>
        <div className="rightSideResultsFlights">
          <div className="resultsStatistics">
            <p>{listCars.length} Results</p>
            <div>
              <span>Sorted by:</span>
              <select name="sortingOptions">
                <option value="priceLowToHigh">Price (low to high)</option>
                <option value="priceHighToLow">Price (high to low)</option>
                {/* Add more sorting options as needed */}
              </select>
            </div>
          </div>

          <div className="rightSideCardHotelresult">
            {listCars.map((car, index) => (
              <div className="cardHotelResult" key={index}>
                <img src={car.image} alt="" />
                <div className="middleInfosCardHotelResults">
                  <h2>{car.name}</h2>
                  <div style={{ display: 'flex', color: '#929292' }}>
                    {/* Car details */}
                  </div>
                </div>
                <div className="rightInfosCardHotelResults">
                  <span>Price:</span>
                  <h3>{car.price} MAD</h3>
                  <br />
                  <a href="/CarsSelect" className='linkToHotel' onClick={() => choosenCar(car)}>See availability</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cars;
