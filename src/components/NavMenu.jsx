import { Link, NavLink } from "react-router";
import { NavigatorWrapper } from "../Style/NavigatorWrapper";
import Logo from './Logo';
import { getQuantity} from '../store/CartSlice'
import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge';
import Cart from '../icons/Cart';

const navLinks = ["Home", "Products"]

const NavMenu = () => {
const cartQuantity = useSelector(state => getQuantity(state.cart, null));

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
          {cartQuantity > 0 ? ( 
             <NavLink to="/products/cart">
            <button 
            className="bg-transparent">
             
              <Cart className="mt-10" />
              {cartQuantity > 0 && (
                <Badge bg="danger">{cartQuantity}</Badge>
              )}
              </button>
              </NavLink>
           ) : ( <button 
            className="bg-transparent">
              <Cart  className="mt-10" />
          </button> )}
           
        </div>
            </nav>
        </NavigatorWrapper>
    );
};

export default NavMenu;
