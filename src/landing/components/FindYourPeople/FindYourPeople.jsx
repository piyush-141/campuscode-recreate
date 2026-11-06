import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './FindYourPeople.css'

const wordReveal = (d = 0) => ({
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const profiles = [
  { role: 'Developer', color: '#7B5EFF', char: 'D' },
  { role: 'Designer',  color: '#06B6D4', char: 'D' },
  { role: 'Builder',   color: '#10B981', char: 'B' },
  { role: 'Hacker',    color: '#F59E0B', char: 'H' },
]

function NetworkCard() {
  return (
    <div className="fyp-card">
      {/* Card header */}
      <div className="fyp-card-head">
        <div className="fyp-badge">CC</div>
        <div>
          <span className="fyp-badge-name">CampusCode</span>
          <span className="fyp-badge-sub">Your Network</span>
        </div>
      </div>

      {/* Profile rows */}
      <div className="fyp-profiles">
        {profiles.map((p) => (
          <div key={p.role} className="fyp-profile">
            <div className="fyp-avatar" style={{ background: p.color }}>
              {p.char}
            </div>
            <div className="fyp-bars">
              <div className="fyp-bar fyp-bar-w" />
              <div className="fyp-bar fyp-bar-n" />
            </div>
            <span className="fyp-role">{p.role}</span>
          </div>
        ))}
      </div>

      {/* Deco elements */}
      <span className="fyp-deco fyp-deco-1">+</span>
      <span className="fyp-deco fyp-deco-2">+</span>
      <span className="fyp-deco fyp-deco-3">×</span>
      <span className="fyp-deco fyp-deco-4">+</span>
    </div>
  )
}

export default function FindYourPeople() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="fyp section" ref={ref} id="network">
      <div className="container fyp-inner">

        {/* Left */}
        <div className="fyp-left">
          <motion.p
            className="lbl fyp-lbl"
            variants={up(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            // The Network
          </motion.p>

          <div className="fyp-heading">
            {[
              { text: 'FIND',    outline: false, delay: 0.08 },
              { text: 'YOUR',    outline: false, delay: 0.16 },
              { text: 'PEOPLE.', outline: true, delay: 0.24 },
            ].map((line) => (
              <div key={line.text} className="fyp-line">
                <motion.span
                  className={`fyp-word${line.outline ? ' fyp-word-out' : ''}`}
                  variants={wordReveal(line.delay)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="fyp-desc"
            variants={up(0.38)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Build with developers.<br />Think with designers.<br />Compete with builders.
          </motion.p>

          <motion.a
            href="/login"
            className="fyp-link"
            variants={up(0.46)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Join the network
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Right — orbit mark */}
        <motion.div
          className="fyp-right"
          variants={up(0.22)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="fyp-orbit"><span className="fyp-orbit-ring"/><span className="fyp-orbit-ring"/><span className="fyp-orbit-dot d1"/><span className="fyp-orbit-dot d2"/><span className="fyp-orbit-dot d3"/><span className="fyp-orbit-dot d4"/><span className="fyp-orbit-cc">CC</span></div>
        </motion.div>
      </div>
    </section>
  )
}
