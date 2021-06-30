import React from "react";
import style from "./styles";
import img from "../../images/seg.png";

const Footer = ({ className }) => (
  <>
    <div className={className}>
      <div className="h-64 bg-black flex items-center justify-items-center">
        <div className="grid-rows-2 mx-auto">
          <img className="h-16" style={{height: "4rem"}} alt="seguranca do site" src={img}></img>
          <h5 className="text-center text-white text-lg mt-5">
            Impulsiona Seguidores - 2021
          </h5>
          <p className="text-center text-white text-lg mt-2">
            Desenvolvido por&nbsp;
            <a className="text-link" href="https://articadev.com">
              Artica Dev
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
);

export default style(Footer);
