import React from "react";
import style from "./styles";
import warranty from "../../images/warranty.png";

const sectionWarranty = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full bg-gradient px-10 lg:px-52 pb-5" >
                    <h3 className="titulo text-white block mx-auto pt-6 mb-5">O que <strong className="titulo-strong text-green">nosso sistema</strong> fará por <strong className="titulo-strong text-green">você?</strong></h3>
                    <p className="text-white mt-10 normal">Após o processamento de sua compra, seu perfil imediatamente irá atrair mais pessoas, lhe dando ainda mais interações e engajamento.</p>
                    <p className="text-white mt-5 normal">Não se preocupe pois a quantidade de seguidores e curtidas é garantida durante toda a assinatura.</p>
                    <p className="text-white mt-5 normal pb-10">E, o melhor de tudo, você vai ter todos os benefícios da Impulsiona Seguidores</p>
                    <div className="flex mb-3 lg:justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                        <p className="text-white ml-2">Sem precisar <strong className="text-white">seguir de volta</strong></p>
                    </div>
                    <div className="flex mb-3 lg:justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                        <p className="text-white ml-2">Sem precisar <strong className="text-white">informar sua senha</strong> do Instagram</p>
                    </div>
                    <div className="flex mb-10 lg:justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                        <p className="text-white ml-2">Sem precisar <strong className="text-white">ficar online</strong> o dia todo</p>
                    </div>
                    <div className="container lg:px-30 xl:px-40">
                        <iframe className="mx-auto" width="100%" height="350px" src="https://www.youtube.com/embed/XxeOdkmAgYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(sectionWarranty);
