import React, { useState } from 'react';

const Navigation = () => {
    return (
        <div className='d-flex'>
            <a className='nav-item' href="#">About Me</a>
            <a className='nav-item' href="#">Portfolio</a>
            <a className='nav-item' href="#">Contact</a>
            <a className='nav-item' href="#">Resume</a>
        </div>
    )
}

export default Navigation;
