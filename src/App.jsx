
import './App.css'
import Header from '../Components/Header'
import Home from '../Components/Pages/Home'
import About from '../Components/Pages/About'
import Services from '../Components/Pages/Services'
import Portfolio from '../Components/Pages/Portfolio'
import Skills from '../Components/Pages/Skills'
import Contact from '../Components/Pages/Contact'


function App() {
  return (
    <>
    <Header />
    {/* Main sections for smooth scrolling */}

    <section id='home'>
      <Home />
    </section>
    <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App