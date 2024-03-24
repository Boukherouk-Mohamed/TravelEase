import React from 'react'
import axios from 'axios';
import { useState , useEffect } from 'react';
import SortingComponent from './SortingComponent';
import SortingHotelsComponent from './SortingHotelsComponent';
import SortingCarsComponent from './SortingCarsComponent';

function CarsResults() {
    const [addressFilter, setAddressFilter] = useState('');
    // const [daysNumber, setDaysNumber] = useState(1);
    const [check_in, setCheckIn] = useState('');
    const [check_out, setCheckOut] = useState('');
    // const [personNumber, setPersonNumber] = useState(1);
    // const [tempPersonNumber, setTempPersonNumber] = useState(1); // Separate state for temporary value
    const [hotelsData, setHotelsData] = useState([]);
    // const [filteredHotelsObject, setFilteredHotels] = useState([]); // State to store filtered hotels
    // const [listeHotels , setListeHotels] = useState([])
    const [selectedSortingOption, setSelectedSortingOption] = useState('priceLowToHigh');
    const [searchQuery, setSearchQuery] = useState('');
 
   


    const [filtredListHotels, setFilteredCarsList] = useState([]);
  const handleFilteredCars = (filteredHotels) => {
    setFilteredCarsList(filteredHotels);
 };
    const [listFromChild, setListFromChild] = useState([]);

    const handleListFromChild = (list) => {
      setListFromChild(list);
    };
    // console.log('filterd:',filtredListHotels);
 

      // Callback function to receive filtered hotels from SortingHotelsComponent
      // const updateFilteredHotels = (filteredHotels) => {
      //   setListeHotels(filteredHotels);
      // };

  
    useEffect(()=>{

;
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
        const [price, setPrice] = useState(50);
      
        const handleChange = (event) => {
          setPrice(event.target.value);
        };
        const [selection, setSelection] = useState('include');
    

        const handleSortingChange = (event) => {
          const selectedOption = event.target.value;
          setSelectedSortingOption(selectedOption);
        
          // Call the sortHotels function with the selected sorting option and update the state
          const sortedHotels = sortHotels(selectedOption);
          setFilteredCarsList(sortedHotels);
        };
  
        const sortHotels = (option) => {
          // Sorting logic based on the selected sorting option
          switch (option) {
            case 'priceLowToHigh':
              return hotelsData.slice().sort((a, b) => a.price - b.price);
            case 'priceHighToLow':
              return hotelsData.slice().sort((a, b) => b.price - a.price);
            // Add more sorting options as needed
            default:
              return hotelsData;
          }
        };

          const filteredHotels = hotelsData && hotelsData.filter((hotel) => hotel.adresse.toLowerCase().includes(searchQuery.toLowerCase()));










          const [checkInCar, setCheckInCar] = useState('');
          const [checkOutCar, setCheckOutCar] = useState('');
          const [adresseCar, setadresseCar] = useState('');
          const [listCars , setListCars] = useState([])

          const getLocalStorageData=()=>{
            setCheckInCar(localStorage.getItem('checkInCAr')); 
            setCheckOutCar(localStorage.getItem('checkOutCAr')); 
            setadresseCar(localStorage.getItem('carAdresse'));
             console.log('geted items :', checkInCar,checkOutCar,adresseCar) 
          }

          const choosenCar =(car)=>{
            // alert(car.id)
            localStorage.setItem('carSelected',JSON.stringify(car));
          } 

          useEffect( ()=>{
            getLocalStorageData();

          
          })














        function calculateDaysDifference(startDateStr, endDateStr) {

          const startDate = new Date(startDateStr);
          const endDate = new Date(endDateStr);
      
          // Calculate the difference in milliseconds
          const differenceMs = endDate - startDate;
      
          // Convert the difference to days
          const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      
          return daysDifference;
        }


        function searchHotelss(){
          localStorage.setItem('carAdresse',addressFilter)
          localStorage.setItem('checkInCAr',check_in)
          localStorage.setItem('checkOutCAr',check_out)
          // searchCarsTwo();
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
        


        useEffect(() => {
          // fetchFirstData();
          // searchCarsTwo();
        }, []);


  return (
    <div id='containerResults'>
      
                  <div>
             

             <div className="FlightsSearchVol2">

             <input
               type="text"
               placeholder="Where?"
               value={addressFilter}
               onChange={(e) => setAddressFilter(e.target.value)}
             />
             <input type="date"
               placeholder="Check in"
               onChange={(e) => setCheckIn(e.target.value)}
             />
             <input type="date"
               placeholder="Check in"
               onChange={(e) => setCheckOut(e.target.value)}
             />

     
     
             <input type="submit"
               value="Search"
               className="submitFlightsResultsVol2"
               onClick={searchHotelss}
             />
           </div>


     <img src="images/menu.png" id="showBtn" alt="" className="barSideSecond" />
     <div className="sideBar" id="sideBar">
       <button className="closeBtn" id="closeBtn">
         X
       </button>
       <SortingCarsComponent 
           onFilteredHotels={handleFilteredCars} // Pass the function to receive the filtered hotels
           listeHotels={hotelsData}
           onListUpdate={handleListFromChild}
       />
     </div>

     <div className="containerResultsFlights">
       <div className="leftSideResultsFlights">
       <SortingCarsComponent 
           onFilteredHotels={handleFilteredCars} // Pass the function to receive the filtered hotels
           listeHotels={hotelsData}
           onListUpdate={handleListFromChild}
       />
       
       </div>

       <div className="rightSideResultsFlights">
         <div className="resultsStatistics">
           <p>{listCars.length} Results</p>
           <div>
             <span>Sorted by:</span>
             <select name="sortingOptions" onChange={handleSortingChange} value={selectedSortingOption}>
               <option value="priceLowToHigh">Price (low to high)</option>
               <option value="priceHighToLow">Price (high to low)</option>
               {/* Add more sorting options as needed */}
             </select>
           </div>
         </div>

         <div className="rightSideCardHotelresult">
             {/* Render sorted and filtered hotel data */}
             {listCars.map((car, index) => (
               <div className="cardHotelResult" >
                        <img src="images/car1.jpg" alt="" />
                        <div className="middleInfosCardHotelResults">
                            <h2>{car.name}</h2>
                            <div style={{display:'flex', color:'#929292'}}>
                                <div>
                                    <p>{car.doors}</p>
                                    <p>1 small bag</p>
                                    <p style={{color:'green'}}>{car.type}</p>
                                </div>
                                <div style={{paddingLeft:'10%'}}>
                                    <p>{car.transmissions}</p>
                                    <p>1 large bag</p>

                                </div>
                            </div>
                            
                        </div>
                        <div className="rightInfosCardHotelResults">
                            <span>
                                Price:
                            </span>
                            <h3>{car.price} MAD</h3>
                            <br />
                            <a href="/CarsSelect" className='linkToHotel' onClick={()=>choosenCar(car)}>See availability
                                {/* <button type="submit" ></button> */}
                            </a>
                        </div>
               </div>

              ))} 
         </div>
       </div>
     </div>
   </div>
    </div>
  )
}

export default CarsResults
