import React from "react";
import style from "./styles";

const ClientCard = ({ className, number, name, desc }) => {
  return (
    <>
      <div className={className}>
        <div className="card-border flex justify-center items-center">
          <div className="card-body-internal">
            <h1 className="mb-4">{number}</h1>
            <h4 className="mb-4">{name}</h4>
            <p className="px-6">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default style(ClientCard);
