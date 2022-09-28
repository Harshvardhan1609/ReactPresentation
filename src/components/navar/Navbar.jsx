import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import './NavbarStyles.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>ReactJS</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true} duration={500}>Introduction</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true} duration={500}>Why React ?</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true} duration={500}>UseCases</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={500}>Angular v/s React</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="music" spy={true} smooth={true} duration={500}>Music Player</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="tv" spy={true} smooth={true} duration={500}>Helix TV</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="mody" spy={true} smooth={true} duration={500}>Mody CP</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Disadvantages</Link></a></li>

                    <div className='mobile-menu'>
                        <a href="https://github.com/Harshvardhan1609"target={"_blank"} rel={"noreferrer"}><button>Repository Link</button></a>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' />
                        </div>
                    </div>

                </ul>

                <ul className='nav-menu hide'>
                    <li><a href="https://github.com/Harshvardhan1609"target={"_blank"} rel={"noreferrer"}>Repository Link</a></li>
                </ul>

                <div className="hamburger" onClick={handleNav} >
                    {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
                </div>

            </div>
        </div>
    )
}

export default Navbar
