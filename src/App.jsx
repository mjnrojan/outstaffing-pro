import React from 'react'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Sectors from './components/Sectors.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import RolesWeFill from './components/RolesWeFill.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import CTA from './components/CTA.jsx'
import BrandLogos from './components/BrandLogos.jsx'
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
      <RolesWeFill />
      {/* <BrandLogos /> */}
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}
