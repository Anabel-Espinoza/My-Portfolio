import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
    <nav class='d-flex flex-row'>
        <img src='images\ae-logo.png' alt='logo'/>
        <h2 class='nav--title'>Anabel Espinoza <small class='text-muted'>Web Developer</small></h2>
        <Navigation />
    </nav>
    )
  
}

export default Header;
