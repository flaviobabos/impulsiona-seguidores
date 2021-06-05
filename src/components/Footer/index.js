import React from "react";
import style from "./styles";
import img from "./imgs/seg.png";

const Footer = ({ className }) => (
  <>
    <div className="h-64 bg-black flex content-center">
      <div className="grid-rows-2 mt-8 mx-auto">
        <img className="h-20" alt="seguranca do site" src={img}></img>
        <p className="text-center text-white text-lg mt-5">
          Impulsiona Seguidores - 2021
        </p>
        <p className="text-center text-white text-lg mt-2">
          Desenvolvido por{" "}
          <a className="text-link" href="https://articadev.com">
            Artica Dev
          </a>
        </p>
      </div>
    </div>
  </>
);

export default style(Footer);
