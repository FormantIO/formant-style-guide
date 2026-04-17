import { useState, useEffect, useCallback } from 'react'

const ALLOWED_DOMAIN = 'formant.io'
const STORAGE_KEY = 'formant_auth_user'
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const SKIP_AUTH = import.meta.env.VITE_SKIP_AUTH === 'true'

function decodeJwtPayload(token) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(atob(base64))
}

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleCredentialResponse = useCallback((response) => {
    const payload = decodeJwtPayload(response.credential)
    const email = payload.email || ''
    const domain = email.split('@')[1]

    if (domain !== ALLOWED_DOMAIN) {
      setError(`Access restricted to @${ALLOWED_DOMAIN} accounts. You signed in as ${email}.`)
      setUser(null)
      localStorage.removeItem(STORAGE_KEY)
      return
    }

    const userData = {
      email,
      name: payload.name,
      picture: payload.picture,
      exp: payload.exp,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
    setUser(userData)
    setError(null)
  }, [])

  useEffect(() => {
    // Check for existing session
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.exp && parsed.exp * 1000 > Date.now()) {
          setUser(parsed)
          setLoading(false)
          return
        }
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (user || !CLIENT_ID) return

    // Load Google Identity Services
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: true,
        hosted_domain: ALLOWED_DOMAIN,
      })
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-btn'),
        {
          theme: 'filled_black',
          size: 'large',
          shape: 'rectangular',
          text: 'signin_with',
          width: 280,
        }
      )
      window.google.accounts.id.prompt()
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [user, handleCredentialResponse])

  const handleSignOut = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
    setError(null)
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect()
    }
  }

  // Skip auth entirely in development when VITE_SKIP_AUTH=true
  if (SKIP_AUTH) {
    return children
  }

  if (!CLIENT_ID) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <p style={styles.errorText}>
            Missing VITE_GOOGLE_CLIENT_ID environment variable. Add it to a .env file.
          </p>
        </div>
      </div>
    )
  }

  if (loading) return null

  if (user) {
    return (
      <>
        <div style={styles.userBadge}>
          {user.picture && <img src={user.picture} alt="" style={styles.avatar} referrerPolicy="no-referrer" />}
          <span style={styles.userName}>{user.name}</span>
          <button onClick={handleSignOut} style={styles.signOutBtn}>Sign out</button>
        </div>
        {children}
      </>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src="formant-logo-white.svg" alt="Formant" style={{ height: 48, marginBottom: 32 }} />
        <h2 style={styles.title}>Brand Style Guide</h2>
        <p style={styles.subtitle}>Sign in with your Formant Google account to continue.</p>
        {error && <p style={styles.errorText}>{error}</p>}
        <div id="google-signin-btn" style={{ marginTop: 24 }}></div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0A0F11',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '64px 48px',
    background: '#202428',
    border: '1px solid rgba(163,171,169,0.1)',
    borderRadius: 8,
    maxWidth: 400,
    width: '100%',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 24,
    fontWeight: 500,
    color: '#F2F3F4',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A3ABA9',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  errorText: {
    fontSize: 13,
    color: '#E8AB7F',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 1.5,
  },
  userBadge: {
    position: 'fixed',
    top: 16,
    right: 20,
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(32,36,40,0.9)',
    backdropFilter: 'blur(8px)',
    padding: '6px 12px',
    borderRadius: 20,
    border: '1px solid rgba(163,171,169,0.15)',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '50%',
  },
  userName: {
    fontSize: 12,
    color: '#A3ABA9',
    fontFamily: "'Inter', sans-serif",
  },
  signOutBtn: {
    background: 'none',
    border: 'none',
    color: '#A3ABA9',
    fontSize: 11,
    cursor: 'pointer',
    padding: '2px 6px',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.05em',
    opacity: 0.7,
  },
}
