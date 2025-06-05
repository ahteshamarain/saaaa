import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductComponent() {
  const products = [
    {
      id: 1,
      pname: 'Product 1',
      pprice: '$12',
      img: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
    },
    {
      id: 2,
      pname: 'Product 2',
      pprice: '$20',
      img: 'https://thumbs.dreamstime.com/b/celebrating-mother-earth-day-imagine-surreal-scene-where-colorful-radiant-enveloped-lush-nature-pristine-air-water-355597121.jpg'
    },
    {
      id: 3,
      pname: 'Product 3',
      pprice: '$15',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s'
    },
    {
      id: 4,
      pname: 'Product 4',
      pprice: '$18',
      img: 'https://t4.ftcdn.net/jpg/09/26/54/37/360_F_926543705_dhMCOKqcJkcI5j1nF5gX1nvLbn374BHv.jpg'
    }
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>{product.pname}</Card.Title>
                <Card.Text>{product.pprice}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductComponent;
