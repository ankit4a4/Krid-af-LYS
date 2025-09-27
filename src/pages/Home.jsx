import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Portfolio from '../components/home/Portfolio'
import Contact from "../components/home/Contact"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home
