import React , {useEffect, useState} from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
    const [year, setYear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear)

  }, []); // Empty dependency array ensures this effect runs only once on mount
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='' width="120px" />
                 
            
                    {/* <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                    </div> */}
                </div>
                <div className='footer-content-center'>
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>0736528998</li>
                        <li>example@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright {year} Tso's Treats - All Rights Reserved </p>
        </div>
    )
}

export default Footer
