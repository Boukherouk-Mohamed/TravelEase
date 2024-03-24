import React from 'react';
import '../css/index.css'

function Footer() {
  return (
    <div><br />
    
        <div className="Footer" id="footer">
          <br />
          <div style={{ backgroundColor: 'transparent', marginTop: '5vh' }}>
            <h1 style={{ backgroundColor: 'transparent', color: 'white', marginLeft: '8%' }}>CONTACT US</h1>
          </div>
          <div className="contactusLine">
            <div className="reseau">
              <img src="images/fb.png" alt="" />
              <p>Check out our Fecebook</p>
            </div>
            <div className="reseau">
              <img src="images/Instagram.png" alt="" />
              <p>Join our Instagram</p>
            </div>
            <div className="reseau">
              <img src="images/Twitter.png" alt="" />
              <p>See what we tweet about</p>
            </div>
            <div className="reseau">
              <img src="images/LinkedIn2.png" alt="" />
              <p>Follow us on LinkedIn</p>
            </div>
          </div>
          <div className="infosFooter">
            <div className="aboutUsInfos">
              <h1>ABOUT US</h1>
              <p>Lorem Ipsum est simplement du faux texte employé dans la composition 
                et la mise en page Ipsum est simplement du faux texte employé dans le texte employé. </p>
            </div>

            <div className="aboutUsInfos">
              <h1>LINKS</h1>
              <a href="">FLIGHTS</a>
              <a href="">CAR RENTAL</a>
              <a href="">HOTELS</a>

            </div>
            <div className="aboutUsInfos">
              <h1>LEGAL</h1>
              <a href="">Team</a>
              <a href="">Terrms Of Use</a>
              <a href="">User privacy Notice</a>
            </div>
          </div>
        </div>
      
    
    
  
    
    </div>
  )
}

export default Footer;
