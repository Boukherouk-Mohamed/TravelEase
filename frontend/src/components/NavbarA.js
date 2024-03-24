import React from 'react'
import '../css/index.css'


function NavbarA() {
  const handleLogout = () => {
    // Delete the token from localStorage
    localStorage.removeItem('token');

    // You can also redirect the user to the login page or any other page after logout

     window.location.href = '/Login';
  };
  return (
    <>
    <div className='navbarContainer'>
        <div>
            <a href="/"><img src="images/logo-removebg.png" alt="" className='logoPic'/></a>
            
        </div>
        <div className='rightNavbarA'>
          <div className='rightNavbarM'>
               {/* <img src="images/uk.png" alt="TRAVELEASE" className='uk'/> */}
              <div className='logoutDiv'>
                  <img src="images/person.jpg" alt="Account" className='personPicture'/>
                  
                   {/* Attach the handleLogout function to the onClick event of the button */}
                  <button className='logoutBtn' onClick={handleLogout}>Logout</button>

              </div>
          </div>
          <img src="images/menu.png" alt="" className='barSideFirst'/>
            
        </div>

    </div>
    <hr className='hr1' />
    
    
    </>
  )
}

export default NavbarA
