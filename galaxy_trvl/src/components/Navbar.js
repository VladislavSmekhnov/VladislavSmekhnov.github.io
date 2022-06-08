import React, {useState} from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var lastScrollTop; // This Varibale will store the top position
    var navbar = document.getElementById('navbar1'); // Get The NavBar

    const hideNavbar = () => {
        //on every scroll this funtion will be called

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //This line will get the location on scroll
        
        if(scrollTop > lastScrollTop){ //if it will be greater than the previous
            navbar.style.top='-80px';
            //set the value to the negetive of height of navbar 
        }
        else{
            navbar.style.top='0';
        }
        
        lastScrollTop = scrollTop; //New Position Stored
    }

    window.addEventListener('scroll', hideNavbar)
    window.addEventListener('scroll', changeColor)

  return (
    <div id='navbar1' className={color ? 'header header-bg' : 'header'}>
        <Link to='/'><h1>GLX TRVL</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to='/training'>Training</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
        </div>
    </div>
  )
}

export default Navbar