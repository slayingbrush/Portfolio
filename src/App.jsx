import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LinkedInPosts from './components/LinkedInPosts'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Analytics from './components/Analytics'

function App() {
  return (
    <div className="App">
      <Analytics />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LinkedInPosts />
      <Contact />
    </div>
  )
}

export default App

