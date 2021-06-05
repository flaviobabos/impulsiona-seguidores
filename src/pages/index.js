import React from 'react'
import Header from '../components/Header'
import ClientCard from '../components/ClientCard'

export default function Index() {

  return (
    <>
      <Header/>
      <ClientCard number={"20097"} name={"CLIENTES"} desc={"Nosso serviço já atingiu a marca de mais de 20 mil clientes ativos espalhados pelo Brasil"}/>
    </>
  )
}

