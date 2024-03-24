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




        function searchHotelss(){
          localStorage.setItem('carAdresse',addressFilter)
          localStorage.setItem('checkInCAr',check_in)
          localStorage.setItem('checkOutCAr',check_out)
          // searchCarsTwo();
        }





        function searchCarsWithFilters(filters) {
          axios.post('http://localhost:5000/api/searchCarsFromStorage', filters)
            .then((response) => {
              console.log(response.data);
              setListCars(response.data.results);
            })
            .catch((error) => {
              console.error('Error sending data:', error);
            });
        }
      
          useEffect( ()=>{
            getLocalStorageData();
            searchCarsWithFilters();
          
          })





