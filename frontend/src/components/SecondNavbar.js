import React from 'react'
import '../css/index.css'

function SecondNavbar() {
  return (
    <>
    <div className='containerNavbarTWo'>
        <a href="FlightsSearch">
            <div className='itemNavbarTwo'>
                <img src="images/flights.png" alt="" className='itemNavbarTwoPicture' />
                <p>Flights</p>
            </div>
        </a>
        <a href="/HotelsSearch">
            <div className='itemNavbarTwo'>
                <img src="images/hotel.png" alt="" className='itemNavbarTwoPicture'/>
                <p>Hotels</p>
            </div>
        </a>
        <a href="/CarsSearch">
            <div className='itemNavbarTwo'>
                <img src="images/car.png" alt="" className='itemNavbarTwoPicture'/>
                <p>Car rental</p>
            </div>
        </a>
        
        
      
    </div>
    <hr className='hr2' />
    </>
    
  )
}

export default SecondNavbar
