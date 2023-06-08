import React from "react";

const Hamburger = (handlePageChange) => {
    return (
    <div className="hamburger-menu">
        <nav className="bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler ms-auto" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent3"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
            </button>
        </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent3">
        <div className="bg-light shadow-3 p-4">
            <button className="btn btn-link btn-block border-bottom m-0" href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</button>
            <button className="btn btn-link btn-block border-bottom m-0" href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</button>
            <button className="btn btn-link btn-block border-bottom m-0" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</button>
            <button className="btn btn-link btn-block m-0" href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</button>
        </div>
        </div>
    </div>
    )
}

// Hamburger Menu code: https://mdbootstrap.com/docs/standard/extended/hamburger-menu/
export default Hamburger