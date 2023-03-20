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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
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
                <p style={{fontSize : '11px',textAlign:'left'}}>Status: {status}</p>
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
                <p style={{fontSize : '11px',textAlign:'center'}}>Location: {location}</p>
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
