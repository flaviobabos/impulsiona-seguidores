import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionWarranty from '../components/SectionWarranty'
import SectionAbout from '../components/SectionAbout'
import SectionContact from '../components/SectionContact'
import CardContainer from "../components/CardContainer";

export default function Index() {


    return (
        <Layout>
            <Header />
            <CardContainer />
            <SectionAbout />
            <SectionWarranty />
            <SectionContact />
            <Footer />
        </Layout>
    )
}
