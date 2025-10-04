import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../CartContext/CartContext";

const CartItem = () => {
  const cartCtx = useContext(CartContext);

  const removeItemFromCart = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div>
      {cartCtx.items.map((item) => (
        <div className={classes.cartItems} key={item._id}>
          <div className={classes.cartItemName}>
            <img src={item.items.imageUrl} alt={item.title} className={classes.image} />
            <span className={classes.title}>{item.title}</span>
          </div>
          <div className={classes.cartItemsPrice}>${item.items.price}</div>
          <div className={classes.cartItemsQuantity}>
            <input
              type="number"
              value={item.items.quantity}
              readOnly
              className={classes.quantityInput}
            />
            <button
              onClick={() => removeItemFromCart(item._id)}
              className={classes.removeButton}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
