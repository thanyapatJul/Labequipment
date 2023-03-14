import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css'
import {Link,useNavigate} from 'react-router-dom';
import Return from '../components/Return'

function CardDisplay({ id, title, status, type, image, category }) {
  const [cardTitle, setCardTitle] = useState(title);

  return (
    <Card style={{ width: '21rem'  }}>
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
        <Return 
              id={id}
              title={title}
              type={type}
              status ={status}
              image={image}
              category={category}
              >
        </Return>
      </Card.Body>
    </Card>
  );
}
export default CardDisplay;
