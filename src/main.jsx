import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StrategyMap from './StrategyMap.jsx'
import AuthGate from './AuthGate.jsx'

function Root() {
  const raw = typeof window !== 'undefined' ? window.location.pathname : '/'
  const path = raw.replace(/\/+$/, '') || '/'
  if (path === '/strategy') return <StrategyMap />
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthGate>
      <Root />
    </AuthGate>
  </StrictMode>,
)
