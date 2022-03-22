import React from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
import Logo from './Logo.png';


function Footer() {
  return (
    <div className="fullFoot">
    <div className="container">
    
    <img className="officeLogo" src={Logo} alt="logo"></img>
    <div className="office">
    <br></br>
    <div className="underline"> Illinois </div>
    <div> CAS, LLC </div>
    <div> 5 Revere Drive, Ste 200 </div>
    <div> Northbrook, Il 60062 </div>
    <div> PH-(847)509.5980 </div>
    <div> Email- ​Info@comaudit.services </div>
    </div>
    <div className="office">
    <br></br>
    <div className="underline"> North Carolina </div>
    <div> CAS, LLC </div>
    <div> 4438 Glenscape Ln SE </div>
    <div> Southport, NC 28461 </div>
    <div> PH-(910)333.6870 </div>
    <div> Fax- (910)653.1669 </div>
    <div> Email- ​Info@comaudit.services </div>
    </div>
    </div>
    
    <div className="footer"> 
    {/* <img className="logoFoot" src={Logo} alt="logo"></img>  */}
    <div className="insideFoot">© cas-erate 2022</div>
    </div>
 
    </div>
  );
}

export default Footer;