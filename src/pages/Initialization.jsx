import { useEffect } from 'react'
import './Initialization.css'

export default function Initialization() {
  useEffect(() => {
    const redirect = window.setTimeout(() => {
      window.location.replace('/dashboard')
    }, 1600)
    return () => window.clearTimeout(redirect)
  }, [])

  return (
    <main className="initialization-screen" aria-label="CampusCode is initializing">
      <div className="initialization-grid" />
      <header className="initialization-header">
        <a className="initialization-brand" href="/" aria-label="CampusCode home"><span className="initialization-brand-mark"><i /><i /><i /></span><span><b>CAMPUSCODE</b><small>HACKATHON ARENA</small></span></a>
        <span className="initialization-secure"><i /> SECURE CONNECTION</span>
      </header>

      <section className="initialization-center" aria-live="polite">
        <div className="initialization-mark" aria-hidden="true"><i /><i /><i /></div>
        <h1>CAMPUSCODE</h1>
        <p className="initialization-sync">SYNCING CAMPUSCODE.</p>
        <div className="initialization-progress-label">
          <span>SYSTEM INITIALIZATION</span>
          <strong>100%</strong>
        </div>
        <div className="initialization-track"><span /></div>
        <div className="initialization-access"><span>ACCESS LEVEL</span><b>STUDENT</b></div>
      </section>

      <footer className="initialization-footer">
        <span>CAMPUSCODE © 2026</span>
        <span>AUTH / INITIALIZATION</span>
        <span><i /> ALL SYSTEMS OPERATIONAL</span>
      </footer>
    </main>
  )
}
