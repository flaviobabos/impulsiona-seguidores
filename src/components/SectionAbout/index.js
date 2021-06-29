import React from "react";
import style from "./styles";
import {DoubleCheck } from 'akar-icons';

const sectionWarranty = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full bg-gradient px-10 lg:px-52 pb-5 about" >
                    <h3 className="titulo text-white block mx-auto pt-6 mb-5">O que <strong className="titulo-strong text-green">nosso sistema</strong> fará por <strong className="titulo-strong text-green">você?</strong></h3>
                    <p className="text-white mt-10 normal">Após o processamento de sua compra, seu perfil imediatamente irá atrair mais pessoas, lhe dando ainda mais interações e engajamento.</p>
                    <p className="text-white mt-5 normal">Não se preocupe pois a quantidade de seguidores e curtidas é garantida durante toda a assinatura.</p>
                    <p className="text-white mt-5 normal pb-10">E, o melhor de tudo, você vai ter todos os benefícios da Impulsiona Seguidores</p>
                    <div className="flex mb-3 justify-center">
                        <DoubleCheck className="text-green w-16" size={32} />
                        <p className="text-white normal ml-4">Sem precisar <strong className="text-white">seguir de volta</strong></p>
                    </div>
                    <div className="flex mb-3 justify-center">
                        <DoubleCheck className="text-green w-16" size={32} />
                        <p className="text-white normal ml-4">Sem precisar <strong className="text-white">informar sua senha</strong> do Instagram</p>
                    </div>
                    <div className="flex mb-10 justify-center">
                        <DoubleCheck className="text-green w-16" size={32} />
                        <p className="text-white normal ml-4">Sem precisar <strong className="text-white">ficar online</strong> o dia todo</p>
                    </div>
                    <div className="container lg:px-30 xl:px-40">
                        <iframe className="mx-auto" width="100%" height="350px" src="https://www.youtube.com/embed/XxeOdkmAgYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(sectionWarranty);
