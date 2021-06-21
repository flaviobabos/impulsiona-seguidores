import React from "react";
import style from "./styles";

const HomeCard = ({ className }) => {
    return (
        <>
            <div className={className}>
                <div className="card mb-9 mx-auto">
                    <div className="bg-blue block top-0 rounded-t-lg w-full h-20">
                        <h2 className="text-white text-center pt-6">No que podemos te ajudar?</h2>
                    </div>
                    <div className="btn-group flex flex-col items-center mt-12">
                        <button className="btn text-white mb-5">Seguidores</button>
                        <button className="btn text-white mb-5">Curtidas</button>
                        <button className="btn text-white mb-5">Seguidores <br></br>e Curtidas</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default style(HomeCard);
