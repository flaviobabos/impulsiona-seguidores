import React, { useState } from "react";
import style from "./styles";

const HomeCard = ({ className }) => {
    let opcao = 0;
    let titles = ["No que podemos te ajudar?", "De quantos seguidores você precisa?", "De quantas curtidas você precisa?", "De quantas curtidas e seguidores você precisa?"];
    let followers = ["1000", "1500", "3000", "6000"]
    let likes = ["25", "50", "100", "200"]
    let [actualTitle, setTitle] = useState(titles[0]);
    let [actualFollower, setFollower] = useState(followers[0]);
    let [actualLike, setLiker] = useState(likes[0]);
    let [actualCombo, setCombo] = useState(followers[0]);
    return (
        <>
            <div className={className}>
                <div className={`card mb-9 mx-auto ${actualTitle === titles[0] ? "" : "card-increase"}`}>
                    <div className="bg-blue block top-0 rounded-t-lg w-full h-20">
                        <h2 className={`text-white px-4 text-center ${actualTitle === titles[0] ? "pt-6" : "pt-3"}`}>{actualTitle}</h2>
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        {actualTitle === titles[0] &&
                            <>
                                <button onClick={() => setTitle(titles[1])} className="btn text-white mb-5">Seguidores</button>
                                <button onClick={() => setTitle(titles[2])} className="btn text-white mb-5">Curtidas</button>
                                <button onClick={() => setTitle(titles[3])} className="btn text-white mb-5">Seguidores <br></br>e Curtidas</button>
                            </>}

                        {actualTitle === titles[1] &&
                            <h4 className="text-link">{actualFollower + " seguidores por mês"}</h4>
                        }
                        <input className="mt-10 w-48" type="range" min="0" max="3" defaultValue="0"></input>
                        <div className="mt-2">
                            <div className="flex mt-7 mb-2 items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                <p className="text-link ml-2">Seguidores <strong className="text-link">Reais</strong> e <strong className="text-link">Brasileiros</strong></p>
                            </div>
                            <div className="flex mb-2 items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                <p className="text-link ml-2">Quantidade <strong className="text-link">garantida</strong> na assinatura</p>
                            </div>
                            <div className="flex mb-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                <p className="text-link ml-2">Reposição <strong className="text-link">automática</strong> de seguidores</p>
                            </div>
                            <div className="flex mb-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                <p className="text-link ml-2">Atendimento via <strong className="text-link">e-mail</strong> e <strong className="text-link">WhatsApp</strong></p>
                            </div>
                            <div className="flex mb-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                <p className="text-link ml-2">Cancelamento a <strong className="text-link">qualquer momento</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default style(HomeCard);
