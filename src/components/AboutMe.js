import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter"

const AboutMe = () => {
    
    const { text: tagText } = useTypewriter({
        words: ["Fullstack Developer", "ReactJS Developer", "MERN Stack"],
        typeSpeed: 90,
        loop: false,
      });

    return (
    <div className= 'about d-flex flex-wrap justify-content-center'>
        <img src='images\IMG_8838.JPG' alt='AnaE' className='about--picture p-4 rounded-3 col-lg-5 col-sm-10'/>
        <div className='about--text m-5 col-lg-6 col-sm-10'>
            <div className='box-title my-1'>
            <h4 className='my-md-6 warm-color'>Hello! I'm Anabel...</h4> 
            <div className="">
                <small class="light-blue">{tagText}</small>
                <Cursor cursorStyle="|" />
            </div>
            </div>
            <p className='my--md-6'>
                I'm a junior full-stack developer based in Cumming, GA. After 10 years working in the oilfield 
                services and a gap to grow my family, I've decided to pursue a career as full stack developer 
                with the skills learnt at the GA Tech bootcamp. 
                <br />I love challenges, learning new technologies, and problem solving.
                I am self-motivated about creating my best work and <strong >I'm looking for new challenges and opportunities to grow as a developer.</strong>
            </p>
            <p>
                Email me at: <strong><a className="light-blue" href="mailto: anabel.espinoza@gmail.com">anabel.espinoza@gmail.com</a></strong>
            </p>
        </div>
    </div>
    )
}

export default AboutMe;
