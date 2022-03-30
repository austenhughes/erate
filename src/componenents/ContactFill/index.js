import React from "react";
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
// import Apple from './iStock-93475425.jpg';
import Web from './iStock-621902496.jpg';
import Comp from './iStock-898057154.jpg';
import {Row, Col, Container} from 'react-bootstrap';
// import Kids1 from './kids1.jpg';

function ContactFill() {
    return (
      <div>
        <div>
        <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center underline2">Contact Info:</div></div>
        </div>

        {/* <img className="compFoot" src={Comp} alt="logo"></img> */}
        <div className="rel">
        {/* <img className="compFoot z0" src={Comp} alt=""></img> */}
        <Container className="z1 moreBottom">
        <div className="half1">
        <div className="bigger center underline2">Contact us: </div>
        <Col>
        <div>Name: </div>
        <textarea type="text" cols="40" rows="1" className="contactLeft"></textarea>
        <div>Preferred Email:</div>
        <textarea type="text" cols="40" rows="1" className="contactLeft"></textarea>
        <div>Role: </div>
        <textarea type="text" cols="40" rows="1" className="contactLeft"></textarea>
        <div>School / Library Name: </div>
        <textarea type="text" cols="40" rows="1" className="contactLeft"></textarea>
        </Col>
        <Col>
        <div>Questions: </div>
        <textarea type="text" cols="40" rows="5" className="contactRight"></textarea>
        <button className="sendContact" onclick="myFunction()">Send</button>
        </Col>
        </div>
      
        <div className="wider">
        <div className="half2">
        <div className="biggerFont underline2 center"> Offices: </div>
        <Row>
        <Col className="contactLeft">
        <div> 
        <div className="office2">
        <br></br>
        <div className="underline"> Illinois: </div>
        <div> CAS, LLC </div>
        <div> 5 Revere Drive, Ste 200 </div>
        <div> Northbrook, Il 60062 </div>
        <div> PH-(847)509.5980 </div>
        <div> Email- ​Info@comaudit.services </div>
        </div>
        </div>
        <div>
        <div className="office2">
        <br></br>
        <div className="underline"> North Carolina: </div>
        <div> CAS, LLC </div>
        <div> 4438 Glenscape Ln SE </div>
        <div> Southport, NC 28461 </div>
        <div> PH-(910)333.6870 </div>
        <div> Fax- (910)653.1669 </div>
        <div> Email- ​Info@comaudit.services </div>
        </div>
        </div>

        </Col>
        </Row>
        </div>
        {/* <div>
        <div><img className="web up" src={Web} alt="logo"></img></div>
        </div> */}
        </div>
        </Container>
        </div>
        
        <img className="compFoot2" src={Comp} alt=""></img>
        </div>
  
      </div>
    );
  }
  
  export default ContactFill;