import React from "react";
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import Kids1 from './kids1.jpg';
import Kids2 from './PhotoByJeswinThomasOnUnsplash.jpg';
import Kids3 from './PhotoByMimiThianOnUnsplash.jpg';
import Library from './PhotoByJacquelineBrandwaynOnUnsplash.jpg';
// import Yard from './PhotoByZacharyKeimigOnUnsplash.jpg';
import Room from './PhotoByIvanAleksicOnUnsplash.jpg';
import {Row, Col, Container} from 'react-bootstrap';

function Main() {
  return (
    <div>
        <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center bigger">CAS : Communications Audit Services</div></div>
        </div>

   
        <div className="main indent up">

        <div>Communications Audit Services is an Illinois based, full-service E-Rate consulting firm.  We manage the entire application process. This includes; filing forms, managing audits, filing appeals, and discount rate maximization. Our all-inclusive fee is fully contingent upon successful funding and includes the lifetime of any application we file. </div>
        <br></br>
       
        <div>
        <img className="kids1" src={Kids1} alt="KidsByComp"></img>
          CAS works closely with several procurement vehicles and can further help streamline the entire procurement and application process.  We are experts on how to use consortia purchasing as part of the E-Rate process. </div>
        <br></br>
   
        <div className="wrap"> 
        <div className="text">
        {/* <div className="spacer"></div> */}
        <img className="kids2" src={Kids3} alt="KidsByComp"></img>
        Words Words Words Words Words Words Words Words Words Words Words Words 
        Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words 
        Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words 
        Words Words v Words Words Words Words Words Words Words Words Words Words
        </div>
        </div>
        </div>
      
        <div className="main up">
    
        <div className="center  underline2 bigger"> Who is Eligible? </div>
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
        <Row><div><img className="sidePics" src={Library} alt="KidsByComp"></img></div></Row>
        <Row><div><img className="sidePics" src={Room} alt="KidsByComp"></img></div></Row>
        <Row><div><img className="sidePics" src={Kids2} alt="KidsByComp"></img></div></Row>
        </Col>
        </Row>
        </Container>
    </div>

    </div>
  );
}

export default Main;