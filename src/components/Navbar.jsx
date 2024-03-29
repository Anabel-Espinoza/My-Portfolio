import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
         hover:text-yellow transition duration-500`}  
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)')
    const navbarBg = isTopOfPage ? '' : 'bg-pink bg-pink'
    
    return (
        <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'> Ana Espinoza </h4>
                    
                    {/* desktop */}
                    {isAboveSmallScreens ? (
                        <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                            <Link 
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setIsMenuToggled}
                            />
                            <Link 
                                page='Portfolio'
                                selectedPage={selectedPage}
                                setSelectedPage={setIsMenuToggled}
                            />
                            <Link 
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setIsMenuToggled}
                            />
                            <Link 
                                page='Resume'
                                selectedPage={selectedPage}
                                setSelectedPage={setIsMenuToggled}
                            />
                        </div>
                    ) : (
                        <button
                            className='rounded-full bg-pink p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img alt='menu-icon' src='assets/menu-icon.svg'/>
                        </button>
                    )}
                
                {/* Mobile menu */}

                    {!isAboveSmallScreens && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 h-full bg-light-yellow w-[300px]">
                            <div className='flex justify-end p-12'>
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img alt='close-icon' src='assets/close-icon.svg' />
                                </button>
                            </div>

                            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-white'>
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Portfolio"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Resume"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />                            
                            </div>
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default Navbar;
