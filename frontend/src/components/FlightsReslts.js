import React, {useState,useEffect} from 'react'
import '../css/index.css';
import flightsData from './flightsData';
import axios from 'axios';
import SortingComponent from './SortingComponent';

function FlightsReslts() {
  let namesDeparture = ["Sidney", "Dubai", "Xiamen"];
  let namesArrival = ["Kuala Lumpur", "Abu Dhabi", "Sharjah", "Rabat", "Doha"];

  const [inputValueFrom, setInputValueFrom] = useState("");
  const [matchedNamesFrom, setMatchedNamesFrom] = useState([]);

  const [inputValueTo, setInputValueTo] = useState("");
  const [matchedNamesTo, setMatchedNamesTo] = useState([]);

  const [dateInfo, setDateInfo] = useState('');

  const handleChangeFrom = (e) => {
    const inputValueFrom = e.target.value;
    setInputValueFrom(inputValueFrom);

    // Filter the names that match the input value for 'From'
    const filteredNamesFrom = namesDeparture.filter((name) =>
      name.toLowerCase().startsWith(inputValueFrom.toLowerCase())
    );

    setMatchedNamesFrom(filteredNamesFrom);
  };

  const handleChangeTo = (e) => {
    const inputValueTo = e.target.value;
    setInputValueTo(inputValueTo);

    // Filter the names that match the input value for 'To'
    const filteredNamesTo = namesArrival.filter((name) =>
      name.toLowerCase().startsWith(inputValueTo.toLowerCase())
    );

    setMatchedNamesTo(filteredNamesTo);
  };

  const handleItemClickFrom = (name) => {
    setInputValueFrom(name);
    setMatchedNamesFrom([]);
  };

  const handleItemClickTo = (name) => {
    setInputValueTo(name);
    setMatchedNamesTo([]);
  };

  const handleDateChange = (e) => {
    setDateInfo(e.target.value);
  };

  const handleSearch = () => {
    // Create an object with the search information
    const searchInfo = {
      from: inputValueFrom,
      to: inputValueTo,
      date: dateInfo // You can replace this with the actual date selected by the user
    };

    // Add the searchInfo object to localStorage
    localStorage.setItem('flightSearch', JSON.stringify(searchInfo));
  };











   // Retrieve flight search data from localStorage
   const flightSearchData = JSON.parse(localStorage.getItem('flightSearch'));



   // Define filtering states and their update functions
   const [airlineFilters, setAirlineFilters] = useState({
    RAM: false,
    RAMM : false ,
    MultipleAirlines: true,
  });
  
  // Update the flightsData based on filters
  const filteredFlightsData = flightsData.filter((flight) => {
    // Filter based on airline
    const isRAMIncluded = airlineFilters.RAM && flight.airline.name === 'Qatar Airways';
    const isQatarAirWaysIncluded = airlineFilters.RAMM && flight.airline.name === 'Xiamen Airlines';
    const isMultipleAirlinesIncluded = airlineFilters.MultipleAirlines;

    return isRAMIncluded || isQatarAirWaysIncluded || isMultipleAirlinesIncluded;

   
  });
  // Filter the flights based on the data from localStorage (date, from, to)
  let filteredFlightsBySearch = filteredFlightsData;
  if (flightSearchData.from && flightSearchData.to) {
    filteredFlightsBySearch = filteredFlightsData.filter((flight) => {
      return (
        flight.departure.airport === flightSearchData.from &&
        flight.arrival.airport === flightSearchData.to
      );
    });
  }





  
  useEffect(()=>{
   
    var closeBtn = document.getElementById('closeBtn');


    var showBtn = document.getElementById('showBtn');
    var sideBar = document.getElementById('sideBar');
     showBtn.addEventListener('click' , function(){
      sideBar.style.display = 'block'
    });

    closeBtn.addEventListener('click' , function(){
        sideBar.style.display = 'none'
    });
  })




      const alertId = (e)=>{
        // alert(e.id);
        localStorage.setItem('flightChosenId',JSON.stringify(e))
      }


      // do not remove!!!!!!
      // const searchDataFlights =() =>{
      //   // axios.get('http://api.aviationstack.com/v1/flights?access_key=6d54aa2ee1999dd5b8a39cdce0179360')
      //   // .then((response) => {
      //   //   // Handle the response from the backend if needed
      //   //   console.log('Data sent successfully:', response.data);

      //   // })
      //   // .catch((error) => {
      //   //   // Handle errors if the request fails
      //   //   console.error('Error sending data:', error);
      //   // });
      // }
      function getTimeDifference(time1, time2) {
        const [hours1, minutes1] = time1.split(':').map(Number);
        const [hours2, minutes2] = time2.split(':').map(Number);
      
        // Convert time1 and time2 to Date objects
        const date1 = new Date(0, 0, 0, hours1, minutes1);
        const date2 = new Date(0, 0, 0, hours2, minutes2);
      
        // Calculate the difference in milliseconds
        let diffInMilliseconds = date2 - date1;
      
        // Handle cases where time2 is before time1 (e.g., 23:00 and 01:00)
        if (diffInMilliseconds < 0) {
          // Add 24 hours in milliseconds to the difference
          diffInMilliseconds += 24 * 60 * 60 * 1000;
        }
      
        // Calculate hours and minutes from the difference in milliseconds
        const diffHours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
        diffInMilliseconds %= 60 * 60 * 1000;
        const diffMinutes = Math.floor(diffInMilliseconds / (60 * 1000));
      
        // Return the difference in the format "hh:mm"
        const diffInHoursString = diffHours.toString().padStart(2, '0');
        const diffInMinutesString = diffMinutes.toString().padStart(2, '0');
        return `${diffInHoursString}:${diffInMinutesString}`;
      }


      const itemsPerPage = 8;
      const [currentPage, setCurrentPage] = useState(1);
    
      // Functions to handle pagination
      const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const goToPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    
      // Calculate the index of the first and last item for the current page
      const lastIndex = currentPage * itemsPerPage;
      const firstIndex = lastIndex - itemsPerPage;
      
  return (
    <div>


      <div className="FlightsSearchVol2">
      <form autoComplete="off">
            <div  className='formFlights'>
              <input
                type="text"
                id="inputFrom"
                placeholder="From..."
                value={inputValueFrom}
                onChange={handleChangeFrom}
                required
              />
              <ul className="list">
              {matchedNamesFrom.map((name) => (
                <li
                  key={name}
                  className="list-items"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleItemClickFrom(name)}
                >
                  <b>{name.substr(0, inputValueFrom.length)}</b>
                  {name.substr(inputValueFrom.length)}
                </li>
              ))}
            </ul>
            </div>
            

            <div className='formFlights'>
              <input
                type="text"
                id="inputTo"
                placeholder="To?"
                value={inputValueTo}
                onChange={handleChangeTo}
                required
              />
              <ul className="list">
              {matchedNamesTo.map((name) => (
                <li
                  key={name}
                  className="list-items"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleItemClickTo(name)}
                >
                  <b>{name.substr(0, inputValueTo.length)}</b>
                  {name.substr(inputValueTo.length)}
                </li>
              ))}
            </ul>
            </div>
            

            <input
              type="date"
              placeholder='Day?'
              onChange={handleDateChange}
              required
              className='inputDateFlights'
            />
          </form>
              
          <a href="/FlightsReslts" >  <input type="submit" value='Search' className='submitFlightsResultsVol2'  onClick={handleSearch}/> </a>
      </div>

      <img src="images/menu.png" id='showBtn' alt="" className='barSideSecond'/>
      <div className="sideBar" id="sideBar">
          <button className="closeBtn" id="closeBtn">X</button>

          <SortingComponent
                airlineFilters={airlineFilters}
                setAirlineFilters={setAirlineFilters}
                // Add other filter props if needed
              />
        </div>


      <div className='containerResultsFlights'>
            <div className="leftSideResultsFlights">
              <SortingComponent
                airlineFilters={airlineFilters}
                setAirlineFilters={setAirlineFilters}
                // Add other filter props if needed
              />

            </div>
            <div className="rightSideResultsFlights">
                <div className='resultsStatistics'>
                    <p> {filteredFlightsBySearch.length} Results</p>
                     <div>
                      <span>Sorted by :</span><select name="cars" id="cars"> 
                            <option value="volvo">Price (low to high) </option>
                            <option value="saab">Price (high to low)</option>
                        </select> 
                    </div>
                </div>
                {/* Flights Results */}
                {filteredFlightsBySearch.slice(firstIndex, lastIndex).map((flight , index)=>(
                  <div className="itemFlightsResults">


                    <img src="images/RAM.png" alt="" />
                    <div className="middleItelFlightsResults">
                        <p>{flight.departure.scheduled_time}</p>
                        <div className='middlemiddleFlightsResults'> 
                            <span className='lineBetweenValues'>------------------- <br />
                              <h5>direct</h5>
                            </span>
                        </div> 
                        <p>{flight.arrival.scheduled_time}</p>
                        <span id='valueHoursFlight'>({getTimeDifference( flight.departure.scheduled_time ,flight.arrival.scheduled_time )})</span>
                    </div>
                    <div className="rightItemFlightsResults">
                        <p className='priceFight'>{flight.price}MAD</p>
                        <span className='wifi'>Free WIFI</span>
                        <a href="/FlightsSelect"><input type="submit" value="Select" className='selectItemFlightsResults' onClick={(e)=>alertId(flight)} /></a> 
                    </div>
                </div>
                ))}
                {/* End Flights Results */}
                  {/* Pagination Buttons */}
              <div className="paginationButtons">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="paginationButton"
                  >
                    Previous
                  </button>
                  <button
                    onClick={goToNextPage}
                    disabled={lastIndex >= flightsData.length}
                    className="paginationButton"
                  >
                    Next
                  </button>
              </div>

            </div>


            
      </div>
    </div>
  )
}

export default FlightsReslts
