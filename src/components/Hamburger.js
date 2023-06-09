import React from "react";

const Hamburger = ({ handlePageChange }) => {
    return (
    // <div className="hamburger-menu">
    //     <div className="bg-light m-auto">
    //         <div className="container-fluid p-auto">
    //             <button className="navbar-toggler ms-auto" type="button" data-mdb-toggle="collapse"
    //             data-mdb-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent3"
    //             aria-expanded="false" aria-label="Toggle navigation">
    //             <i className="fas fa-bars"></i>
    //             </button>
    //         </div>
    //     </div>
    //     <div className="collapse" id="navbarToggleExternalContent3">
            <div className="hamburger-list bg-light shadow-3 p-4">
                <li className="text-center m-0" href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</li>
                <li className="text-center m-0" href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</li>
                <li className="text-center m-0" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</li>
                <li className="text-center m-0" href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</li>
            </div>
    //     </div>
    // </div>
    )
}

// Hamburger Menu code: https://mdbootstrap.com/docs/standard/extended/hamburger-menu/
export default Hamburger