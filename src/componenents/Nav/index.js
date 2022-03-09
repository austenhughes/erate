import React from "react";
import Logo from './Logo.png';

function Nav() {
  
  return (
    
    <div className="nav">
    
    <div> 
      <img className="logo" src={Logo} alt="logo"></img>
      <a href="/erate/#/home" className="navBar">Home</a>
      <a href="/erate/#/consulting" className="navBar">Consulting</a>
      <a href="/erate/#/services" className="navBar">Services</a>
      {/* <a href="/erate/#/forms" className="navBar">Forms</a> */}
      <a href="/erate/#/faq" className="navBar">FAQ</a>
      <a href="/erate/#/contact" className="navBar">Contact</a>
    </div>
 
    </div>
  );
}

export default Nav;