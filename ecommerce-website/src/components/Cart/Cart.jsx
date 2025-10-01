
import { Modal, Button } from 'react-bootstrap';
import CartList from './CartList';
import { useContext } from 'react';
import CartContext from "../../CartContext/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal show={props.show} onHide={props.handleClose} centered >
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartList items={cartCtx.cartItems} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
