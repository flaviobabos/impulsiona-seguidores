import React, { useState } from "react";
import Slider from 'react-input-slider';
import style from "./styles";


const HomeCard = ({ className }) => {
    const [valor, setState] = useState({ x: 0 });
    let titles = ["No que podemos te ajudar?", "De quantos seguidores você precisa?", "De quantas curtidas você precisa?", "De quantas curtidas e seguidores você precisa?"];
    let followers = ["1000", "1500", "3000", "6000"]
    let likes = ["25", "50", "100", "200"]
    let followersprices = ["55,90", "75,90", "145,90", "279,90"]
    let likesprices = ["25,90", "45,90", "84,90", "159,90"]
    let combosprices = ["89,90", "125,90", "249,90", "489,90"]
    let linksfollower = ["http://mon.net.br/17s8xk", "http://mon.net.br/17s8xl", "http://mon.net.br/17s8xm", "http://mon.net.br/17s8xn"]
    let linkslikes = ["http://mon.net.br/17s8xv", "http://mon.net.br/17s8xx", "http://mon.net.br/17s8y0", "http://mon.net.br/17s8y1"]
    let linkscombos = ["http://mon.net.br/17s8y3", "http://mon.net.br/17s8y4", "http://mon.net.br/17s8y5", "http://mon.net.br/17s8y7"]
    let [actualTitle, setTitle] = useState(titles[0]);
    return (
        <>
            <div className={className}>
                <div className={`card mb-9 mx-auto ${actualTitle === titles[0] ? "" : "card-increase"}`}>
                    <div className="bg-blue block top-0 rounded-t-lg w-full h-20">
                        <h2 className={`text-white px-4 text-center ${actualTitle === titles[0] ? "pt-6" : "pt-3 lg:pt-6"}`}>{actualTitle}</h2>
                    </div>
                    <div className={`flex flex-col items-center mt-12 ${actualTitle !== titles[0] ? "lg:mt-1" : ""}`}>
                        {actualTitle === titles[0] &&
                            <>
                                <button onClick={() => setTitle(titles[1])} className="btn text-white mb-5">Seguidores</button>
                                <button onClick={() => setTitle(titles[2])} className="btn text-white mb-5">Curtidas</button>
                                <button onClick={() => setTitle(titles[3])} className="btn text-white mb-5">Seguidores <br></br>e Curtidas</button>
                            </>}

                        {actualTitle === titles[1] &&
                            <>
                                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 className="text-link">{followers[valor.x] + " seguidores por mês"}</h4>
                                        <Slider
                                            className="mt-10"
                                            axis="x"
                                            xstep={1}
                                            xmin={0}
                                            xmax={3}
                                            x={valor.x}
                                            styles={{
                                                track: {
                                                    backgroundColor: '#ECECEC'
                                                },
                                                active: {
                                                    backgroundColor: '#F2295B'
                                                },
                                                thumb: {
                                                    width: 25,
                                                    height: 25,
                                                    opacity: 1,
                                                    background: '#F2295B'
                                                }
                                            }}
                                            onChange={({ x }) => setState(valor => ({ ...valor, x }))}
                                        />
                                        <div className="flex flex-row mt-6 lg:ml-6">
                                            <h6 className="flex items-center mr-2">R$
</h6>
                                            <h3 className="flex items-center">
                                                {followersprices[valor.x]}
                                            </h3>

                                            <h6 className="flex items-end">/Mês
</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex mt-7 mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Seguidores <strong className="text-link">Reais</strong> e <strong className="text-link">Brasileiros</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Quantidade <strong className="text-link">garantida</strong> na assinatura</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Reposição <strong className="text-link">automática</strong> de seguidores</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Atendimento via <strong className="text-link">e-mail</strong> e <strong className="text-link">WhatsApp</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Cancelamento a <strong className="text-link">qualquer momento</strong></p>
                                        </div>
                                        <div className="flex mb-6 mt-6 items-center">
                                            <p className="text-link ml-2 texto"><strong className="text-pink">Atenção:</strong> Seu <strong className="text-pink">perfil</strong> precisa estar <strong className="text-pink">público</strong></p>
                                        </div>
                                        <div className="flex justify-center items-center flex-col mt-10">
                                            <a href={linksfollower[valor.x]}>
                                                <button className="btn text-white mb-5">Contratar</button>
                                            </a>
                                            <button onClick={() => setTitle(titles[0])} className="btn-inverse text-pink mb-5">Voltar</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {actualTitle === titles[2] &&
                            <>
                                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 className="text-link">{likes[valor.x] + " curtidas por mês"}</h4>
                                        <Slider
                                            className="mt-10"
                                            axis="x"
                                            xstep={1}
                                            xmin={0}
                                            xmax={3}
                                            x={valor.x}
                                            styles={{
                                                track: {
                                                    backgroundColor: '#ECECEC'
                                                },
                                                active: {
                                                    backgroundColor: '#F2295B'
                                                },
                                                thumb: {
                                                    width: 25,
                                                    height: 25,
                                                    opacity: 1,
                                                    background: '#F2295B'
                                                }
                                            }}
                                            onChange={({ x }) => setState(valor => ({ ...valor, x }))}
                                        />
                                        <div className="flex flex-row mt-6 lg:ml-6">
                                            <h6 className="flex items-center mr-2">R$
</h6>
                                            <h3 className="flex items-center">
                                                {likesprices[valor.x]}
                                            </h3>

                                            <h6 className="flex items-end">/Mês
</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex mt-7 mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Seguidores <strong className="text-link">Reais</strong> e <strong className="text-link">Brasileiros</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Quantidade <strong className="text-link">garantida</strong> na assinatura</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Reposição <strong className="text-link">automática</strong> de seguidores</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Atendimento via <strong className="text-link">e-mail</strong> e <strong className="text-link">WhatsApp</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Cancelamento a <strong className="text-link">qualquer momento</strong></p>
                                        </div>
                                        <div className="flex mb-6 mt-6 items-center">
                                            <p className="text-link ml-2 texto"><strong className="text-pink">Atenção:</strong> Seu <strong className="text-pink">perfil</strong> precisa estar <strong className="text-pink">público</strong></p>
                                        </div>
                                        <div className="flex justify-center items-center flex-col mt-10">
                                            <a href={linkslikes[valor.x]}>
                                                <button className="btn text-white mb-5">Contratar</button>
                                            </a>
                                            <button onClick={() => setTitle(titles[0])} className="btn-inverse text-pink mb-5">Voltar</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {actualTitle === titles[3] &&
                            <>
                                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 className="text-link text-center px-5">{followers[valor.x] + " seguidores e " + likes[valor.x] + " curtidas por mês"}</h4>
                                        <Slider
                                            className="mt-10"
                                            axis="x"
                                            xstep={1}
                                            xmin={0}
                                            xmax={3}
                                            x={valor.x}
                                            styles={{
                                                track: {
                                                    backgroundColor: '#ECECEC'
                                                },
                                                active: {
                                                    backgroundColor: '#F2295B'
                                                },
                                                thumb: {
                                                    width: 25,
                                                    height: 25,
                                                    opacity: 1,
                                                    background: '#F2295B'
                                                }
                                            }}
                                            onChange={({ x }) => setState(valor => ({ ...valor, x }))}
                                        />
                                        <div className="flex flex-row mt-6">
                                            <h6 className="flex items-center mr-2">R$
</h6>
                                            <h3 className="flex items-center">
                                                {combosprices[valor.x]}
                                            </h3>

                                            <h6 className="flex items-end">/Mês
</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex mt-7 mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Seguidores <strong className="text-link">Reais</strong> e <strong className="text-link">Brasileiros</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Quantidade <strong className="text-link">garantida</strong> na assinatura</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Reposição <strong className="text-link">automática</strong> de seguidores</p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Atendimento via <strong className="text-link">e-mail</strong> e <strong className="text-link">WhatsApp</strong></p>
                                        </div>
                                        <div className="flex mb-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="DoubleCheck"><path d="M2 12l5.25 5 2.625-3" /><path d="M8 12l5.25 5L22 7" /><path d="M16 7l-3.5 4" /></svg>
                                            <p className="text-link ml-2 texto">Cancelamento a <strong className="text-link">qualquer momento</strong></p>
                                        </div>
                                        <div className="flex mb-6 mt-6 items-center">
                                            <p className="text-link ml-2 texto"><strong className="text-pink">Atenção:</strong> Seu <strong className="text-pink">perfil</strong> precisa estar <strong className="text-pink">público</strong></p>
                                        </div>
                                        <div className="flex justify-center items-center flex-col mt-10">
                                            <a href={linkscombos[valor.x]}>
                                                <button className="btn text-white mb-5">Contratar</button>
                                            </a>
                                            <button onClick={() => setTitle(titles[0])} className="btn-inverse text-pink mb-5">Voltar</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div >
        </>
    );
};

export default style(HomeCard);
