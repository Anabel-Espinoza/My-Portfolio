import SocialMediaIcons from "../hooks/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* Img */}
      <div className="basis-3/5 z-10 mt-12 md:mt-2 flex justify-center md:order-2">
        {isAboveLarge ? (
            <img
              alt="profile"
              className="ml-20 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[340px]"
              src="../assets/IMG_8838.JPG"
            />
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[400px]"
            src="../assets/IMG_8838.JPG"
          />
        )}
      </div>

      {/* Text */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Ana {""}
            <span
                className="bg-gradient-rainbow text-transparent bg-clip-text"
                // xs:relative xs:text-black xs:font-semibold z-20
                // before:absolute before:-left-[25px] before:-top-[110px] before:z-[-1]"  
            >
              Espinoza
            </span>
          </p>

          <p className="mt-20 text-sm text-center md:text-start">
          I'm a junior full-stack developer based in Cumming, GA. After 10 years working in the oilfield 
          services industry, and a gap to grow my family, I decided to start a career in the tech field with the knowledge gained from my <strong>Full-Stack Coding Certificate with the GA Tech.</strong> 
          </p>
          <p className="mt-2 mb-7 text-sm text-center md:text-start"> I love challenges, learning new technologies, and problem solving.
          I am self-motivated and <strong >I'm looking for new challenges and 
          opportunities to grow as a developer.</strong>
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-between w-full max-h-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-white rounded-xl py-3 px-7 font-semibold
              hover:opacity-50 transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <div className="py-3">
            <SocialMediaIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;



// import React from 'react';
// import { useTypewriter, Cursor } from "react-simple-typewriter"

// const AboutMe = () => {
    
//     const { text: tagText } = useTypewriter({
//         words: ["Fullstack Developer", "ReactJS Developer", "MERN Stack"],
//         typeSpeed: 90,
//         loop: false,
//       });

//     return (
//     <div className= 'about d-flex flex-wrap justify-content-center'>
//         <img src='images\IMG_8838.JPG' alt='AnaE' className='about--picture p-4 rounded-3 col-lg-5 col-sm-10'/>
//         <div className='about--text m-5 col-lg-6 col-sm-10'>
//             <div className='box-title my-1'>
//             <h4 className='my-md-6 warm-color'>Hello! I'm Anabel...</h4> 
//             <div className="">
//                 <small class="light-blue">{tagText}</small>
//                 <Cursor cursorStyle="|" />
//             </div>
//             </div>
//             <p className='my--md-6'>
//                 I'm a junior full-stack developer based in Cumming, GA. After 10 years working in the oilfield 
//                 services and a gap to grow my family, I've decided to pursue a career as full stack developer 
//                 with the skills learnt at the GA Tech bootcamp. 
//                 <br />I love challenges, learning new technologies, and problem solving.
//                 I am self-motivated about creating my best work and <strong >I'm looking for new challenges and opportunities to grow as a developer.</strong>
//             </p>
//             <p>
//                 Email me at: <strong><a className="light-blue" href="mailto: anabel.espinoza@gmail.com">anabel.espinoza@gmail.com</a></strong>
//             </p>
//         </div>
//     </div>
//     )
// }

// export default AboutMe;
