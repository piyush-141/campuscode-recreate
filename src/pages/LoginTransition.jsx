import { useEffect } from 'react'
import './LoginTransition.css'

export default function LoginTransition() {
  useEffect(() => {
    const timer = window.setTimeout(() => window.location.replace('/initializing'), 2000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="bus-transition" aria-label="Connecting to CampusCode">
      <div className="bus-transition-grid" />
      <div className="bus-track">
        <div className="bus-connection-dots" aria-hidden="true"><i /><i /><i /></div>
        <div className="bus-label bus-label-ready">Zzz <b>READY</b></div>
        <div className="bus-label bus-label-connecting">CONNECTING</div>
        <div className="campus-bus" aria-hidden="true">
          <span className="campus-bus-mark"><i /><i /><i /></span>
          <i className="campus-bus-wheel campus-bus-wheel-one" />
          <i className="campus-bus-wheel campus-bus-wheel-two" />
        </div>
        <i className="bus-stop" aria-hidden="true" />
      </div>
      <p className="bus-transition-caption">CAMPUSCODE · SECURE CONNECTION</p>
    </main>
  )
}
