import React, { useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../Styles/Card.css'
// import '../Styles/Borrowing.css'

import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

import {Link,useNavigate} from 'react-router-dom';
import Return from '../components/Return'
import { run as runHolder } from 'holderjs/holder';


function CardDisplay({ id, title, status, type, image, category }) {
  const [cardTitle, setCardTitle] = useState(title);
  useEffect(() => {runHolder('image-class-name'); });

  return (
    <Row style={{ marginLeft: '2%' }}>
      <Card className="card mx-auto">
        <Card.Img variant="top" src="holder.js/300x200" style={{ objectFit: 'cover' }} />
        
        {/* <Card.Img variant="top" src={image}/> */}
        
        <Card.Title className="Kanit" >{cardTitle}</Card.Title>
        
        {/* <Card.Body className="h1"> */}
        
        <Card.Body className="Roboto-Slab">
            <Row >
              <h5>
                <Col>
                  <p className="Roboto-Slab">ID: {id}</p>
                  <p className="Roboto-Slab">Category: {category}</p>
                  <p className="Roboto-Slab">Type: {type}</p>
                  {/* <p className="Roboto-Slab">Type: {type}</p> */}

                </Col>
              </h5>
            </Row>
            
          <Return
            id={id}
            title={title}
            type={type}
            status={status}
            image={image}
            category={category}
          />
        </Card.Body>
      </Card>
    </Row>
  );
}
export default CardDisplay;
