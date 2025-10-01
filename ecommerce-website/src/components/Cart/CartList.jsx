import { ListGroup, Image, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from "../../CartContext/CartContext";


const CartList = (props) => {
    const cartCtx = useContext(CartContext);
  return (
    <ListGroup variant="flush">
      {props.items.map((item, index) => (
        <ListGroup.Item key={index} className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={item.imageUrl} rounded width={60} height={60} className="me-3" />
            <div>
              <div><strong>{item.title}</strong></div>
              <div>Price: ${item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </div>
          <Button variant="danger" size="sm" onClick={() => cartCtx.removeFromCart(item.title)}>Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CartList;
