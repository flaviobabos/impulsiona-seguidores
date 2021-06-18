import React from "react";
import style from "./styles";
import { WhatsappFill, Envelope } from 'akar-icons';


const sectionContact = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full contact bg-grey px-10 lg:px-52 pb-36" >
                    <h3 className="titulo text-black block mx-auto pt-10 mb-12">Entre<strong className="titulo-strong">&nbsp;em contato conosco</strong></h3>
                    <div className="flex row justify-center px-10">
                        <button><a rel="noreferrer" target="_blank" href="https://web.whatsapp.com/send?phone=5544998433415&text=">
                            <WhatsappFill className="mr-16" color={"#00E676"} size={76} /></a></button>
                        <button><a href="mailto:contato@impulsionaseguidores.com">
                            <Envelope color={"#575CCC"} size={76} />
                        </a></button>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(sectionContact);
