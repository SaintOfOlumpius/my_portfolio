import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Work from './components/Work'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Work />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}