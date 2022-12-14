import logo from '../assets/img/dsi-logo.png'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <footer>
            <div className="footer-upper">
                <img id="logo" src={logo} alt="DSI logo"></img>
                <div>
                    <p>Contact us at</p>
                    <p>Down Syndrome International</p>
                    <p>7-9 Chapel Street, Exmouth, Devon,</p>
                    <p>EX8 1HR, United Kingdom</p>
                    <p>+44 (0)1395 493108</p>
                    <p>contact@ds-int.org</p>
                </div>
            </div>
            <div className="footer-lower">
                <ul className="footer-links">
                    <li><Link to="/">Sitemap</Link></li>
                    <li><Link to="/">Accessibility</Link></li>
                    <li><Link to="/">Terms & Conditions</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                </ul>
                <ul className="socials-container">
                    <li><Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2020 Down Syndrome International.UK Registered Charity no. 1091843.</p>
            </div>
        
        </footer>
    )
}

export default Footer;
