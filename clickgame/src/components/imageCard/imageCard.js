import React from "react";
import "./imageCard.css";

const ImageCard = props => (
  <div onClick={() => props.checkCard(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
