import React, { useState } from "react";
import Slider from "react-input-slider";
import style from "./styles";

const Popup = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="card mb-9 mx-auto">
          <div className="bg-blue block top-0 rounded-t-lg w-full h-20 mb-5">
            <h2 className="text-white px-4 text-center pt-3">
              Quer receber mais informações e promoções diretamente do seu
              e-mail?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default style(Popup);
