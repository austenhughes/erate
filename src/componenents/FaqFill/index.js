import React from "react";
// import Tower from './towers.jpg';
// import LearnKey from './learnKey.jpg';
// import Cable from './cable.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';

function FaqFill() {
  return (
    <div>

      <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center">Frequently Asked Questions</div></div>
        </div>

        <Accordion alwaysOpen >
      <div className="main up">
  <Accordion.Item  style={{ backgroundColor: '#eeeeee', borderRadius: '25px 25px 25px 25px'}} eventKey="0">
    <Accordion.Header  style={{ backgroundColor: '#eeeeee' }} ><div className="bigger">Q 1</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
   {/* <div></div> */}
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item  style={{ backgroundColor: '#eeeeee' }} eventKey="1">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger">Q 2</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}  >
    {/* <div></div> */}
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="2">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger">Q 3</div> </Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }}>
    {/* <div></div> */}
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="3">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} > <div className="bigger"> Q 4</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
    {/* <div></div> */}
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="main up bottom">
  <Accordion.Item style={{ backgroundColor: '#eeeeee' }} eventKey="4">
    <Accordion.Header style={{ backgroundColor: '#eeeeee' }} ><div className="bigger"> Q 5</div></Accordion.Header>
    <Accordion.Body style={{ backgroundColor: '#eeeeee' }} >
   {/* <div></div> */}
    </Accordion.Body>
  </Accordion.Item>
  </div>
</Accordion>


    {/* <div >
        <img className="img" src={Tower} alt="tower"></img>
        <img className="img" src={LearnKey} alt="learnKey"></img>
        <img className="img" src={Cable} alt="computerCable"></img>
        </div> */}
 
    </div>
  );
}

export default FaqFill;