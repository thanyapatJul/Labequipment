import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import Detailbtn from '../components/Admin_ItemDetail'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function MultiActionAreaCard({ id, title, type, status, department, year, location, image, category,studentid }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="thisis image"
          alt="some image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} (id: {id})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Col>
              <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                status : {status}
              </Row>
              <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                Borrowby :{studentid}  
              </Row>
            </Col>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Detailbtn></Detailbtn>
      </CardActions>
    </Card>
  );
}
