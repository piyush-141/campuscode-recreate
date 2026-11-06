import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  { n: '01', title: 'DISCOVER', desc: 'Find a challenge that makes you want to build.' },
  { n: '02', title: 'TEAM UP',  desc: 'Find people who share your ambition.' },
  { n: '03', title: 'BUILD',    desc: 'Turn your idea into something people can use.' },
  { n: '04', title: 'SHIP',     desc: 'Submit your work and take it to the arena.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="hiw section" ref={ref} id="how-it-works">
      <div className="container">

        {/* Header */}
        <motion.div
          className="hiw-header"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hiw-heading"><span>03</span> HOW IT WORKS</h2>
          <p className="lbl hiw-count">FROM IDEA<br />TO IMPACT.</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="hiw-grid"
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((s) => (
            <motion.div key={s.n} className="hiw-card" variants={item}>
              <span className="hiw-num">{s.n}</span>
              <div className="hiw-divider" />
              <h3 className="hiw-title">{s.title}</h3>
              <p className="hiw-desc">{s.desc}</p>
              <span className="hiw-arrow" aria-hidden="true">↗</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
