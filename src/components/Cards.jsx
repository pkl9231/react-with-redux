import React from "react";

const Cards = (props) => {
  return (
    <div>
      <h1>Name {props.name}</h1>
      <h1>Degree {props.degree}</h1>
    </div>
  );
};

export default Cards;