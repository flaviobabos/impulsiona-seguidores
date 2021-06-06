import React from "react";
import ClientCard from "../../components/ClientCard";
import style from "./styles";

const CardContainer = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col lg:flex-row auto-cols-3">
                <ClientCard
                    number={"20000"}
                    name={"CLIENTES"}
                    desc={[
                        "Nosso serviço já atingiu a marca de mais de ",
                        <strong>20 mil clientes</strong>,
                        " ativos espalhados pelo Brasil",
                    ]}
                    key={"1"}
                />
                <ClientCard
                    number={"27000"}
                    name={"PEDIDOS ENTREGUES"}
                    desc={[
                        "Atualmente já entregamos mais de ",
                        <strong>27 mil pedidos</strong>,
                        " de seguidores e curtidas para os perfis de nossos clientes!",
                    ]}
                    key={"2"}
                />
                <ClientCard
                    number={"950000"}
                    name={"SEGUIDORES ENTREGUES"}
                    desc={[
                        "Hoje nossa conta de seguidores brasileiros e mundiais entregues está em quase ",
                        <strong>1 milhão!</strong>,
                    ]}
                    key={"3"}
                />
            </div>
        </div>
    );
};

export default style(CardContainer);
