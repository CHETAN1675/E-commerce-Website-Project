import { useContext } from "react";
import classes from "./Cart.module.css"
import CartItem from "./CartItem";
import CartContext from "../../CartContext/CartContext";

const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);


  let totalPrice = 0;
  cartCtx.items.map(
    (item) => (totalPrice += Number(item.items.quantity) * Number(item.items.price))
  );

  return (
    <section id="cart" className={classes.container}>
      <h2>CART</h2>
      <button className={classes.cancel} onClick={showCartHandler}>
        X
      </button>
      <div className={classes.cartHeader}>
        <span className={classes.cartItem}>ITEM</span>
        <span className={classes.cartPrice}>PRICE</span>
        <span className={classes.cartQuantity}>QUANTITY</span>
      </div>
      <div>
        <CartItem />
      </div>
      <div>
        <span>
          <span className={classes.totalTitle}>Total</span>
        </span>
        <span className={classes.totalValue}>${totalPrice}</span>
      </div>
      <button className={classes.purchaseBtn} type="button">
        Purchase
      </button>
    </section>
  );
};

export default Cart;