import React from "react";
import style from "./styles";
import { Helmet } from "react-helmet";
import logo from "./imgs/logo.png";

const Header = ({ className }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Impulsiona Seguidores</title>
    </Helmet>
    <nav className="h-20 bg-black">
      <div className="container h-full flex items-center">
        <div className="ml-3">
          <button>
            <img className="h-14 w-14" src={logo}></img>
          </button>
        </div>
        <div className="flex w-full justify-end">
          <button className="mr-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00CD00"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </>
);

export default style(Header);
