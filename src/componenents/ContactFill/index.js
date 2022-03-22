import React from "react";
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import {Row, Col, Container} from 'react-bootstrap';
import Kids1 from './kids1.jpg';

function ContactFill() {
    return (
      <div className="">

        <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center">Ways to reach us :</div></div>
        </div>

        <Container>
        {/* <Row> */}
        <div className="main up addMargin">
        <div className="bigger center underline2">Fill this out : </div>
        <Row>
        <Col className="contactLeft">
        <div>Name: </div>
        <input type="text" ></input>
        <div>Preferred Email:</div>
        <input type="text" ></input>
        <div>Role: </div>
        <input type="text" ></input>
        <div>School / Library Name: </div>
        <input type="text" ></input>
        </Col>
        <Col className="contactRight">
        <div>Questions: </div>
        <textarea type="text" cols="50" rows="8" className="bigBox contactRight"></textarea>
        <button className="sendContact" onclick="myFunction()">Send</button>
        </Col>
        </Row>
        </div>
        {/* </Row> */}

        {/* <Row> */}
        <div className="main up addMargin">
        <div className="bigger underline2 center"> or you can always reach us at : </div>
        <Row>
        <Col className="contactLeft">
        <div> Email : Info@comaudit.services</div>
        <div> Phone : (847)509.5980</div>
        </Col>
        <Col className="contactRight">
        <img className="kids2" src={Kids1} alt="KidsByComp"></img>
        </Col>
        </Row>
        </div>
        {/* </Row> */}
        </Container>
      
      
      </div>
    );
  }
  
  export default ContactFill;