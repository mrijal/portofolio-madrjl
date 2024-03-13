import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import ParticleJS from './components/particle/ParticleJS.jsx'
import Footer from './components/footer/Footer.jsx'
import Qualification from './components/qualification/Qualification.jsx'

function App() {

  return (
    <>
    <ParticleJS/>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
    </main>

    <Footer/>
    </>
  )
}

export default App
