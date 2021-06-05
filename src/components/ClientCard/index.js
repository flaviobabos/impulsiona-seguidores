import React from "react";
import style from "./styles";

const ClientCard = (className, props) => {
  return (
    <>
      <div className="card-border">
        <div className="card-body-internal">
          <h1>{props.number}</h1>
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default style(ClientCard);
