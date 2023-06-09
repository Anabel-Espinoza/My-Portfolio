import React from 'react';

const AboutMe = () => {
    return (
    <div className= 'about d-flex flex-wrap align-items-center'>
        <img src='images\IMG_8838.jpg' alt='my-picture' className='about--picture p-4 rounded-3 col-lg-5 col-md-6 mx-auto'/>
        <div className='about--text m-5 col-lg-6 col-md-6'>
            <h4 className='my-4 warm-color'>Hello! I'm Anabel...</h4>
            <p className='my-4'>
                I'm a junior full-stack developer based in Cumming, GA. After 10 years working in the oilfield 
                services and a gap to grow my family, I've decided to pursue a career as full stack developer 
                with the skills learnt at the GA Tech bootcamp. 
                <br />I love challenges, learning new technologies, and problem solving.
                I am self-motivated about creating my best work and <strong >I am always looking for new challenges and opportunities to grow as a developer.</strong>
            </p>
            <p>
                Email me at: <strong><a className="light-blue" href="mailto: anabel.espinoza@gmail.com">anabel.espinoza@gmail.com</a></strong>
            </p>
        </div>
    </div>
    )
}

export default AboutMe;
