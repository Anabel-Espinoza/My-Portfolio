import React from "react";

const Hamburger = ({ handlePageChange }) => {
    return (
            <div className="hamburger-list bg-light shadow-3 p-4">
                <li className="hamb-link text-center navy border-bottom m-0" href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</li>
                <li className="hamb-link text-center navy border-bottom m-0" href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</li>
                <li className="hamb-link text-center navy border-bottom m-0" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</li>
                <li className="hamb-link text-center navy m-0" href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</li>
            </div>
    )
}

export default Hamburger