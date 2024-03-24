import React, { useEffect , useState} from 'react';
import axios from 'axios';

function HotelsSelect() {

    var selectedHotel = localStorage.getItem('hotelSelected');
    selectedHotel = JSON.parse(selectedHotel);
    // console.log(selectedHotel)
    var id_hotel = selectedHotel.id;
    console.log('idHotel : ', id_hotel); 

    var checkIn=localStorage.getItem('checkIn');
    var checkOut = localStorage.getItem('checkOut');
    var personNumber = localStorage.getItem('personsNumber');
    var numberDays = localStorage.getItem('numberDays');


    const [hotelPictures, setHotelPictures] = useState([]);


    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/hotelPictures', {
          id_hotel,
          });
    
          if (response.status === 200) {
            console.log(response.data)
            // console.log(response)
            setHotelPictures(response.data);


          } else {
            console.log('No such pictures for this hotel');
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
      {hotelPictures.length > 0 ? ( // Check if hotelPictures is not empty
        <>
          <div className="leftSidePicturesHotelSelect">
            <img src={hotelPictures[4]?.image} alt="" />
          </div>
          <div className="rightSidePicturesHotelSelect">
            <img src={hotelPictures[0]?.image} alt="" />
            <img src={hotelPictures[1]?.image} alt="" />
            <img src={hotelPictures[2]?.image} alt="" />
            <img src={hotelPictures[3]?.image} alt="" />
          </div>
        </>
      ) : (
        <div>No hotel pictures available.</div>
      )}
    </div>

        <div className="middleHotelsSelect">
            <div className="leftSideMiddleHotelsSelect">
                <div className="partOneLeftSide">
                    <h1>{selectedHotel.name} </h1>
                    <h3>What this place offers</h3>
                    <span>WIFI</span>
                    <span>Washer</span>
                    <span>Air Conditioning</span>
                    <span>TV</span>
                    <span>Kitchen</span>
                    <span>Dedicated workspace</span>
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
                            Had a great chat the one night I made it back.</p>
                       

                    </div>               
                </div>
                
            </div>
            <div className="rightSideHotelsSelect">
                    <div className="cartContainerreservation">
                        <h2>{selectedHotel.price} MAD per night</h2>
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
                                <p>Persons</p>
                                <span>{personNumber} </span>
                            </div>
                        </div>
                        <div className="contInput">
                          <a href="/HotelsReserve"> <input type="submit" value="Select" className='submitHotelSelect'/></a>
                           
                        </div>

                        <div className="containerPricesHotelSelect">
                            <p> {selectedHotel.price} MAD x {numberDays} night(s) </p>
                            <p style={{display:'flex', justifyContent:'right'}}>{numberDays * selectedHotel.price}</p>
                            <p> Cleaning fee </p>
                            <p style={{display:'flex', justifyContent:'right'}}>150MAD</p>
                            <p> Service fee </p>
                            <p style={{display:'flex', justifyContent:'right'}}>55MAD</p>
                            <div className="totalToPay">
                                <p>Total to pay </p>
                                <p style={{display:'flex', justifyContent:'right'}}>{numberDays * selectedHotel.price + 150 + 55 }MAD</p>
                            </div>
                            
                        </div>

                        
                    </div>
            </div>
        </div>









    </div>
  )
}

export default HotelsSelect
