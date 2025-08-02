import React from 'react'

import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import TopBrands from '@/components/topBrands'
import ResidencySlider from '@/components/residencySlider'
import OurValue from '@/components/OurValue'
import ContactUs from '@/components/ContactUs'
import CallToAction from '@/components/CallToAction'



const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <TopBrands/>
    <ResidencySlider/>
    <OurValue/>
    <ContactUs/>
    <CallToAction/>
    <Footer/>
  
    </>
  )
}

export default Home