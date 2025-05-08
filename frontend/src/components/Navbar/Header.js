import React from 'react';
import podcastLogo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return (
      <>
        <div className="Header">
          <div className='header-left'>
            <img alt='podcastlogo' src={podcastLogo} className='logo'/>
            <p className="name">Atria Podcast Club</p>
          </div>
          <div className='Navigation'>
          
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/AbousUs" className="nav-link">About Us</Link>
            <Link to="/Shows" className="nav-link">Shows</Link>
            <Link to="/Engagewithus" className="nav-link">Engage with us</Link>
            <Link to="/AboutUs" className='nav-link'>Contact us</Link>
            
          </div>
         
            
          
        </div>
          <div className="line"></div>
        </>
        
      
    )
}

export default Header;