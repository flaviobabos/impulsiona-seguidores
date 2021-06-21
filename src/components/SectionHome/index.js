import React from "react";
import style from "./styles";
import warranty from "../../images/warranty.png";
import CardContainer from "../../components/CardContainer";
import HomeCard from "../../components/HomeCard";


const sectionWarranty = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full bg-grey px-10 lg:px-52" >
                    <img
                        className="flex lg:hidden mx-auto h-48 mb-10"
                        src={warranty}
                        alt="7 dias de garantia"
                    ></img>
                    <h3 className="titulo text-black block mx-auto pt-6 mb-5">Seguidores<strong className="titulo-strong text-green">&nbsp;Reais</strong> e<strong className="titulo-strong text-green">&nbsp;Brasileiros</strong></h3>
                    <HomeCard />
                    <p className="text-black mt-10 mb-10">Assine a <strong className="text-green">IMPULSIONA SEGUIDORES</strong> e turbine seu perfil do Instagram de forma fácil e garantida, com pessoas reais te seguindo e, o melhor de tudo: <strong className="text-green">sem perder o engajamento da rede</strong></p>
                    <CardContainer />

                </section>
            </div>
        </>

    );
};

export default style(sectionWarranty);
