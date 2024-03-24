import React , {useEffect,useState} from 'react'
import SortingComponent from './SortingComponent';
import axios from 'axios';
import SortingHotelsComponent from './SortingHotelsComponent';
import HotelsSort from './HotelsSort';



function HotelsResults() {
    const [addressFilter, setAddressFilter] = useState('');
    const [daysNumber, setDaysNumber] = useState(1);
    const [check_in, setCheckIn] = useState('');
    const [check_out, setCheckOut] = useState('');
    const [personNumber, setPersonNumber] = useState(1);
    const [tempPersonNumber, setTempPersonNumber] = useState(1); // Separate state for temporary value
    const [hotelsData, setHotelsData] = useState([]);
    const [filteredHotelsObject, setFilteredHotels] = useState([]); // State to store filtered hotels
    const [listeHotels , setListeHotels] = useState([])
    const [selectedSortingOption, setSelectedSortingOption] = useState('priceLowToHigh');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFlightsSearchVisible, setIsFlightsSearchVisible] = useState(true);
    const [suggestions, setSuggestions] = useState([]);

    //pour envoyer l'hotel selected to the other component.
    const [selectedHotel, setSelectedHotel] = useState(null);

    // Function to handle when a hotel is selected
    const handleHotelSelect = (hotel) => {
      setSelectedHotel(hotel);
      console.log('empty line')
      // console.log('this is the selected hotel : ', hotel)
      localStorage.setItem('hotelSelected',JSON.stringify(hotel))
      let hotelselected = localStorage.getItem('hotelSelected')
      
      console.log(JSON.parse(hotelselected));
    };


    const [filtredListHotels, setFilteredHotelsList] = useState([]);
  const handleFilteredHotels = (filteredHotels) => {
    setFilteredHotelsList(filteredHotels);
 };
    const [listFromChild, setListFromChild] = useState([]);

    const handleListFromChild = (list) => {
      setListFromChild(list);
    };
    // console.log('filterd:',filtredListHotels);
 

      // Callback function to receive filtered hotels from SortingHotelsComponent
      const updateFilteredHotels = (filteredHotels) => {
        setListeHotels(filteredHotels);
      };


    // const fetchFirstData = () => {
    //   axios
    //     .get('http://localhost:5000/api/hotels')
    //     .then((response) => {
    //       setHotelsData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching hotel data:', error);
    //     });
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
          setFilteredHotelsList(sortedHotels);
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


          const filteredHotels = hotelsData.filter((hotel) =>
          hotel.adresse.toLowerCase().includes(searchQuery.toLowerCase())
        );


        function calculateDaysDifference(startDateStr, endDateStr) {
          // console.log(startDateStr);
          localStorage.setItem('checkIn',startDateStr);
          localStorage.setItem('checkOut',endDateStr);
          // console.log(endDateStr);
          // Parse the date strings to Date objects
          const startDate = new Date(startDateStr);
          const endDate = new Date(endDateStr);
      
          // Calculate the difference in milliseconds
          const differenceMs = endDate - startDate;
      
          // Convert the difference to days
          const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      
          return daysDifference;
        }
        const handleSearch =(e)=>{
            // setTimeout(searchHotels,500)
            localStorage.setItem('adresseHotel',addressFilter);
            let numberDays = calculateDaysDifference(check_in, check_out);
            
            localStorage.setItem('numberDays',numberDays);
            localStorage.setItem('checkIn',check_in);
            localStorage.setItem('checkOut',check_out);
            localStorage.setItem('personsNumber',tempPersonNumber);
            setDaysNumber(numberDays);
            setPersonNumber(tempPersonNumber);
            // e.preventDefault();
            // searchHotelsTwo()
        }

        function searchHotelsWithFilters(filters) {
          axios.post('http://localhost:5000/api/searchHotelsFromStorage', filters)
            .then((response) => {
              console.log('this is the one',response.data);
               setFilteredHotelsList(response.data.results);
            })
            .catch((error) => {
              console.error('Error sending data:', error);
            });
        }



        localStorage.setItem('personNumber',personNumber);

          var  daysNumberr = localStorage.getItem('numberDays');
          // var checkInn = localStorage.getItem('checkIn');
          // var checkOutt = localStorage.getItem('checkOut');
          var personsNumberr = localStorage.getItem('personsNumber');
           
          
     



    
          
          return (
            <div>
             

                      <div className="FlightsSearchVol2">
                        <form>
                              <input
                            type="text"
                            placeholder="Where?"
                            value={addressFilter}
                            onChange={(e) => setAddressFilter(e.target.value)}
                            
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
                  
                          <a href="">
                            <input type="submit"
                              value="Search"
                              className="submitFlightsResultsVol2"
                              onClick={handleSearch}
                            />
                          </a>
                          
                        </form>

                      
                    </div>

        
              <img src="images/menu.png" id="showBtn" alt="" className="barSideSecond" />
              <div className="sideBar" id="sideBar">
                <button className="closeBtn" id="closeBtn">
                  X
                </button>
                <HotelsSort 
                    onSelectedFilters={searchHotelsWithFilters} // Pass the function to receive the filtered hotels
                    
                />
              </div>
        
              <div className="containerResultsFlights">
                <div className="leftSideResultsFlights">
                <HotelsSort 
                    onSelectedFilters={searchHotelsWithFilters} // Pass the function to receive the filtered hotels                   
                />
                </div>
        
                <div className="rightSideResultsFlights">
                  <div className="resultsStatistics">
                    <p>{filtredListHotels.length} Results</p>
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
                      {filtredListHotels.map((hotel, index) => (
                        <div className="cardHotelResult" key={index}>
                          <img src="images/room1.jpg" alt="" />
                          <div className="middleInfosCardHotelResults">
                            <h2>{hotel.name}</h2>
                            <span>
                              {hotel.adresse} <span>{hotel.beach_distance}Km from the beach</span>
                            </span>
                            <br />
                            <h4>{hotel.room} Room</h4>
                            <p>{hotel.bed} bed(s)</p>
                          </div>
                          <div className="rightInfosCardHotelResults">
                            <span>
                              {daysNumberr} Days, {personsNumberr} person(s)
                            </span>
                            <h3>{hotel.price} MAD/night</h3>
                            <br />
                            <a href="/HotelsSelect" className='linkToHotel' onClick={() => handleHotelSelect(hotel)}>See availability
                              {/* <button type="submit" ></button> */}
                            </a>
                            
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

export default HotelsResults
