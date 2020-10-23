// Import dependencies
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Homepage() {

  // Animations on render
  useEffect(() => {
    gsap.from(".slide", {
      opacity: 0,
      scale: 0,
      duration: 1
    });

    gsap.from(".layer-1", {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1
    });

    gsap.from(".layer-2", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 2
    });
  })
  
  return (
    <div>
      <div id="slider">
        <div className="slide" style={{backgroundImage: "url(https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"}}>
          <div className="layer-1">
            <h2>Welcome to AirBnB App</h2>
            <h3>We help you find the best deals for your stay</h3>
          </div>

          <div className="layer-2">
            <Link to="/listings">Check Listings</Link>
            <a href="https://vigorous-hypatia-247fe3.netlify.app/about.html" target="_blank" rel="noopener noreferrer">Mee the crew</a>
          </div>
        </div>
      </div>
    </div>
  )
}
