import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionWarranty from '../components/SectionWarranty'
import SectionAbout from '../components/SectionAbout'

export default function Index() {


    return (
        <Layout>
            <Header />
            <SectionAbout />
            <SectionWarranty />
            <Footer />
        </Layout>
    )
}

