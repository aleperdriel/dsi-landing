import logo from '../assets/img/dsi-logo.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Header() {

    let activeNavlink = 'active-navlink';

    return(
        <header>
            <nav>
                <ul>
                    <li className="logo-container">
                        <NavLink end to="/">
                        <img className="logo" src={logo} alt="Down syndrome international logo"/></NavLink></li>
                        <li><NavLink to="/" className={({ isActive }) =>
              isActive ? activeNavlink : undefined}>Quiz</NavLink></li>
                        <li><NavLink to="/news" className={({ isActive }) =>
              isActive ? activeNavlink : undefined}>News</NavLink></li>
                        <li><NavLink to="/donate" className={({ isActive }) =>
              isActive ? activeNavlink : undefined}>Donate</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) =>
              isActive ? activeNavlink : undefined}>Learn More</NavLink></li>
                        <li><NavLink to="/associations" className={({ isActive }) =>
              isActive ? activeNavlink : undefined}>Associations</NavLink></li>
                </ul>
            </nav>
        
        </header>
    )
}

export default Header;