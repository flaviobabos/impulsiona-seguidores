import React from "react";
import style from "./styles";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Cross } from 'akar-icons';

const CardPopup = ({ className, openPopup }) => {
    console.log(openPopup)
    return (
        <>
            <Popup modal open={openPopup} position="right center">
                {close => (
                    <div className={className}>
                        <div className="card">
                            <div className="bg-blue block top-0 rounded-t-lg w-full h-20 mb-5">
                                <div className="flex flex-row justify-around items-center pt-6">
                                    <h2 className="text-white ml-20 text-center w-90">Vamos verificar seu instagram!</h2>
                                    <button onClick={close}><Cross color={'#FFF'} size={24} /></button>
                                </div>
                            </div>

                            <form>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" >Perfil do Instagram:</label>
                                        <input name="name" className="w-80 mt-1 border-link border-opacity-25 focus:border-opacity-75 border-2 " type="text"></input>
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <label htmlFor="email" >E-mail:</label>
                                        <input name="mail" className="w-80 mt-1 border-link border-opacity-25 focus:border-opacity-75 border-2 " type="email"></input>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-6 mb-6">
                                    <button className="btn text-white">Verificar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    );
};

export default style(CardPopup);
