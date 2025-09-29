import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
