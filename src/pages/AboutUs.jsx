import React from 'react'
import HeroAbout from '../components/about/HeroAbout'
import OurStory from '../components/about/OurStory'
import OurPhilosophy from '../components/about/OurPhilosophy'
import FounderSection from '../components/about/FounderSection'
import Services from '../components/home/Services'
import CTASection from '../components/about/CTASection'

const AboutUs = () => {
  return (
    <>
      <HeroAbout />
      <FounderSection />
      <OurPhilosophy />
      <OurStory />
      <Services />
      <CTASection />
    </>
  )
}

export default AboutUs
