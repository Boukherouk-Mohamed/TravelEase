import React from 'react'

function FlightReserve() {
  
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




  return (
    <div><br /><br />
    {showThanksMessage ? (
      <div className="popup">
        <h1>Thanks for choosing us. See you again.</h1>
        <a href="/">Look for others...</a>
      </div>
    ) : (
      <div className="popup">
        <h1>Car Rental informations</h1>
        <div className='itemInput'>
            <label>Full name</label> <br />
            <input type="text" name="" placeholder='Alex Smith' id="" onChange={(e)=> setFullName(e.target.value)} />
        </div>
        <div className='itemInput'>
            <label>Email</label><br />
            <input type="email" name="" placeholder='user@example.com' id="" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='itemInput2'>
            <div className='itemItemInput2'>
                <label>Phone number</label><br />
                <input type="text" name="" placeholder='0123456789' id="" onChange={(e)=> setPhoneNumber(e.target.value)} />
            </div>

            <div className='itemItemInput2'>
                <label>Birthday</label><br />
                <input type="date" name="" placeholder='DD/MM/YYYY' id="" onChange={(e)=> setBirthDay(e.target.value)} />
            </div>
         </div>
         <div className='itemInput'>
            
            <input type="Submit" name="" value='Confirm' id="" className='submitCar' onClick={sendDataUser} />
        </div>
        <p>(Payement on the arrival)</p>
      
      </div>
      )}
    </div>
  )
}

export default FlightReserve
