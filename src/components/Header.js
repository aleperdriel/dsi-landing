import logo from '../assets/img/dsi-logo.png';

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="logo-container"><a href="#"><img className="logo" src={logo} alt="Down syndrom international logo"></img></a></li>
                    <li><a href="#">Lorem Ipsu</a></li>
                    <li><a href="#">Lorem Ip</a></li>
                    <li><a href="#">Lorem Ips</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                </ul>
            </nav>
        
        </header>
    )
}

export default Header;