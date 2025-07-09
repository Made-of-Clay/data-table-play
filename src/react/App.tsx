import React from 'react'

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginTop: '2rem'
    }}>
      <h1 style={{ 
        color: '#333', 
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        React Page
      </h1>
      <div style={{ marginBottom: '2rem' }}>
        <p>This is the React implementation using TypeScript.</p>
        <p>This page is served independently and doesn't load Vue or native JS assets.</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#61dafb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}

export default App
