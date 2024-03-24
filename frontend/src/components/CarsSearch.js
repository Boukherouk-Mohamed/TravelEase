import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';

function CarsSearch() {

    
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




    const [addressFilter, setAddressFilter] = useState('');
    const [carsData, setCarsData] = useState([]); 
    const [check_in, setCheckIn] = useState('');
    const [check_out, setCheckOut] = useState('');

    const chooseCar = (car)=>{
      localStorage.setItem('carSelected', JSON.stringify(car))
      var today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      // Get the current date
        var currentDate = new Date();

        // Get tomorrow's date
        var tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);

        // Format tomorrow's date as a string in the "yyyy/mm/dd" format
        var tomorrowFormatted = tomorrowDate.toJSON().slice(0, 10).replace(/-/g, '/');

      localStorage.setItem('checkInCAr', today)
      localStorage.setItem('checkOutCAr',tomorrowFormatted )

      //  alert(car.id)
    }

    const searchCars = () =>{
      localStorage.setItem('carAdresse',addressFilter);
      localStorage.setItem('checkInCAr',check_in);
      localStorage.setItem('checkOutCAr',check_out);
      var daysNumber =  calculateDaysDifference(check_in,check_out);
      localStorage.setItem('daysNumber',daysNumber);
    }




    const fetchFirstData = () => {
      axios
        .get('http://localhost:5000/api/cars')
        .then((response) => {
          setCarsData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching hotel data:', error);
        });
    };

    function selectedCar(e){
      localStorage.setItem('carSelected',e)
    }
    // fetchFirstData();
    useEffect( () =>{
      fetchFirstData();
    }   )









  

  return (
    <div>
      <div>
      <div className="FlightsSearchVol2">
                      <form action='/CarsResults'>
                          <input
                            type="text"
                            placeholder="Pick up location"
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
                          
                  
                          <a href="/CarsResults">
                            <input type="submit"
                              value="Search"
                              className="submitFlightsResultsVol2"
                              onClick={searchCars}
                            /> 
                          </a>
                      </form>


                      
      </div>


      <div className="containerCardsHotels">


        {/* Cards */}
        {carsData.map((car,index) => (
          <a href="CarsSelect"  onClick={()=> chooseCar(car)}>
            <div className="cardHotelSearch">
              <img src={car.image} alt="" />
              <div className="contNameEtoile">
                <h4>{car.name}</h4>
              </div>
              <span>{car.price}</span>
            </div>

          </a>
         
          
          ))};



      </div>
    </div>
    </div>
  )
}

export default CarsSearch
