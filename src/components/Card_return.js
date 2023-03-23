import React, { useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMedia from '@mui/material/CardMedia';


import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

import {Link,useNavigate} from 'react-router-dom';
import Return from '../components/Return'
import { run as runHolder } from 'holderjs/holder';


function CardDisplay({ id, title, status, type, image, category,borrowdate,returndate }) {
  const [cardTitle, setCardTitle] = useState(title);
  useEffect(() => {runHolder('image-class-name'); });

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
        {/* <Card.Img variant="top" src="holder.js/300x200" style={{ objectFit: 'cover' }} /> */}
        <CardMedia 
          component="img"
          height="300"
          image={imageUrl}
          alt={'No image'}
        />
        
        {/* <Card.Img variant="top" src={image}/> */}
        
        <Card.Title className="Kanit" >{cardTitle}</Card.Title>
        
        {/* <Card.Body className="h1"> */}
        
        <Card.Body className="Roboto-Slab">
            <Row >
              <h5>
                <Col>
                  <p className="Roboto-Slab">ID: {id}</p>
                  <p className="Roboto-Slab">Borrow Date: {borrowdate || '-'}</p>
                  <p className="Roboto-Slab">Return Date: {returndate || '-'}</p>
                </Col>
              </h5>
            </Row>
            
          <Return
            id={id}
            title={title}
            type={type}
            status={status}
            image={imageUrl}
            category={category}
          />
        </Card.Body>
      </Card>
    </Row>
  );
}
export default CardDisplay;
