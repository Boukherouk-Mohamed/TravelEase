import React from 'react'
import '../css/index.css'

function HomePageVol2() {
  return (
    <div>
        <div className="firstContainerHome">
            <img src="images/travel2.png" alt="" />
        </div>
        <div className="rightPartContainerHome">
        <p>Travelers' Choice <br />
            <span>Best of the Best Things to Do</span></p> <br />
            <a href="/FlightsSearch">
                <div className='buttonToStartSecond'>
                    <h1>Look for a plane</h1>
                </div>
            </a>
        
        </div>
        <div className='secondPartHomePage'>
        <h1 className='titleCont'>Popular right now</h1>
        <p className='parCont'>Travellers searching for Morocco also booked these</p>
        <div className='firstPartPictureHomePage'>
            <a href="/HotelsSearch">

            </a>
            <div id='city' className="container">
                <p>Casablanca</p>
                <a href="/HotelsSearch"> <img src="images/casa.png" alt="" /> </a>
                
            </div> 
            <div id='city' className="container">
                <p>Rabat</p>
                <a href="HotelsSearch"><img src="images/rabat.png" alt="" /></a> 
            </div> 
        </div>
        <div className="secondPartPictureHomePage">
            <div className="SecondContainer">
                <p>Rabat</p>
                <a href="HotelsSearch"><img src="images/rabat.png" alt="" /></a> 
            </div>

            <div className="SecondContainer">
                <p>Marrakech</p>
                <a href="HotelsSearch"><img src="images/marrakech.png" alt="" /></a>
            </div>

            <div className="SecondContainer">
                <p>Casablanca</p>
                <a href="HotelsSearch"><img src="images/casa.png" alt="" /></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomePageVol2
