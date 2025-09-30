import { ListGroup, Image, Button } from 'react-bootstrap';
import Cart from './Cart';

const CartList = ({ items = [] }) => {
  return (
    <ListGroup variant="flush">
      {items.map((item, index) => (
        <ListGroup.Item key={index} className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={item.imageUrl} rounded width={60} height={60} className="me-3" />
            <div>
              <div><strong>{item.title}</strong></div>
              <div>Price: ${item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </div>
          <Button variant="danger" size="sm">Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CartList;