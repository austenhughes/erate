import React from "react";
// import Accordion from 'react-bootstrap/Accordion';
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';

import Kids1 from './kids1.jpg';

function Servs() {
  return (
    <div>
      
      <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center bigger underline2">Services :</div>
         </div>
        </div>

    {/* <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="mainUp center topZ"> Services</div>
        </div> */}


    <div className="main up">
    <div className="bigger center underline2"> Category One Services : Broadband </div>
    <div> <img className="kids3" src={Kids1} alt="KidsByComp"></img>
      </div>
    {/* <div> <img className="kids1" src={Kids1} alt="KidsByComp"></img>
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
      {/* <div> <img className="kids1" src={Kids1} alt="KidsByComp"></img>
      </div> */}
    </ul>
    
    </div>
    
    <div className="main up rel">
    <div className="bigger center underline2"> Category Two Services : Equipment </div>
    <div>
    <div> <img className="kids1 abs" src={Kids1} alt="KidsByComp"></img>
      </div>
      <div> <img className="kids1 abs" src={Kids1} alt="KidsByComp"></img>
      </div>
      <div> <img className="kids1 abs" src={Kids1} alt="KidsByComp"></img>
      </div>
    </div>
    <ul> 
      <li> $167 per student of funding eligible to apply every 5 years</li>
      <li> 20%-85% discounts on equipment</li>
      <li> Discounts based on F&R eligibility </li>
    
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
      {/* <div> <img className="kids1" src={Kids1} alt="KidsByComp"></img></div> */}
      {/* <div> <img className="kids1" src={Kids1} alt="KidsByComp"></img></div> */}
    </ul>
    </div>
    </div>
  );
}

export default Servs;