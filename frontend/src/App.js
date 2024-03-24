
import './App.css';
import FlightsReslts from './components/FlightsReslts';
import FlightsSearch from './components/FlightsSearch';
import FlightsSelect from './components/FlightsSelect';
import Footer from './components/Footer';
import HomePageVol2 from './components/HomePageVol2';
// import Homepage from './components/Homepage';
import HotelsResults from './components/HotelsResults';
import HotelsSearch from './components/HotelsSearch';
import HotelsSelect from './components/HotelsSelect';
import Login from './components/Login';
import NavbarA from './components/NavbarA';
// import NavbarF from './components/NavbarF';
import Register from './components/Register';
import SecondNavbar from './components/SecondNavbar';
import './css/index.css'

import {Link , Route , Routes , BrowserRouter , Navigate} from 'react-router-dom'
import withAuth from './components/WithAuth.js';
import { useState } from 'react';
import CarsSearch from './components/CarsSearch';
import CarsResults from './components/CarsResults';
import CarsSelect from './components/CarsSelect';
import CarsRent from './components/CarsRent';
import HotelReserve from './components/HotelReserve';
import FlightReserve from './components/FlightReserve';
import Cars from './components/Cars';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  return (
      <div className="">
        <BrowserRouter>

         {/* Conditional rendering of Navbar */}
         {isLoggedIn ? (
          <>
             <NavbarA /> 
            
             <SecondNavbar />
          </>
         ) : (
          <></>
         )
          
          }
        

        <Routes>
          <Route path="/" element={withAuth(HomePageVol2)} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          {/* Wrap the protected routes with the withAuth HOC */}
          <Route path="/FlightsReslts" element={withAuth(FlightsReslts)} />
          <Route path="/FlightsSearch" element={withAuth(FlightsSearch)} />
          <Route path="/FlightsSelect" element={withAuth(FlightsSelect)} />
          <Route path="/FlightReserve" element={withAuth(FlightReserve)} />
          <Route path="/HotelsResults" element={withAuth(HotelsResults)} />
          <Route path="/HotelsSearch" element={withAuth(HotelsSearch)} />
          <Route path="/HotelsSelect" element={withAuth(HotelsSelect)} />
          <Route path="/HotelsReserve" element={withAuth(HotelReserve)} />
          <Route path="*" element={withAuth(HotelsSelect)} />
          <Route path="/CarsSearch" element={withAuth(CarsSearch)} />
          <Route path="/CarsResults" element={withAuth(Cars)} />
          <Route path="/CarsSelect" element={withAuth(CarsSelect)} />
          <Route path="/CarsRent" element={withAuth(CarsRent)} />

          {/* If the user is authenticated, redirect to the homepage */}
          {localStorage.getItem('token') && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>

        {/* Other components */}
      </BrowserRouter>

        {isLoggedIn ? (
          <>
             <Footer /> 

          </>
         ) : (
          <></>
         )
          
          }
      </div>
  );
}

export default App;
