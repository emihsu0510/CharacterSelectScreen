function AvatarPlaceholder({ color }) {
  return (
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '160px', opacity: 0.9 }}>
      <circle cx="60" cy="45" r="30" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="45" r="18" fill={color} opacity="0.25" />
      <path d="M20 180 C20 130 40 110 60 105 C80 110 100 130 100 180Z"
        fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="45" r="6" fill={color} opacity="0.9" />
    </svg>
  )
}

function FactionCard({ faction, index, isActive, isInactive, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        width: '38vw',
        flexShrink: 0,
        transition: `opacity var(--transition), filter var(--transition)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '0',
        paddingLeft: '4vw',
        paddingRight: '4vw',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'visible',
        opacity: isInactive ? 0.6 : 1,
        transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >


      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at 50% 80%, ${faction.glow} 0%, transparent 65%)`,
        opacity: isActive ? 1 : 0,
        transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: 'none',
      }} />

      {/* Avatar */}
      <div
        className={faction.image ? '' : 'avatar-float'}
        style={{
          animationDelay: `${index * 0.8}s`,
          animationPlayState: isActive ? 'paused' : 'running',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{
          transform: isActive ? 'scale(1.05) translateY(-10px)' : 'scale(0.95)',
          transformOrigin: 'bottom center',
          transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          filter: 'none',
          display: 'inline-block',
        }}>
          {faction.image ? (
            <img
              src={faction.image}
              alt={faction.label}
              className={isActive ? 'avatar-power' : ''}
              style={{
                width: '145%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                imageRendering: 'high-quality',
                marginLeft: '-22%',
              }}
            />
          ) : (
            <AvatarPlaceholder color={faction.accent} />
          )}
        </div>

      </div>

      {/* Label — only visible on hover */}
      <div style={{
        position: 'absolute',
        bottom: '3vh',
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 2,
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity var(--transition), transform var(--transition)`,
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.5rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: faction.accent,
          whiteSpace: 'nowrap',
        }}>
          {faction.label}
        </h2>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 400,
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(45,27,94,0.5)',
          marginTop: '0.4rem',
        }}>
          {faction.descriptor}
        </p>
      </div>
    </div>
  )
}

export default FactionCard
