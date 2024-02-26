import { Element } from 'react-scroll'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  function scrollEvent(e) {
    console.log(e)
  }

  return (
    <>
      <Nav />
      <main>
        <Element className='pseudo-page' id='hero'>
          <Hero />
        </Element>
        <Element className='pseudo-page' id='about'>
          <About />
        </Element>
        <Element className='pseudo-page' id='skills'>
          <Skills />
        </Element>
        <Element className='pseudo-page' id='projects'>
          <Projects />
        </Element>
        <Element className='pseudo-page' id='contact'>
          <Contact />
        </Element>
      </main>
      <Footer />
    </>
  )
}

export default App
