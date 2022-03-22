import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';

import LearnKey from './learnKey.jpg';
import Cable from './cable.jpg';
import Tower from './towers.jpg';

function Why() {
  return (
    <div>

      <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center bigger">Consulting</div></div>
        </div>

    <Accordion alwaysOpen >
      <div className="main up">
  <Accordion.Item  style={{ backgroundColor: '#eeeeee' }} eventKey="0">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger">CAS Reduces Application Burden :</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
    <ul> 
      <li>Files all E - Rate forms including 470, 471, 486, 500, BEAR, and others as deemed necessary</li>
      <li>Answers all PIA questions</li>
      <li>Manages audits and reviews</li>
      <li>Files RALs and appeals</li>
      <li>Designates reimbursement methods with vendors</li>
      <li>Creates RFPs</li>
    </ul>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item  style={{ backgroundColor: '#eeeeee' }} eventKey="1">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger">CAS Maximizes Discount Rate :</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}  >
    <ul>
            <li> Review Free and Reduced eligibility numbers with Child Nutrition Staff</li>
            <li> Experts in alternative methods of discount calculation including;
                <ul>
                    <li>Surveys</li>
                    <li>Sibling-Matching</li>
                    <li>CEP</li>
                    <li>Financial Aid Forms</li>
                    <li>Combining Methods</li>
                </ul>
            </li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="2">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger"> CAS Ensures All Eligible Services are Included :</div> </Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}>
    <ul>
            <li>Regularly discuss needs with technology staff</li>
            <li>Attend trainings & conference calls to be up to date on eligibility services list</li>
            <li>Review contracts for compliance</li>
            <li>Review RFPs for compliance</li>
            <li> Work with vendors and consortia to better understand new technologies and how they apply to E-Rate</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="3">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger"> CAS Ensures Legal Compliance : </div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
    <ul>
            <li>All consultants attend yearly USAC training</li>
            <li>Consultants regularly participate in conference calls and webinars with USAC, vendors, and state officials</li>
            <li>CAS participates in many professional associations to gain a better understanding of the issues facing applicants and how the may be incorporated into E-Rate planning & strategy</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up bottom">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="4">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger"> CAS Manages Audits :</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
    <ul>
            <li>CAS will be physically present for any on-site audit</li>
            <li>As part of engagement will manage audits of all past applications</li>
            <li>Guaranteed support for the lifetime of any application filed</li>
            <li>Represents clients with USAC, the FCC and outside auditors</li>
            <li>Writes and files appeals with both USAC and the FCC</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
  </div>
</Accordion>

<div >
        <img className="img3" src={Tower} alt="tower"></img>
        <img className="img3" src={LearnKey} alt="learnKey"></img>
        <img className="img3" src={Cable} alt="computerCable"></img>
        </div>

    </div>
  );
}

export default Why;