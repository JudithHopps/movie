import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
  
  return (
    
    <Link to="/">
    <div className="nav">
      
      <img src='./mainyouflex.JPG' width= "200px" alt="Home" />
      
    </div></Link>
  );
}

export default Navigation;