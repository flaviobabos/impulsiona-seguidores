import React from "react";
import style from "./styles";
import { Helmet } from "react-helmet";
import logo from "./imgs/logo.png";
import logo_desk from "./imgs/logo_desk.png";

const Header = ({ className }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Impulsiona Seguidores</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <nav className="h-20 bg-black">
      <div className="container-fluid h-full flex items-center ">
        <div className="ml-5">
          <button className="lg:hidden">
            <img alt="logo" className="h-14" src={logo}></img>
          </button>
          <button className="hidden lg:block">
            <img alt="logo" className="h-14" src={logo_desk}></img>
          </button>
        </div>
        <div className="flex w-full justify-end lg:justify-center">
          <button className="mr-5 lg:hidden">
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
          <div className={className}>
            <div className="flex-row hidden lg:flex">
              <a href="/">
                <h4 className="flex items-center text-white hover:text-green active:text-green mr-8">
                  Inicio
                </h4>
              </a>
              <a href="sobre">
                <h4 className="flex items-center text-white hover:text-green mr-8">
                  Sobre Nós
                </h4>
              </a>
              <a href="beneficios">
                <h4 className="flex items-center text-white hover:text-green mr-8">
                  Benefícios
                </h4>
              </a>
              <a href="garantia">
                <h4 className="flex items-center text-white hover:text-green mr-8">
                  Garantia
                </h4>
              </a>
              <a href="contato">
                <h4 className="flex items-center text-white hover:text-green">
                  Contato
                </h4>
              </a>
            </div>
          </div>
          <div className="col hidden lg:flex w-56"></div>
        </div>
      </div>
    </nav>
  </>
);

export default style(Header);
