import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './FinalCTA.css'

const wordReveal = (d = 0) => ({
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: d } },
})

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta section" ref={ref} id="join">
      {/* Blobs */}
      <div className="cta-blob cta-blob-1" />
      <div className="cta-blob cta-blob-2" />
      <div className="cta-grid" />
      <div className="cta-orbit"><span>READY?</span></div>

      <div className="container cta-inner">

        <div className="cta-heading">
          {[
            { text: 'YOUR NEXT',     outline: false, delay: 0 },
            { text: 'PROJECT',       outline: true,  delay: 0.1 },
            { text: 'STARTS HERE.',  outline: false, delay: 0.2 },
          ].map((line) => (
            <div key={line.text} className="cta-line">
              <motion.span
                className={`cta-word${line.outline ? ' cta-word-out' : ''}`}
                variants={wordReveal(line.delay)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.a
          href="/login"
          className="cta-btn"
          variants={up(0.38)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          JOIN CAMPUSCODE <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  )
}
