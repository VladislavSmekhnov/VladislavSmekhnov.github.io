import React from 'react'
import './FooterStyles.css'
import { FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acme st.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem'}} />+7-999-374-07-83</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem'}} />example@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus erat, 
                    auctor quis molestie vel, consectetur nec risus. Nunc sollicitudin nulla 
                    id metus imperdiet maximus. Phasellus eget felis massa. Integer quis 
                    cursus nulla. Duis pulvinar justo lorem, a tempus odio euismod a. 
                    In vestibulum condimentum metus rhoncus gravida. Cras imperdiet porta libero,
                     a convallis odio. Nam hendrerit sodales orci id sollicitudin.
                </p>
                <div className='social'>
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1em'}} />
                    <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer