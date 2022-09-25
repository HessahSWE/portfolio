import React from "react";
const Navbar = () =>{
  return (
    <div className="n-wrapper">
      <div className="n-left">
      <div className="n-name">Hessah</div>
      <span>toggle</span>
      </div>
      <div className="n-right"></div>
      <div className="n-list">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
      </ul>
    </div> 
    <button className="button">Contact Us</button>
    </div>
  )
}
export default Navbar;