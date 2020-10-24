import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Function component, renders to page
// button likes & unlikes record
const Record = (props) => {
  console.log(props);
  return (
    <Card bg='secondary' text = 'white' border='secondary' style={{width: '18rem'}}>
      <Card.Img variant='top' src={props.img} alt={props.title}/>
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text><h4>{props.artist} ||</h4>
      <p>{props.release}</p>
      </Card.Text>
      <Button variant='success'>Like</Button>
    </Card.Body>
    </Card>
  );
};

export default Record;
