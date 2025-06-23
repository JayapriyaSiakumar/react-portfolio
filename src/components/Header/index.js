import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Header = ()=>{
    const [toggleMenu, setToggleMenu]  = useState(false);
     const [activeLink, setActiveLink] = useState('home');

    return(
        <header className="flex justify-between px-6 p-6 bg-primary">
            <a className="font-bold text-2xl text-white uppercase " href="#"><span className='letter-j'>J</span>ayapriya</a>
            <nav  className="hidden md:block">
                <ul className="flex text-white font-bold">
                    <li><a href="#" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</a></li>
                    <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>About</a></li>
                    <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>Skills</a></li>
                    <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact Me</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden ">
               <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col  font-bold text-white  mobile-nav">
                    <li><a href="#" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</a></li>
                    <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>About</a></li>
                    <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>Skills</a></li>
                    <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact Me</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-white h-5'/>
            </button>
        </header>
    )
}

export default Header