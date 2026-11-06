import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './GreatIdeas.css'

const wordReveal = (d = 0) => ({
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d } },
})

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: d } },
})

export default function GreatIdeas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="gi section" ref={ref}>
      <div className="gi-watermark" aria-hidden="true">CAMPUSCODE</div>
      {/* Blobs */}
      <div className="gi-blob gi-blob-1" />
      <div className="gi-blob gi-blob-2" />

      <div className="container gi-inner">

        <motion.p
          className="lbl gi-lbl"
          variants={up(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          // The Mission
        </motion.p>

        <div className="gi-heading">
          {[
            { text: 'GREAT',         outline: false, delay: 0.08 },
            { text: 'IDEAS',         outline: false, delay: 0.16 },
            { text: 'NEED BUILDERS.', outline: true,  delay: 0.24 },
          ].map((line) => (
            <div key={line.text} className="gi-line">
              <motion.span
                className={`gi-word${line.outline ? ' gi-word-out' : ''}`}
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
          className="gi-desc"
          variants={up(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Your community is full of people with ideas.
          <br />
          CampusCode puts great ideas somewhere for you.
        </motion.p>

      </div>
    </section>
  )
}
