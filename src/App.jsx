import { useState } from 'react'
import FactionCard from './components/FactionCard'
import streetwearImg from '../designs/Vanta_002.png'
import cyberpunkImg from '../designs/Cyberpunk_V003.png'
import chicImg from '../designs/Chic.png'
import casualImg from '../designs/Casual_V002.png'
import './index.css'

const factions = [
  {
    id: 'nova',
    label: 'Nova',
    subtitle: `"You arrive before the trend does."`,
    descriptor: 'Bold / Futuristic',
    accent: '#5B8CFF',
    glow: 'rgba(91, 140, 255, 0.25)',
    image: cyberpunkImg,
  },
  {
    id: 'muse',
    label: 'Muse',
    subtitle: '"You are the reference."',
    descriptor: 'Expressive / Street',
    accent: '#CBA6F7',
    glow: 'rgba(203, 166, 247, 0.25)',
    image: chicImg,
  },
  {
    id: 'aera',
    label: 'Aera',
    subtitle: '"Nothing extra. Nothing missing."',
    descriptor: 'Soft / Effortless',
    accent: '#AEEBFF',
    glow: 'rgba(174, 235, 255, 0.25)',
    image: casualImg,
  },
  {
    id: 'vanta',
    label: 'Vanta',
    subtitle: `"You don't enter rooms. You take them."`,
    descriptor: 'Dark / Sharp',
    accent: '#AAAAAA',
    glow: 'rgba(150, 150, 150, 0.25)',
    image: streetwearImg,
  },
]

function App() {
  const [activeKey, setActiveKey] = useState(null)
  const activeFaction = activeKey ? activeKey.split('-')[0] : null
  const activeData = factions.find(f => f.id === activeFaction)

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Full-screen background glow that shifts per faction */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: activeData
          ? `radial-gradient(ellipse at 50% 80%, ${activeData.glow} 0%, transparent 60%)`
          : 'none',
        transition: 'background 300ms ease',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        padding: '3.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        pointerEvents: 'none',
      }}>
        <h1 className="title-slide-in" style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(5rem, 14vw, 12rem)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: activeData ? 'transparent' : '#000000',
          WebkitTextStroke: activeData ? `2px ${activeData.accent}` : '0px transparent',
          transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          lineHeight: 0.95,
          userSelect: 'none',
        }}>
          {activeData ? activeData.label.toUpperCase() : 'CHOOSE YOUR AESTHETIC'}
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.35)',
          marginTop: '1.2rem',
        }}>
          {activeData ? activeData.subtitle : 'Hover to explore'}
        </p>
      </header>

      {/* Cards */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <div className="card-track" style={{ display: 'flex', height: '100%' }}>
          {[...factions, ...factions].map((faction, index) => (
            <FactionCard
              key={`${faction.id}-${index}`}
              faction={faction}
              index={index % factions.length}
              isActive={activeKey === `${faction.id}-${index}`}
              isInactive={activeKey !== null && activeKey !== `${faction.id}-${index}`}
              onHover={() => setActiveKey(`${faction.id}-${index}`)}
              onLeave={() => setActiveKey(null)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
