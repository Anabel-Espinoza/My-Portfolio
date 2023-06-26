import React from 'react';

const Footer = () => {
    return (
        <footer className='footer p-6 d-flex justify-content-center w-100'>
            <a className="footer--link mx-4 my-auto" href="mailto: anabel.espinoza@gmail.com"> <img src="My-Portfolio\./images/emailpng.png" alt="mail logo" width='30px'/></a>
            <a className="footer--link mx-4 my-auto" href="https://github.com/Anabel-Espinoza" target="_blank"><img src="My-Portfolio\./images/github-mark.png" alt="github logo" width='30px'/></a>
            <a className= "footer--link mx-4 my-auto" href="https://www.linkedin.com/in/anabel-espinoza-95b4b5264/" target="_blank"><img src="My-Portfolio\./images/LI-In-Bug.png" alt="linkedin logo" width='30px'/></a>
        </footer>
    )
}

export default Footer;
