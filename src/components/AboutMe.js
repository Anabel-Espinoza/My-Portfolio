import React from 'react';

const AboutMe = () => {
    return (
    <div className= 'about d-flex flex-wrap'>
        <img src='images\IMG_8838.jpg' alt='my-picture' className='about--picture p-4 rounded-3 col-lg-5 col-md-10 offset-md-2 offset-sm-0'/>
        <div className='m-5 col-lg-5 col-md-10'>
            <h4 className='my-4'>Hello! I'm Anabel...</h4>
            <p className='my-4'>
                I'm a junior full-stack developer based in Cumming, GA. After 10 years working in the oilfield 
                services and a gap to grow my family, I've decided to pursue a career as full stack developer 
                with the skills learnt at the GA Tech bootcamp. 
                <br /><strong >I love challenges, learning new technologies, and problem solving.</strong>
            </p>
            <p>
                Email me at: <strong><a href="mailto: anabel.espinoza@gmail.com">anabel.espinoza@gmail.com</a></strong>
            </p>
        </div>
    </div>
    )
}

export default AboutMe;
