import React from "react";
import Circuit from './PhotoByUmbertoOnUnsplash.jpg';
import Logo from './Logo.png';
import Kids1 from './kids1.jpg';
// import Kids2 from './PhotoByJeswinThomasOnUnsplash.jpg';
import Kids3 from './PhotoByMimiThianOnUnsplash.jpg';
// import Library from './PhotoByJacquelineBrandwaynOnUnsplash.jpg';
// import Yard from './PhotoByZacharyKeimigOnUnsplash.jpg';
// import Room from './PhotoByIvanAleksicOnUnsplash.jpg';
import Comp from './iStock-898057154.jpg';
// import {Row, Col, Container} from 'react-bootstrap';

function Main() {
  return (
    <div>
        <div>
        <img className="circuit" src={Circuit} alt="PhotoByUmbertoOnUnsplash"></img>
        <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="mainUp topZ center bigger underline2">CAS: Communications Audit Services</div></div>
        </div>

   
        <div className="main indent up moreBottom clear">

        <div><strong>Communications Audit Services:</strong> is a full-service E-Rate consulting firm.  We manage the entire application process. This includes; filing forms, managing audits, filing appeals, and discount rate maximization. Our all-inclusive fee is fully contingent upon successful funding and includes the lifetime of any application we file.</div>
        <br></br>
       
        <div>
        <img className="kids1" src={Kids1} alt="KidsByComp"></img>
          CAS has clients in 26 states and actively provides assistance to a variety of entities.  This includes public school districts, charter schools, private schools, libraries, special education consortiums and Head Start organizations.  We always take a strong proactive stance for our clients in regards to funding opportunities and procurement assistance. </div>
        <br></br>
   
        <div className="wrap"> 
        <div className="text">
        {/* <div className="spacer"></div> */}
        <img className="kids2" src={Kids3} alt="KidsByComp"></img>
        CAS consultants ensure that applicants are fully compliant with all rules, regulations, and deadlines.  This allows administrators and staff to focus scarce time and resources on the business of managing their school or library.  As trusted consultants, we also ensure that clients are able to maximize opportunities within the E-rate program which is constantly evolving. </div>
        </div>
        </div>
        <img className="compFoot" src={Comp} alt=""></img>
    </div>
  );
}

export default Main;