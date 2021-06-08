import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionWarranty from '../components/SectionWarranty'
import SectionAbout from '../components/SectionAbout'

export default function Index() {

    return (
        <>
            <Header />
            <SectionAbout />
            <SectionWarranty />
            <Footer />
        </>
    )
}

