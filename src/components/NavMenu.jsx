import { Link, NavLink } from "react-router";
import { NavigatorWrapper } from "../Style/NavigatorWrapper";
import Logo from './Logo';
const navLinks = ["Home", "Products"]

const NavMenu = () => {
    return (
        <NavigatorWrapper>
            <nav>
                <div className="nav-left">
                        <Link to="/">
                           <Logo 
         width="100" 
         height="40" 
         className="my-svg"
       />
                        </Link>
                    <ul className="nav-links">
                        {navLinks.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                    >{link}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="nav-right">
                  <b>LOGO</b>
                </div>
            </nav>
        </NavigatorWrapper>
    );
};

export default NavMenu;
