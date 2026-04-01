import { useState } from 'react'

const celebrations = [
  "Nice one!",
  "Keep going!",
  "You're on fire!",
  "Unstoppable!",
  "Legendary!",
  "Are you even human?",
  "Click god.",
  "The button fears you.",
  "Okay we get it.",
  "Please touch grass.",
]

function App() {
  const [count, setCount] = useState(0)

  const message = count === 0
    ? 'Click the button!'
    : celebrations[Math.min(count - 1, celebrations.length - 1)]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '1.5rem',
      fontFamily: 'sans-serif',
      background: '#0f0f0f',
      color: '#fff',
    }}>
      <p style={{ fontSize: '1.25rem', color: '#aaa' }}>{message}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.25rem',
          cursor: 'pointer',
          background: '#7c3aed',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          transition: 'transform 0.1s, background 0.2s',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Click me
      </button>
      <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{count}</p>
      {count > 0 && (
        <p style={{ fontSize: '0.85rem', color: '#555' }}>
          {count} {count === 1 ? 'click' : 'clicks'} recorded
        </p>
      )}
    </div>
  )
}

export default App
