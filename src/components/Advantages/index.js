import React from "react";
import style from "./styles";

const Advantages = ({ className }) => {
    return (
        <>
            <div className="flex mt-7 mb-2 items-start ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00CD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="DoubleCheck"
                >
                    <path d="M2 12l5.25 5 2.625-3" />
                    <path d="M8 12l5.25 5L22 7" />
                    <path d="M16 7l-3.5 4" />
                </svg>
                <p className="text-link ml-2 texto">
                    Seguidores <strong className="text-link">Reais</strong> e{" "}
                    <strong className="text-link">Brasileiros</strong>
                </p>
            </div>
            <div className="flex mb-2 items-center ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00CD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="DoubleCheck"
                >
                    <path d="M2 12l5.25 5 2.625-3" />
                    <path d="M8 12l5.25 5L22 7" />
                    <path d="M16 7l-3.5 4" />
                </svg>
                <p className="text-link ml-2 texto">
                    Quantidade <strong className="text-link">garantida</strong>{" "}
                    na assinatura
                  </p>
            </div>
            <div className="flex mb-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00CD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="DoubleCheck"
                >
                    <path d="M2 12l5.25 5 2.625-3" />
                    <path d="M8 12l5.25 5L22 7" />
                    <path d="M16 7l-3.5 4" />
                </svg>
                <p className="text-link ml-2 texto">
                    Reposição <strong className="text-link">automática</strong>{" "}
                    de seguidores
                  </p>
            </div>
            <div className="flex mb-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00CD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="DoubleCheck"
                >
                    <path d="M2 12l5.25 5 2.625-3" />
                    <path d="M8 12l5.25 5L22 7" />
                    <path d="M16 7l-3.5 4" />
                </svg>
                <p className="text-link ml-2 texto">
                    Atendimento via{" "}
                    <strong className="text-link">e-mail</strong> e{" "}
                    <strong className="text-link">WhatsApp</strong>
                </p>
            </div>
            <div className="flex mb-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00CD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="DoubleCheck"
                >
                    <path d="M2 12l5.25 5 2.625-3" />
                    <path d="M8 12l5.25 5L22 7" />
                    <path d="M16 7l-3.5 4" />
                </svg>
                <p className="text-link ml-2 texto">
                    Cancelamento a{" "}
                    <strong className="text-link">qualquer momento</strong>
                </p>
            </div>
            <div className="flex mb-3 mt-4 items-center">
                <p className="text-link ml-2 texto">
                    <strong className="text-pink">Atenção:</strong> Seu{" "}
                    <strong className="text-pink">perfil</strong> precisa estar{" "}
                    <strong className="text-pink">público</strong>
                </p>
            </div>
        </>
    );
};

export default style(Advantages);
