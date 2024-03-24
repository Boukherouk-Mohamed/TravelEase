import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


function CarsSelect() {
  function calculateDaysDifference(startDateStr, endDateStr) {

    localStorage.setItem('checkIn',startDateStr);
    localStorage.setItem('checkOut',endDateStr);
  
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Calculate the difference in milliseconds
    const differenceMs = endDate - startDate;

    // Convert the difference to days
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
  }
  
    var carSelected = localStorage.getItem('carSelected');
     carSelected = JSON.parse(carSelected);
     console.log(carSelected)
     var id_car = carSelected.id;
   

    var checkIn = localStorage.getItem('checkInCAr');
    var checkOut = localStorage.getItem('checkOutCAr');

 
    var numberDays = calculateDaysDifference(checkIn,checkOut);


    const [carsPictures, setcarsPictures] = useState([]);


    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/carsPictures' , {id_car});
    
          if (response.status === 200) {
            console.log(response.data)
            
            setcarsPictures(response.data);


          } else {
            console.log('No such pictures for this car');
          }
        } catch (error) {
          console.log('Error:', error.message);
        }
      }
      
      useEffect(()=>{
        handleLogin();
    },[]);

  return (
    <div>
      

    <div className="topPicturesHotelSelect">
      {carsPictures.length > 0 ? (
        <>
          <div className="leftSidePicturesHotelSelect">
            <img src={carsPictures[4]?.image} alt="" />
          </div>
          <div className="rightSidePicturesHotelSelect">
            <img src={carsPictures[0]?.image} alt="" />
            <img src={carsPictures[1]?.image} alt="" />
            <img src={carsPictures[2]?.image} alt="" />
            <img src={carsPictures[3]?.image} alt="" />
          </div>
        </>
      ) : (
        <div>No pictures available for this car .</div>
      )}
    </div>

        <div className="middleHotelsSelect">
            <div className="leftSideMiddleHotelsSelect">
                <div className="partOneLeftSide">
                    <h1>{carSelected.name} </h1>
                    <h3>What this car have</h3>
                    <span>Air Conditioning</span>
                    <span>4 Doors</span>
                    <span>Automatic transmission</span>
                    <span>Color : Silver</span>
                    <span>Hybrid</span>
                   
                </div><br /><br />

                <div className="partTwoLeftSide">
                    <h1>Reviews</h1>

                    <div className="testimonial">
                        <div className="head">
                            <img src="images/person.jpg" alt="" />
                            <div>
                                <h4>James</h4>
                                <span>june 2022</span>
                            </div>
                        </div>
                        <p> Enjoyed my stay. very nice and friendly hosts.
                            I was only there to sleep as I was busy with the 
                            activity I needed to be in Ottawa.
                            Had a great chat the one night I made it back.
</p>
                       
                    </div>               
                </div>
                
            </div>
            <div className="rightSideHotelsSelect">
                    <div className="cartContainerreservation">
                        <h2>{carSelected.price} MAD per day</h2>
                        <div className="containerInfosCard">
                            <div className="contTwo">
                            <div className='firstDivs '>
                                <p>Check-in</p>
                                <span>{checkIn}</span>
                            </div>
                            <div className='firstDivsRight'>
                                <p>Check-out</p>
                                <span>{checkOut}</span>
                            </div> <br />
                            </div>
                            <div className='lastDiv'>
                                <p>Pick up adresse :</p>
                                <span>{carSelected.adresse} </span>
                            </div>
                        </div>
                        <div className="contInput">
                          <a href="/CarsRent"><input type="submit" value="Select" className='submitHotelSelect'/></a>
                            
                        </div>

                        <div className="containerPricesHotelSelect">
                            <p> {carSelected.price} MAD x {numberDays} night(s) </p>
                            <p style={{display:'flex', justifyContent:'right'}}>{numberDays * carSelected.price}</p>
                            <p> Taxes fee </p>
                            <p style={{display:'flex', justifyContent:'right'}}>150MAD</p>
                            <p> Service fee </p>
                            <p style={{display:'flex', justifyContent:'right'}}>55MAD</p>
                            <div className="totalToPay">
                                <p>Total to pay </p>
                                <p style={{display:'flex', justifyContent:'right'}}>{numberDays * carSelected.price + 150 + 55 }MAD</p>
                            </div>
                            
                        </div>

                        
                    </div>
            </div>
        </div>









    </div>
  )
}

export default CarsSelect
