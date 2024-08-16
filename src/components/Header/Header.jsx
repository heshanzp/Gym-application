import React from "react";
import './Header.css';
import Logo from '../../assets/logo.png';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="logo" />
            
            {/* Menu text removed since menuOpened state is gone */}
            
            <ul className="header-menu">
                <li>
                    <Link
                      activeClass="active"
                      to="header"
                      spy={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                </li>
                <li>
                    <Link
                      to="programs"
                      spy={true}
                      smooth={true}
                    >
                      Programs
                    </Link>
                </li>
                <li>
                    <Link
                      to="reasons"
                      spy={true}
                      smooth={true}
                    >
                      Reasons
                    </Link>
                </li>
                <li>
                    <Link
                      to="plans"
                      spy={true}
                      smooth={true}
                    >
                      Plans
                    </Link>
                </li>
                <li>
                    <Link
                      to="Testimonials"
                      spy={true}
                      smooth={true}
                    >
                      Testimonials
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
