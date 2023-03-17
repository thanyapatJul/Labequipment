import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from '../components/Modal'
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
          <Typography gutterBottom variant="h5" component="div">
            {title} ( id: {id} )
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Row>
              <Col>
                <p style={{fontSize : '11px'}}>ID: {id}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>Category: {category}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>Type: {type}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{fontSize : '11px'}}>Status: {status}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>Department: {department}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>Year: {year}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{fontSize : '11px'}}>Location: {location}</p>
              </Col>
              <Col>
                <p style={{fontSize : '11px'}}>studentid : {studentid}</p>
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
