import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Props(props) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="shadow-sm">
      <Card.Img
        variant="top"
        src={props.img}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <Card.Body className="p-3">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Props;
