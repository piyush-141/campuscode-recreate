import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './WhatIs.css'

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const wordReveal = (d = 0) => ({
  hidden: { y: '100%' },
  visible: { y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: d } },
})

function CCBadge() {
  return (
    <div className="cc-wrap">
      {/* Outer ring */}
      <div className="cc-ring" />

      {/* Card */}
      <div className="cc-card">
        <div className="cc-card-inner">
          <span className="cc-text">CC</span>
        </div>
      </div>

      <span className="cc-orbit-label cc-orbit-label-1">01</span>
      <span className="cc-orbit-label cc-orbit-label-2">02</span>
      <span className="cc-orbit-label cc-orbit-label-3">03</span>
    </div>
  )
}

export default function WhatIs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="wi section" ref={ref} id="about">
      <div className="container wi-inner">

        {/* ── Left column ── */}
        <div className="wi-left">
          <motion.p
            className="lbl wi-lbl"
            variants={up(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <><span className="wi-dot" /> WHAT IS CAMPUSCODE?</>
          </motion.p>

          <div className="wi-heading">
            {['WHERE', 'STUDENTS', 'BUILD.'].map((w, i) => (
              <div key={w} className="wi-line">
                <motion.span
                  className={`wi-word${i === 2 ? ' wi-word-out' : ''}`}
                  variants={wordReveal(0.08 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {w}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="wi-desc"
            variants={up(0.35)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            CampusCode brings students, teams, organizers and
            hackathons into one connected ecosystem.
          </motion.p>

        </div>

        {/* ── Right: CC badge ── */}
        <motion.div
          className="wi-right"
          variants={up(0.18)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <CCBadge />
        </motion.div>
      </div>
    </section>
  )
}
