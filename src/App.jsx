import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer'


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
