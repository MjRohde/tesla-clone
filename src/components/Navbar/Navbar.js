import React from 'react';
import "./Navbar.css";

function Navbar() {

  const prop = window.location.pathname.split('/')[1];
  const homepage = prop === '';
  return (
    <div className="navbar" style={{position: homepage ? "fixed" : "absolute"}}>
    <div className="top-left">
    <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png" alt=""/>
  </div>
  <div className="center">
      <a href='/models/s'>Model S</a>
      <a href='/models/3'>Model 3</a>
      <a href='/models/x'>Model X</a>
      <a href='/models/y'>Model Y</a>
      <a href='/powerwall'>Powerwall</a>
      <a href='/charging'>Charging</a>
  </div>
  <div className="top-right">
    <a href='/'>Support</a>
    <a href='/'>Shop</a>
    <a href='/'>Account</a>
    <a href='/'>Menu</a>
  </div>
  </div>
  );
}

export default Navbar;
