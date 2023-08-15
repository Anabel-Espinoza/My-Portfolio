import { useState, useEffect } from 'react'
import useMediaQuery from './hooks/useMediaQuery';
import LineGradient from './hooks/LineGradient'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import DotGroup from './components/DotGroup'
import Landing from './components/Landing'
import Porfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage= {selectedPage}
        setSelectedPage= {setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("portfolio")}
        >
          <Porfolio />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("resume")}
        >
          <Resume />
        </motion.div>
      </div>


    </div>
    
  );
}

export default App;
