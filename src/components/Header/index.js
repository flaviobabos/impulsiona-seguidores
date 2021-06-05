import React from "react";
import style from "./styles";
import { Helmet } from "react-helmet";

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
    <header className={className}>I am a header</header>
  </>
);

export default style(Header);
