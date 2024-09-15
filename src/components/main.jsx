import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sections, runes } from '../data/data'
import Header from './layout/Header'
import Footer from './layout/Footer'
import NavBar from './layout/NavBar'
import CharactersSection from './sections/CharactersSection'
import HistorySection from './sections/HistorySection'
import ItemsSection from './sections/ItemsSection'
import LocationsSection from './sections/LocationsSection'
import ReferencesSection from './sections/ReferencesSection'
import EasterEggsSection from './sections/EasterEggsSection'
import MapSection from './sections/MapSection';
import { Loader } from './shared/decorations/loader/loader'


function Main () {
  const [activeSection, setActiveSection] = useState('characters')
  const [particles, setParticles] = useState([])
  const [floatingRunes, setFloatingRunes] = useState([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1
        })
      }
      setParticles(newParticles)
    }

    const createFloatingRunes = () => {
      const newRunes = []
      for (let i = 0; i < 20; i++) {
        newRunes.push({
          id: i,
          rune: runes[Math.floor(Math.random() * runes.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 24 + 16,
          rotation: Math.random() * 360
        })
      }
      setFloatingRunes(newRunes)
    }

    createParticles()
    createFloatingRunes()
    window.addEventListener('resize', createParticles)
    window.addEventListener('resize', createFloatingRunes)

    return () => {
      window.removeEventListener('resize', createParticles)
      window.removeEventListener('resize', createFloatingRunes)
    }
  }, [])

  const validSections = sections.map(section => section.id)

  return (
    <div className='h-screen bg-amber-100 text-amber-900 font-serif overflow-hidden relative'>
      {/* Animated background */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className='absolute bg-amber-300 rounded-full opacity-50'
            style={{
              width: particle.size,
              height: particle.size,
              x: particle.x,
              y: particle.y
            }}
            animate={{
              x: [particle.x - 50, particle.x + 50],
              y: [particle.y - 50, particle.y + 50]
            }}
            transition={{
              x: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse'
              },
              y: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
        {floatingRunes.map(runeObj => (
          <motion.div
            key={runeObj.id}
            className='absolute text-amber-700 opacity-30'
            style={{
              fontSize: runeObj.size,
              x: runeObj.x,
              y: runeObj.y,
              rotate: runeObj.rotation
            }}
            animate={{
              y: [runeObj.y - 50, runeObj.y + 50],
              rotate: [runeObj.rotation, runeObj.rotation + 360]
            }}
            transition={{
              y: {
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse'
              },
              rotate: {
                duration: 30 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          >
            {runeObj.rune}
          </motion.div>
        ))}
        <div className='absolute inset-0 bg-gradient-radial from-transparent via-amber-100/20 to-amber-100/40 animate-fog'></div>
      </div>

      {/* Content */}
      <div className='h-full flex flex-col'>
        <Header />
        <NavBar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className='flex-grow overflow-hidden relative z-10 px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className='h-full overflow-y-auto pr-4 pt scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-200'
            >
              {activeSection === 'characters' && <CharactersSection />}
              {activeSection === 'history' && <HistorySection />}
              {activeSection === 'items' && <ItemsSection />}
              {activeSection === 'locations' && <LocationsSection />}
              {activeSection === 'references' && <ReferencesSection />}
              {activeSection === 'easterEggs' && <EasterEggsSection />}
              {activeSection === 'map' && <MapSection />}
              
              {!validSections.includes(activeSection) && <Loader />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      {/* Corners */}
      <div className='fixed top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-800 animate-pulse'></div>
      <div className='fixed top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-800 animate-pulse'></div>
      <div className='fixed bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-800 animate-pulse'></div>
      <div className='fixed bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-800 animate-pulse'></div>
    </div>
  )
}

export default Main
