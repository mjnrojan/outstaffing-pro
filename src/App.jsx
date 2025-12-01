import React from 'react'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Sectors from './components/Sectors.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sectors />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
