import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';


function HotelsSearch() {
  const [addressFilter, setAddressFilter] = useState('');
  const [daysNumber, setDaysNumber] = useState(1);
  const [check_in, setCheckIn] = useState('');
  const [check_out, setCheckOut] = useState('');
  const [personNumber, setPersonNumber] = useState(1);
  const [tempPersonNumber, setTempPersonNumber] = useState(1); // Separate state for temporary value
  const [hotelsData, setHotelsData] = useState([]);


  
  function calculateDaysDifference(startDateStr, endDateStr) {
    // Parse the date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Calculate the difference in milliseconds
    const differenceMs = endDate - startDate;

    // Convert the difference to days
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  function searchTwo(){
    var daysNumber = calculateDaysDifference(check_in,check_out)
    localStorage.setItem('adresseHotel',addressFilter);
    localStorage.setItem('numberDays',daysNumber);
    localStorage.setItem('checkIn',check_in);
    localStorage.setItem('checkOut',check_out);
    localStorage.setItem('personsNumber',tempPersonNumber);
  }



      const [listeDesHotels,setListeDesHotels] = useState([]);
      function choosenHotel(e){
         var today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        // Get the current date
          var currentDate = new Date();

          // Get tomorrow's date
          var tomorrowDate = new Date(currentDate);
          tomorrowDate.setDate(currentDate.getDate() + 1);

          // Format tomorrow's date as a string in the "yyyy/mm/dd" format
          var tomorrowFormatted = tomorrowDate.toJSON().slice(0, 10).replace(/-/g, '/');

          // alert(e);
          console.log(e)
          localStorage.setItem('hotelSelected',JSON.stringify(e));
          localStorage.setItem('checkIn',today);
          localStorage.setItem('checkOut',tomorrowFormatted);
      }


      useEffect(()=>{
        axios.get('http://localhost:5000/api/hotels')
      .then((response) => {
        // Handle the response from the backend if needed
        console.log('Data imported successfully:', response.data);
        setListeDesHotels(response.data);
        
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error('Error sending data:', error);
      });
      },[]);
  
  return (
    <div>
      <div className="FlightsSearchVol2">
        <form>
        <input
                        type="text"
                        placeholder="Where?"
                        value={addressFilter}
                        onChange={(e) => setAddressFilter(e.target.value)}
                        required
                      />
                      <input type="date"
                        placeholder="Check in"
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                      />
                      <input type="date"
                        placeholder="Check in"
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                      />
                      <input
                        type="number"
                        min="1"
                        placeholder="Number of persons"
                        value={tempPersonNumber} // Use the temporary value for the input field
                        onChange={(e) => setTempPersonNumber(e.target.value)}
                        required
                      />
              

          
        </form>
        <a href="/HotelsResults">
                        <input type="submit"
                          value="Search"
                          className="submitFlightsResultsVol2"
                          onClick={searchTwo}
                        /> 
                      </a>


                      
                      
      </div>


      <div className="containerCardsHotels">


        {/* Cards */}
        {listeDesHotels.map((hotel,index) => (
            <a href="/HotelSelect" onClick={()=>choosenHotel(hotel)}>
          <div className="cardHotelSearch">
            <img src="images/room1.jpg" alt="" />
            <div className="contNameEtoile">
              <h4>{hotel.adresse} </h4>
              <p>{hotel.rating}</p>
            </div>
            <span>{hotel.price}MAD per night</span>
          </div>

          </a>
          ))}


      </div>
    </div>
  )
}

export default HotelsSearch
