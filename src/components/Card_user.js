import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from '../components/Modal_user'
import { width } from '@mui/system';
import { left } from 'holderjs';

export default function MultiActionAreaCard({ id, title, type, status, department, year, location, image, category,studentid}) {
  
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="image"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <Col><Row style={{justifyContent: 'center', alignItems: 'center'}}>{title}</Row></Col>
            <Col><Row style={{justifyContent: 'center', alignItems: 'center' ,fontSize:'1rem' , marginTop:'3%'}}>( Item id: {id} )</Row></Col>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Row style={{marginTop:'12%'}}>
              <Col>
                <p style={{fontSize : '11px',textAlign:'left'}}>Category: {category}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px',textAlign:'left'}}>Type: {type}</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p style={{fontSize : '11px',textAlign:'center'}}>Location: {location}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px',textAlign:'left'}}>Department: {department}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{fontSize : '11px' ,width:'200%',textAlign:'left'}}>studentid: {studentid}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>Year: {year}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                 <span className={`Card-status ${status === 'Available' ? 'available' : 'not-available'}`}>{status}</span>
              </Col>
            </Row>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
      </CardActions>
    </Card>
  );
}
