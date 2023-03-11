import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function WithHeaderStyledExample({ title, ID , Name ,Image}) {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{ID}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;