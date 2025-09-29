import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <Container fluid className="py-4">
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Products</h1>
      <Row className="g-4 justify-content-center">
        {productsArr.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={product.imageUrl} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-center">{product.title}</Card.Title>
                  <Card.Text className="text-center">${product.price}</Card.Text>
                </div>
                <Button variant="primary" style={{ width: '100%' }}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
