import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <div className='d-flex nav--list nav '>
            <li className='nav-item is-active'>
                <a 
                    href="#AboutMe" onClick={() => handlePageChange('AboutMe')} 
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                    About Me
                </a>
            </li>
            
            <li className='nav nav-item'>
                <a 
                    href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio
                </a> 
            </li>

            <li className='nav nav-item'>
                <a 
                    href="#Contact" onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                    >Contact
                </a>
            </li>

            <li className='nav nav-item'>
                <a 
                    href="#Resume" onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                    >Resume
                </a>
            </li>
        </div>
    )
}

export default Navigation;
