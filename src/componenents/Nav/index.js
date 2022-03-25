import React from "react";
// import Logo from './Logo.png';

function Nav() {
  
  return (
    
    <div className="top">
    
    <div> 
      {/* <img className="logo" src={Logo} alt="logo"></img> */}
      <a href="/erate/#/home" className="topBar">Home</a>
      <a href="/erate/#/services" className="topBar">E-Rate</a>
      <a href="/erate/#/consulting" className="topBar">Consulting</a>
      {/* <a href="/erate/#/services" className="topBar">E-Rate</a> */}
      {/* <a href="/erate/#/forms" className="topvBar">Forms</a> */}
      <a href="/erate/#/faq" className="topBar">FAQ</a>
      <a href="/erate/#/contact" className="topBar">Contact</a>
    </div>
 
    </div>
  );
}

export default Nav;