import React from 'react'
import '../css/index.css'

function NavbarF() {
  return (
    <>
    <div className='navbarContainer'>
        <div>
            <a href="/"><img src="images/logo-removebg.png" alt="" className='logoPic'/></a>
            
        </div>
        <div className='rightNavbar'>
            <div className='rightNavbarM'>
                {/* <img src="images/uk.png" alt="TRAVELEASE" className='uk'/> */}
                <div>
                    <a href="/Login"><button className='loginBtn'>Login</button></a>
                    <a href="/Register"> <button className='registerBtn'>Register</button></a>
                    
                </div>
            </div>
            
            <img src="images/menu.png" alt="" className='barSideFirst' />
        </div>

    </div>
       
    <hr className='hr1' />
    
    
    </>
   
  )
}

export default NavbarF
