import React from 'react'
import Header from '../components/Header'
import ClientCard from '../components/ClientCard'

export default function Index() {

  return (
    <>
      <Header/>
      <ClientCard number={"20097"} name={"CLIENTES"} desc={["Nosso serviço já atingiu a marca de mais de ",<strong>20 mil clientes</strong>," ativos espalhados pelo Brasil"]}/>
      <ClientCard number={"27000+"} name={"PEDIDOS ENTREGUES"} desc={["Atualmente já entregamos mais de ",<strong>27 mil pedidos</strong>," de seguidores e curtidas para os perfis de nossos clientes!"]}/>
      <ClientCard number={"950000+"} name={"SEGUIDORES ENTREGUES"} desc={["Hoje nossa conta de seguidores brasileiros e mundiais entregues está em quase ",<strong>1 milhão!</strong>]}/>
    </>
  )
}

