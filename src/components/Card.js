import React from 'react';
import { Card } from 'react-bootstrap';
// import { Card } from './styles'



export default props => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.porpose}</Card.Subtitle>
      <Card.Text>
       {props.finishDate}
      </Card.Text>
    </Card.Body>
  </Card>
   
  )
}