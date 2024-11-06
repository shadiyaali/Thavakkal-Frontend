import React from 'react'
import BannerSection2 from '../banner/BannerSection2'
 
import LuxurySection from '../product/LuxurySection'
import SpecialOfferSection from '../offer/SpecialOfferSection'
import HotDealSection from '../offer/HotDealSection'
import TestimonialSlider from '../sliders/TestimonialSlider'
 
 
import Category from '../category/Homecategory'

const JewelleryShopMain = () => {
  return (
    <main>
        <BannerSection2/>
        <Category/>
       
        <LuxurySection/>
        <SpecialOfferSection/>
        <HotDealSection/>
       
    </main>
  )
}

export default JewelleryShopMain