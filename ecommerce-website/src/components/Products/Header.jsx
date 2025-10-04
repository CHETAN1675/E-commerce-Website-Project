import { Button } from 'react-bootstrap';
import { useState,useContext } from 'react';
import {Link} from "react-router-dom";
import CartContext from '../../CartContext/CartContext';
import CartIcon from "../Cart/CartIcon"
import classes from "./Header.module.css"
import Cart from '../Cart/Cart';
import AuthContext from "../../CartContext/AuthContext"

const Header = () => {
  const [showCart, setShowCart] = useState(false);

    const logoutHandler = () => {
    authCtx.logout();
  };

  const showCartHandler=()=>{
setShowCart(!showCart);
  }
    const cartCtx = useContext(CartContext);
     const authCtx = useContext(AuthContext);

     let totalItems =0;
     cartCtx.items.map((item)=>(totalItems+=item.quantity));

  return (
        <div>
      <header className={classes.header}>
        <div className={classes.link}>
          <Link to="/">Home</Link>
        </div>
        <div className={classes.link}>
          <Link to="/store">Store</Link>
        </div>
        <div className={classes.link}>
          <Link to="/about">About</Link>
        </div>
         {!authCtx.isLoggedIn && (
          <div className="links">
            <Link to="/login">Login</Link>
          </div>
        )}
         <div className="links">
          <Link to="/contact-us">Contact Us</Link>
        </div>
 {authCtx.isLoggedIn && (
          <div className="links">
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </div>
            )}
            {authCtx.isLoggedIn && (
        <Button className={classes.cartHolder} onClick={showCartHandler}>
          <CartIcon style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          Cart ({totalItems})
        </Button>
            )}
            
        {showCart && <Cart showCartHandler={showCartHandler} />}
      </header>
      <h1 className={classes.banner}>The Generics</h1>
    </div>
  );
};

export default Header;


