import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
    <nav className='d-flex flex-row'>
        <img src='images\ae-logo.png' alt='logo'/>
        <h2 className='nav--title'>Anabel Espinoza <small className='text-muted'>Web Developer</small></h2>
        <Navigation />
    </nav>
    )
  
}

export default Header;
