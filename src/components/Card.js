import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css'
function CardDisplay({ id, title, type, status, department, year, location, image, category,studentid }) {
  const [cardTitle, setCardTitle] = useState(title);

  const handleClick = () => {
    setCardTitle('New Title');
  };

  return (
    <Card style={{ width: '25rem'  }}>
      <Card.Img variant="top" src={image} />
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Body>
        <Row>
          <Col>
            <p>ID: {id}</p>
          </Col>
          <Col>
            <p>Category: {category}</p>
          </Col>
          <Col>
            <p>Type: {type}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Status: {status}</p>
          </Col>
          <Col>
            <p>Department: {department}</p>
          </Col>
          <Col>
            <p>Year: {year}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Location: {location}</p>
          </Col>
          <Col>
            <p>studentid : {studentid}</p>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClick}>
          Borrow
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardDisplay;
