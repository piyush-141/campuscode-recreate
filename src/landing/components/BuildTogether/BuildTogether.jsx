import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import campusVideo from '../../../assets/what-is-campuscode.mp4'
import './BuildTogether.css'

const wordReveal = (d = 0) => ({
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: d } },
})

export default function BuildTogether() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <section className="bt section" ref={ref}>
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="bt-header"
          variants={up(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="lbl">// The Platform</p>
          <p className="lbl bt-step">01 / 04</p>
        </motion.div>

        {/* ── Heading ── */}
        <div className="bt-heading">
          {[
            { text: 'BUILD',     outline: false, delay: 0.08 },
            { text: 'TOGETHER.', outline: true,  delay: 0.17 },
          ].map((line) => (
            <div key={line.text} className="bt-line">
              <motion.span
                className={`bt-word${line.outline ? ' bt-word-out' : ''}`}
                variants={wordReveal(line.delay)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        {/* ── Video player ── */}
        <motion.div
          className={`bt-player${hovered ? ' bt-player--hovered' : ''}`}
          variants={up(0.28)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <video className="bt-video" src={campusVideo} autoPlay muted loop playsInline aria-label="CampusCode experience" />

          {/* Corner marks */}
          <div className="bt-corner bt-corner-tl" />
          <div className="bt-corner bt-corner-tr" />
          <div className="bt-corner bt-corner-bl" />
          <div className="bt-corner bt-corner-br" />

        </motion.div>

        {/* ── Footer row ── */}
        <motion.div
          className="bt-footer"
          variants={up(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="bt-footer-txt">WATCH THE STORY</p>
          <p className="bt-footer-txt">PLAYS AS YOU SCROLL ↗</p>
        </motion.div>
      </div>
    </section>
  )
}
