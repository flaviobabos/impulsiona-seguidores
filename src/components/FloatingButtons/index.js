import React from "react";
import style from "./styles";
import { WhatsappFill, ChevronUp  } from 'akar-icons';
import { Link } from 'react-scroll';


const FloatingButtons = ({ className }) => {
    return (
        <>
            <div className={className}>
                <div className="bottom-0 fixed z-50 right-0">
                    <div className="flex justify-center flex-col">
                        <button className="mb-4 "><a rel="noreferrer" target="_blank" href="https://web.whatsapp.com/send?phone=5544998433415&text=">
                            <WhatsappFill className="mr-16 rounded-full bg-white" color={"#00E676"} enableBackground={"#FFF"} size={30} /></a></button>
                        <button>
                        <Link to="home" spy={true} smooth={true} offset={-80} duration={500} >
                            <ChevronUp className="rounded-full" color={"#00CD00"} size={30} />
                        </Link></button>
                        </div>
                    </div>
                    </div>
        </>

    );
};

export default style(FloatingButtons);
