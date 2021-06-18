import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionWarranty from '../components/SectionWarranty'
import SectionAbout from '../components/SectionAbout'
import SectionContact from '../components/SectionContact'
import SectionBenefits from '../components/SectionBenefits'

export default function Index() {


    return (
        <Layout>
            <Header />
            <SectionAbout />
            <SectionBenefits />
            <SectionWarranty />
            <SectionContact />
            <Footer />
        </Layout>
    )
}

