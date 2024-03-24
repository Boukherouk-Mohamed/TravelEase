import React from 'react'
import '../css/index.css'

function Homepage() {
  return (
    <>
        <div className='containerhome'>
      <div className='picHome'>
             {/* <img src="images/travel2.png" alt="" />  */}
      </div>
      <div className='leftSideHomePage'>
        <p>Travelers' Choice <br />
            <span>Best of the Best Things to Do</span></p> <br />
        <div className='buttonToStart'>
                <h1>Look for a plane</h1>
        </div>
      </div>
        
      
    </div>

    <div className='secondPartHomePage'>
        <h1>Popular right now</h1>
        <p>Travellers searching for Morocco also booked these</p>
        <div className='firstPartPictureHomePage'>
            <img src="images/casa.png" alt="" />
            <img src="images/rabat.png" alt="" />
        </div>
        <div className="secondPartPictureHomePage">
            <img src="images/marrakech.png" alt="" />
            <img src="images/rabat.png" alt="" />
            <img src="images/casa.png" alt="" />
        </div>
    </div>
    </>
    
  )
}

export default Homepage
