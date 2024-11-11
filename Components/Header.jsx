import React , {useState}from 'react'
import { Link } from 'react-scroll'
import brandLogo from '../src/assets/Massive plus horizontal png.png'
import MenuLogo from '../src/assets/menu_icon.svg'
import CloseLogo from  '../src/assets/close-circle-svgrepo-com.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
        <img src={brandLogo} alt="" />
        <div className="menuIconDiv" onClick={()=>setIsMenuOpen(true)}>
            <img src={MenuLogo} alt="" srcSet="" className='menuIcon' />
        </div>
        <nav className = {isMenuOpen ? "nav open" : "nav"}>
            <img src={CloseLogo} alt="" srcSet="" className='closeIcon' onClick={()=>setIsMenuOpen(false)}/>
            <ul>
            <li><Link to="home" smooth={true} duration={500} offset={-70}  activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)}   >Home</Link>
            </li>
            <li><Link to="about" smooth={true} duration={500} activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)}>About</Link>
            </li>
            <li><Link to="services" smooth={true} duration={500}  activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)}>Services</Link>
            </li>
            <li><Link to="portfolio" smooth={true} duration= {500} activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)} >Portfolio</Link>
            </li>
            <li><Link to="skills" smooth={true} duration={500} activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)}  >Skills</Link>
            </li>
            <li><Link to="contact" smooth={true} duration={500} activeClass="active"
              spy={true} onClick={()=>setIsMenuOpen(false)}  >Contact</Link>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
