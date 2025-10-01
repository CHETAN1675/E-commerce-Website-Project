import { Navbar, Nav, Container,Button,Badge } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../CartContext/CartContext';

const Header = (props) => {
    const cartCtx = useContext(CartContext);
  return (
    <Navbar bg="warning" variant="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Shop with E-comm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontWeight: 500 }}>Home</Nav.Link>
            <Nav.Link href="/store" style={{ fontWeight: 500 }}>Store</Nav.Link>
            <Nav.Link href="/about" style={{ fontWeight: 500 }}>About</Nav.Link>
          </Nav>
           <Button onClick ={props.onCartClick} variant="dark"  className='ms-3'>Cart <Badge bg="light" text="dark">{cartCtx.totalItems}</Badge></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;