import React from 'react'
import '../css/index.css';
import { useState } from 'react';
import axios from 'axios';
import flightsData from './flightsData';

function FlightsSelect() {

  
  const [FullName , setFullName] = useState('');
  const [Email , setEmail] = useState('');
  const [PhoneNumber , setPhoneNumber] = useState('');
  const [BirthDay , setBirthDay] = useState('');

  const [showThanksMessage, setShowThanksMessage] = useState(false);

  
  // const handleNameChange = (e)=>{
  //     setFullName(e)
  // }
  var flightChosenId = localStorage.getItem('flightChosenId')
  flightChosenId = JSON.parse(flightChosenId);
  var id_flight = flightChosenId.id;
  // console.log('car id :',id_car)
  var flightSearch = localStorage.getItem('flightSearch');
  flightSearch = JSON.parse(flightSearch)
  var flight_checkin = flightSearch.date;
  var from = flightSearch.from;
  var to = flightSearch.to;
  // var rent_checkout = localStorage.getItem('checkOutCAr');

  const sendDataUser = () =>{
      const userData = {
          name : FullName,
          email : Email,
          phone : PhoneNumber,
          birthday : BirthDay,
          id_flight : id_flight,
          flight_checkin : flight_checkin,
          from : from,
          to : to,
      }
      // console.log(FullName,Email,PhoneNumber,BirthDay,id_car,rent_checkin,rent_checkout)
      axios.post('http://localhost:5000/api/sendFlightInfos',userData )
      .then((response) => {
        // Handle the response from the backend if needed
        console.log('Data sent successfully:', response.data);
        setShowThanksMessage(true);

      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error('Error sending data:', error);
      });
  
  }





  var flightChosen = localStorage.getItem('flightChosenId')
  flightChosen = JSON.parse(flightChosen);
  // var flight = ;
  // console.log(flight.)
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
  return (
    <div className='containerFlightsSelect'>
      <div className="leftSideFlightsSelect">
            {showThanksMessage ? (
            <div className="popup">
              <h1>Thanks for choosing us. See you again.</h1>
              <a href="/">Look for others...</a>
            </div>
          ) : (
            <div>
              <h1>Traveler's informations</h1><br />
            <form >
            <label>Full name</label> <br />
            <input type="text" name="" placeholder='Alex Smith' id="" onChange={(e)=> setFullName(e.target.value)} required/>
            <br /><br />
            <label>Email</label><br />
            <input type="email" name="" placeholder='user@example.com' id="" onChange={(e)=> setEmail(e.target.value)} required/>
            <br /><br />
            <div className="phoneDate">
               <div className='phoneDateDiv'>
               <label>Phone number</label><br />
                <input type="text" name="" placeholder='0123456789' id="" onChange={(e)=> setPhoneNumber(e.target.value)} required/>
                    </div>

               <div className='phoneDateDiv'>
               <label>Birthday</label><br />
                <input type="date" name="" placeholder='DD/MM/YYYY' id="" onChange={(e)=> setBirthDay(e.target.value)} required/>
               </div>
               
            </div> 
            <input type="button" name="" value="Confirm" id="" className="submitCar" onClick={sendDataUser} />

            <p>(Payement on the arrival)</p>

            </form>
            </div>
            
            )}  
      </div>

      <div className="rightSideFlightsSelect">
            <h1>Order informations</h1> <br />
            <div className="departure">
                <h2>Departure</h2>
                <p>{flightChosen.departure.scheduled_date}</p> 
                <h4>{flightChosen.departure.scheduled_time} - {flightChosen.arrival.scheduled_time}</h4> <p>({getTimeDifference(flightChosen.departure.scheduled_time,flightChosen.arrival.scheduled_time)})</p>
                <p>{flightChosen.departure.airport} - {flightChosen.arrival.airport}</p>
            </div><br />
            <div className="return">
                <h2>Return</h2>
                <p>None</p> 
                <h4></h4> <p></p>
                <p></p>
            </div>
      </div>
    </div>
  )
}

export default FlightsSelect
