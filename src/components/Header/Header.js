import React, { useState, useEffect, useRef } from 'react';
import "./Header.css";

function Header() {
  const [title, setTitle] = useState("Model Y")
  const [titleDesc, setTitleDesc] = useState("");
  const [linkDesc, setLinkDesc] = useState("");
  const [blackButtonText, setBlackButtonText] = useState("Custom Order");
  const [whiteButtonText, setWhiteButtonText] = useState("Existing Inventory"); 
  const [pwButton, setPwButton] = useState("")
  const [end, setEnd] = useState(false);
  const [endButtons, setEndButtons] = useState(false);


  const height = window.innerHeight;

  function handleScroll() {
    if(window.pageYOffset > (height-200) && window.pageYOffset < (2*height - 200)) {
      setTitle('Model 3');
      setTitleDesc('Order Online for ')
      setLinkDesc('Touchless Delivery')
      setBlackButtonText('Custom Order')
      setWhiteButtonText('Existing Inventory')
      setEnd(false)
    } else if(window.pageYOffset > (2*height - 300) && window.pageYOffset < (3*height - 200)){
        setTitle('Model S')
        setTitleDesc('Order Online for ')
        setLinkDesc('Touchless Delivery')
        setBlackButtonText('Custom Order')
        setWhiteButtonText('Existing Inventory')
        setEnd(false)
    }else if(window.pageYOffset > (3*height - 300) && window.pageYOffset < (4*height - 200)) {
        setTitle('Model X')
        setTitleDesc('')
        setLinkDesc('')
        setBlackButtonText('Custom Order')
        setWhiteButtonText('Existing Inventory')
        setEnd(false)
        setEndButtons(false)
        setPwButton("")
    }else if(window.pageYOffset > (4*height - 300) && window.pageYOffset < (5*height - 200)){
        setTitle('Powerwall')
        setTitleDesc('Power to all')
        setBlackButtonText('')
        setWhiteButtonText('')
        setBlackButtonText('')
        setWhiteButtonText('')
        setEndButtons(true);
        setPwButton("Read More")
    }else if(window.pageYOffset < height){
      setTitle('Model Y')
      setTitleDesc('');
      setLinkDesc('');
      setBlackButtonText('Custom Order')
      setWhiteButtonText('Existing Inventory')
      setEnd(false);
      setEndButtons(false);
      setPwButton("");
    } else if (window.pageYOffset > (5*height-400)){
      setEndButtons(true);
      setPwButton("Buy now")
      setTitleDesc('');
      setTitle("Extra Equipment");
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[height])

  return (
      <div className='header'>
        
          <div className='headerModelY'>
          <div className={end ? null : 'title'}>
            <h1>{title}</h1>
            <p>{titleDesc}<a className='tD'>{linkDesc}</a></p>
          </div>
          
          <div className= {end ? null : 'buttons'}>
            <a className={endButtons ? null : 'btn-black'}>{blackButtonText}</a>
            <a className={endButtons ? null : 'btn-white'}>{whiteButtonText}</a>
            <a className={endButtons ? 'btn-black' : null}>{pwButton}</a>
          </div>
        </div>

        <div className='headerModel3' />
        <div className='headerModelS' />
        <div className='headerModelX' />
        <div className='powerwall'/> 
        <div className='equipment'/>
        
      </div>
  );
}

export default Header;
