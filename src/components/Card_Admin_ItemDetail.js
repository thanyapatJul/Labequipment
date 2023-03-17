import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css'
import ItemDetail from '../components/Admin_ItemDetail'

function CardDisplay({ id, title, type, status, department, year, location, image, category,studentid ,ReturnDate}) {
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
            <p>Student ID: {studentid}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Status: {status}</p>
          </Col>
          <Col>
            <p>Deparment / Major: {department}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Available On : {ReturnDate}</p>
          </Col>
          <Col>
            <p>Year: {year}</p>
          </Col>
        </Row>
        <ItemDetail     
              id={id}
              title={title}
              type={type}
              status={status}
              department={department}
              year={year}
              location={location}
              image={image}
              category={category}
              studentid={studentid}
              >
        </ItemDetail>
      </Card.Body>
    </Card>
  );
}
export default CardDisplay;
 