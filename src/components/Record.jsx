import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCollection, collection } from "../services";

// Function component, renders to page
// button likes & unlikes record
const Record = (props) => {
  console.log("this is props.tab", props.tab);
  return (
    <Card
      bg="secondary"
      text="white"
      border="secondary"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Text>
          <Card.Title>{props.title}</Card.Title>
          <h4>{props.artist} ||</h4>
          <p>{props.release}</p>
        </Card.Text>
        <Button variant="success" onClick="">{props.tab}</Button>
      </Card.Body>
    </Card>
  );
};

export default Record;
