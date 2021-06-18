import React, { useState } from "react";
import style from "./styles";
import { Helmet } from "react-helmet";
import logo from "../../images/logo.png";
import logo_desk from "../../images/logo_desk.png";
import { ThreeLineHorizontal } from 'akar-icons';
import { Link } from 'react-scroll';
import { Animated } from "react-animated-css";


function Header(className) {
    const [check, setCheck] = useState(false);

    function botao(check) {
        let inverse = !check;
        setCheck(inverse);
        console.log('oi')
    }
    return (
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
            <nav className="h-20 bg-black sticky top-0">
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
                        <button className="mr-5 lg:hidden" onClick={setCheck(!check)}>
                            <ThreeLineHorizontal color={"#00CD00"} size={40} />
                        </button>
                        <div className={className}>
                            <div className="flex-row hidden lg:flex">
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text active:text-green mr-8" to="home" spy={true} smooth={true} duration={500} >Inicio</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text  active:text-green mr-8" to="about" spy={true} smooth={true} duration={500} offset={-70} >Sobre Nós</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text active:text-green mr-8" to="benefits" spy={true} smooth={true} duration={500} offset={-70} >Benefícios</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green  text active:text-green mr-8" to="warranty" spy={true} smooth={true} duration={500} offset={-70} >Garantia</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green  text active:text-green" to="contact" spy={true} smooth={true} duration={500} offset={-70}>Contato</Link>
                            </div>
                        </div>
                        <div className="col hidden lg:flex w-56"></div>
                    </div>
                </div>
                <Animated animationIn="bounceInDown" animationOut="bounceOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={check}>
                    <div className="flex-col bg-black lg:hidden">
                        <Link activeClass="active" className="flex cursor-pointer justify-center items-center text-white hover:text-green text-lg active:text-green mb-2" to="home" spy={true} smooth={true} duration={500} >Inicio</Link>
                        <Link activeClass="active" className="flex cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="about" spy={true} smooth={true} duration={500} offset={-70} >Sobre Nós</Link>
                        <Link activeClass="active" className="flex cursor-pointer   justify-center items-center text-white hover:text-green text-lg	active:text-green mb-2 " to="benefits" spy={true} smooth={true} duration={500} offset={-70} >Benefícios</Link>
                        <Link activeClass="active" className="flex  cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="warranty" spy={true} smooth={true} duration={500} offset={-70} >Garantia</Link>
                        <Link activeClass="active" className="flex cursor-pointer  justify-center  items-center text-white hover:text-green text-lg	 active:text-green pb-2" to="contact" spy={true} smooth={true} duration={500} offset={-70}>Contato</Link>
                    </div>
                </Animated>
            </nav>
        </>)
};

export default style(Header);
