import React, { useState } from 'react'
import Navigation from './Navigation'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Hamburger from './Hamburger'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const isBigScreen = useMediaQuery({ query: '(min-width: 993px)' })

    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />
      }
      if (currentPage === 'Contact') {
          return <Contact />
      }
      if (currentPage === 'Resume') {
        return <Resume />
    }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
    <>
        <nav className='d-flex flex-row'>
            <img src='images\ae-logo.png' alt='logo'/>
            <h2 className='nav--title'>Anabel Espinoza <small className='light-blue'>Web Developer</small></h2>
            { isBigScreen 
              ? <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
              : <Hamburger handlePageChange={handlePageChange}/>
            }
        </nav>
            {renderPage()}    
    </>  
    )
}

export default Header;
