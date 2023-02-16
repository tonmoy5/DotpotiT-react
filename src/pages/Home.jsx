import React from 'react'
import About from '../components/About/About'
import Client from '../components/Client/Client'
import ContactUs from '../components/ContactUs/ContactUs'
import Hero from '../components/Hero/Hero'
import Service from '../components/Service/Service'

const Home = () => {
  return (
    <div>
      <Hero />
      <div id='main'>
        <About />
        <Service />
        <Client />
        <ContactUs />
      </div>
    </div>
  )
}

export default Home