import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden '>
        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          {/* <Testimonials/> */}
          <Contact/>
            
        </main>
       <Footer/>
      
    </div>
  )
}

export default App
