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
    const isBigScreen = useMediaQuery({ query: '(min-width: 893px)' })
    const [toggleHamb, setToggleHamb] = useState(false)

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
            <img src='My-Portfolio\images\ae-logo.png' alt='logo'/>
            <h2 className='nav--title'>Anabel Espinoza <small className='text-nowrap light-blue'>Web Developer</small></h2>
            { isBigScreen 
              ? <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
              : <div className="hamburger">
                  <button className="hamburger-btn" type="button" onClick={() => setToggleHamb(!toggleHamb)}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
            }
        </nav>
            { !isBigScreen
              ? <div>{toggleHamb && <Hamburger handlePageChange={handlePageChange}/>}</div>
              : <></>
            }
          {renderPage()}    
    </>  
    )
}

export default Header;
