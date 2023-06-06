import React, { useState } from 'react';

const AboutMe = () => {
    return (
    <div class= 'd-flex'>
        <img src='images\IMG_8838.jpg' alt='my-picture' width='200px' class='m-5 rounded'/>
        <div class='m-5'>
            <h4 class='my-4'>Hello! I'm Anabel...</h4>
            <p class='my-4'>
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
