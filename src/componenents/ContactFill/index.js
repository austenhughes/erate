import React from "react";
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import {Row, Col, Container} from 'react-bootstrap';
// import Kids1 from './kids1.jpg';

function ContactFill() {
    return (
      <div className="">

        <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center underline2">Ways to reach us :</div></div>
        </div>

        <Container>

        <div className="half1">
        <div className="bigger center underline2">Fill this out : </div>
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
        <div className="bigger underline2 center"> or you can reach us at : </div>
        <Row>
        <Col className="contactLeft">
        <div> Email : Info@comaudit.services</div>
        <div> Phone : (847)509.5980</div>
        </Col>
        {/* <Col className="contactRight">
        <img className="kids2" src={Kids1} alt="KidsByComp"></img>
        </Col> */}
        </Row>
        </div>
        <div className="half2 mTop">
        <div></div>
        </div>
        </div>

        </Container>
      
      
      </div>
    );
  }
  
  export default ContactFill;