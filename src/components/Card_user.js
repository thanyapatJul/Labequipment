import React, { useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMedia from '@mui/material/CardMedia';

import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

import { run as runHolder } from 'holderjs/holder';

function CardDisplay({ id, title, type, status, returndate,department, year, location, image, category,studentid}) {
  
// convert base 64 to url
  const byteCharacters = atob(image);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: 'image/jpeg'});
  const imageUrl = URL.createObjectURL(blob);




  return (
    <Row style={{ marginLeft: '2%' }}>
      <Card className="card mx-auto">
        
        <CardMedia 
          component="img"
          height="300"
          image={imageUrl}
          alt={'No image'}
        />
        
        {/* <Card.Img variant="top" src={image}/> */}
        
        <Card.Title className="Kanit" >{title}</Card.Title>
        
        {/* <Card.Body className="h1"> */}
        
        <Card.Body className="Roboto-Slab">
            <Row >
              <h5>
                <Col>
                  <p className="Roboto-Slab">ID: {id}</p>
                  <p className="Roboto-Slab">Location: {location || '-'}</p>
                  <p className="Roboto-Slab">Studentid: {studentid || '-'}</p>
                  <p className="Roboto-Slab">Return Date: {returndate || '-'}</p>
                  <p>{"👇"}</p>
                  <span className={`Card-status ${status === 'Available' ? 'available' : 'not-available'}`}>{status}</span>
                </Col>
              </h5>
            </Row>
          {/* ส่งไปที่ Modal_Modal*/}
          {/* <Modal 
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
          </Modal> */}
        </Card.Body>
      </Card>
    </Row>
  );
}
export default CardDisplay;