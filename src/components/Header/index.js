  
import React from 'react';
import style from './styles';
import {Helmet} from "react-helmet";

const Header = ({ className }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Impulsiona Seguidores</title>
    </Helmet>
    <header className={className}>
        I am a header
    </header>
  </>
);


export default style(Header);