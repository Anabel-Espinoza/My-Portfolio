import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <div className='d-flex nav--list nav'>
            <a 
                    href="#AboutMe" onClick={() => handlePageChange('AboutMe')} 
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
            <a 
                href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio
            </a> 
                
            <a 
                href="#Contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                >Contact
            </a>
            
            <a 
                href="#Resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                >Resume
            </a>
        </div>
    )
}

export default Navigation;
