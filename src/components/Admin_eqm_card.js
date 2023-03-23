import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import Detailbtn from '../components/Admin_ItemDetail'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/Card.css'

import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

export default function MultiActionAreaCard({ id,name, title, type, status, department, year, location, image, category,studentid ,returndate }) {
  const byteCharacters = atob(image);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: 'image/jpeg'});
  const imageUrl = URL.createObjectURL(blob);
  
  
  return (

    <Card className="card mx-auto" sx={{ maxWidth: 345, maxHeight :400}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="200"
          image={imageUrl}
          alt={'No image'}
        />
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="div">
            <p>{title} </p>
            <p>(id:{id})</p>
          </Typography>


          <Typography variant="body2" color="text.secondary">
            <Col>
              <Row className="Card-row">
                <span className={`Card-status ${status === 'Available' ? 'available' : 'not-available'}`}>{status}</span>
              </Row>
              <Row className="Card-row">
                Borrowed by: {studentid || '-'}
              </Row>
              <Row className="Card-row">
                Return Date: {returndate || '-'}
              </Row>
            </Col>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Detailbtn id={id} 
         name = {name}
         title={title} 
         type={type}    
         status={status}
         department={department}
         year={year}         
         location={location}
         image={image}
         category={category}
         studentid={studentid}
         returndate={returndate}
        ></Detailbtn>
      </CardActions>
    </Card>
  );
}
