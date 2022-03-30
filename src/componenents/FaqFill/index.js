import React from "react";
// import Tower from './towers.jpg';
// import LearnKey from './learnKey.jpg';
// import Cable from './cable.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import Comp from './iStock-898057154.jpg';

function FaqFill() {
  return (
    <div>

      <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center underline2">Frequently Asked Questions:</div></div>
        </div>

        <Accordion alwaysOpen>
      <div className="mainDrop up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee', borderRadius: '25px 25px 25px 25px'}} eventKey="0">
    <Accordion.Header  style={{ backgroundColor: '#eeeeee', borderRadius: '25px 25px 25px 25px'}} ><div className="bigger">Can I use E-Rate funds for Chromebooks?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee', borderRadius: '25px 25px 25px 25px' }} >
   <div className="indent"> No. Chromebooks and end user devices have been covered under ECF funding which has been administered by USAC as well. This program is due to expire after the third round of funding (application between 04/28 & 05/13/22). There are proposals in Congress to extend the program which will hopefully gain traction.
    </div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up">
  <Accordion.Item  style={{ backgroundColor: '#eeeeee' }} eventKey="1">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger">Are VOIP services eligible for reimbursement?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}  >
    <div>No,VOIP is considered to be part of voice services and was phased out beginning in 2014.
    </div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="2">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger">Does CAS choose the winning vendors from the 470?</div> </Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}>
    <div>No, we will help create an E-rate compliant decision matrix and are always willing to offer our opinion if asked, but the decision for who to contract with is always up to the applicant.
    </div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="3">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger"> Does CAS write RFPs?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
    <div> Yes, at the request of the client, CAS is always happy to help write RFPs as part of the procurement process.</div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up bottom">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="4">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger">Does CAS work with Libraries as well as schools?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
   <div>Yes, CAS has library clients in multiple states.</div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up bottom">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="5">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger">Will CAS help with future potential audits?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
   <div>Yes, CAS supports any application for the lifetime of that application which includes managing all future audits.
   </div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="mainDrop up bottom">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="6">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger">Are there start up fees to work with CAS?</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
   <div>No, CAS charges a one-time fee upon successful funding of any application. There are no upfront fees, extra fees for audits or anything else.
   </div>
    </Accordion.Body>
  </Accordion.Item>
  </div>
</Accordion>

<img className="compFoot" src={Comp} alt=""></img>
    {/* <div >
        <img className="img" src={Tower} alt="tower"></img>
        <img className="img" src={LearnKey} alt="learnKey"></img>
        <img className="img" src={Cable} alt="computerCable"></img>
        </div> */}
 
    </div>
  );
}

export default FaqFill;