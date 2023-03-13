import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css'
import {Link,useNavigate} from 'react-router-dom';
import Modal from '../components/Modal'
function CardDisplay({ id, title, type, status, department, year, location, image, category,studentid }) {
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
        <Modal 
              id={id}
              title={title}
              type={type}
              status={status}
              department={department}
              year={year}
              location={location}
              image={image}
              category={category}
              studentid={studentid}>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default CardDisplay;
