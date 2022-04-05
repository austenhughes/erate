import React from "react";
// import Accordion from 'react-bootstrap/Accordion';
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import {Row, Col, Container} from 'react-bootstrap';
import Room from './PhotoByIvanAleksicOnUnsplash.jpg';
import Library from './PhotoByJacquelineBrandwaynOnUnsplash.jpg';
import Kids2 from './PhotoByJeswinThomasOnUnsplash.jpg';
import Kids1 from './kids1.jpg';
import Apple from './iStock-93475425.jpg';
import Connect from './iStock-503844546.jpg';
import Comp from './iStock-898057154.jpg';

function Servs() {
  return (
    <div>
      
      <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center bigger underline2">E-Rate:</div>
         </div>
        </div>

        <div className="main up">
        <div className="center underline2 bigger"> Who is Eligible? </div>
        <Container>
        <Row>
        <Col>
        <ul className="left"> 
          <li>Public K-12 school districts</li>
          <li>Charter schools</li>
          <li> Private schools</li>
          <li>Public libraries</li>
          <li>Head Start, Pre-K, Juvenile Justice, and Adult Education as determined by individual state law</li>
        </ul>
        </Col>
        <Col>
        <Row>
          <div>
          <img className="sidePics topPics" src={Library} alt="KidsByComp"></img>
            <img className="sidePics topPics" src={Room} alt="KidsByComp"></img>
            </div>
            </Row>
        <Row><div><img className="sidePics" src={Kids1} alt="KidsByComp"></img></div></Row>
        </Col>
        </Row>
        </Container>
        </div>

    <div className="main up">
    <div className="bigger center underline2"> Category One Services: Broadband </div>
    {/* <div> <img className="kids3" src={Kids2} alt="KidsByComp"></img>
      </div> */}
    <ul> 
      <li>Eligible to apply every year</li>
      <li>20%-90% discounts on broadband</li>
      <li> Discounts based on F&R eligibility </li>
      <li>Internet access</li>
      <li>Wide area Network Services</li>
      <li>Firewall as a bundled service</li>
      <li> Special construction of fiber</li>
      <li>Mobile data network (only when more cost effective than wifi)</li>
    </ul>
    
    </div>
    
    <div className="main up rel">
    <div className="bigger center underline2"> Category Two Services: Equipment </div>
    
    <div>
     <img className="kids4" src={Connect} alt="KidsByComp"></img>
     <img className="kids4" src={Kids2} alt="KidsByComp"></img>
     <img className="kids4" src={Apple} alt="KidsByComp"></img>
    </div>

    <div className="text">
    <ul> 
      <li className="text"> $167 per student of funding eligible to apply every 5 years </li>
      <li> 20%-85% discounts on equipment</li>
      <li> Discounts based on F&R eligibility
      </li>
    
      <li> Internal connections 
          <ul>
              <li>Switches</li>
              <li>Wireless access points</li>
              <li>Routers and controllers</li>
              <li>Cabling/Wiring</li>
              <li>Firewall</li>
              <li>Caching servers/Service</li>
              <li>Racks</li>
              <li>UPS support for above</li>
              <li>Software to support above</li>
          </ul>
      </li>
      <li> Basic Maintenance of internal connections
          <ul>
              <li>Must be on a "Pay as you go" basis</li>
              <li>Repair and upkeep of eligible hardware</li>
              <li>Configuration changes</li>
              <li>Basic technical support</li>
              <li>Software upgrades and patches</li>
              <li>Wire and cable Maintenance</li>
          </ul>
      </li>
      <li> Managed internal broadband 
          <ul>
              <li>Services provided by third party for the operation, management, and monitoring of eligible internal connections</li>
              <li>Network equipment may be owned by entity or leased from a third party</li>
              <li>Includes installation, activation, and initial configuration as well as on-site training in use of eligible equipment</li>
          </ul>
      </li>
     </ul>
     </div>
    </div>
    <img className="compFoot" src={Comp} alt=""></img>
    </div>
  );
}

export default Servs;