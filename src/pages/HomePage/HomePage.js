import React, { useState } from 'react';
import "./HomePage.css";
import Header from '../../components/Header/Header.js'

function HomePage() {
    const [title, setTitle] = useState("");

    const height = document.innerHeight;

    function handleScroll() {
        if(window.pageYOffset > 5*height-300) {
            setTitle("Powerwall");
        }
    }
  return (
      <div>
          <Header />
      </div>
  );
}

export default HomePage;
