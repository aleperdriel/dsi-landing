import logo from '../assets/img/dsi-logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="logo-container">
                        <Link to="/">
                        <img className="logo" src={logo} alt="Down syndrome international logo"/></Link></li>
                    <li><Link to="/">Quiz</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/about">Learn More</Link></li>
                    <li><Link to="/associations">Associations</Link></li>
                </ul>
            </nav>
        
        </header>
    )
}

export default Header;