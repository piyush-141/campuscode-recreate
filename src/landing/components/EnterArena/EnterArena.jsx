import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './EnterArena.css'

const tracks = [
  {
    id: 'ai',
    n: '01',
    tag: 'Artificial Intelligence',
    title: 'AI INNOVATION',
    desc: 'Build intelligent solutions for problems that matter.',
    count: '840+',
    prize: '₹50,000',
  },
  {
    id: 'web',
    n: '02',
    tag: 'Web Development',
    title: 'FUTURE WEB',
    desc: 'Design and ship the next generation of digital experiences.',
    count: '1,200+',
    prize: '₹40,000',
  },
  {
    id: 'campus',
    n: '03',
    tag: 'Smart Technology',
    title: 'CAMPUS TECH',
    desc: 'Create technology that makes student life better.',
    count: '560+',
    prize: '₹30,000',
  },
]

const up = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: d } },
})

export default function EnterArena() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState(null)

  return (
    <section className="arena section" ref={ref} id="arena">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="arena-header"
          variants={up(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="arena-heading"><span>04</span> ENTER THE ARENA</h2>
          <a href="#arena" className="arena-more">VIEW ALL ↗</a>
        </motion.div>

        {/* ── Track list ── */}
        <div className="arena-list">
          {tracks.map((t, i) => (
            <motion.div
              key={t.id}
              className={`arena-row${open === t.id ? ' arena-row--open' : ''}`}
              variants={up(0.1 + i * 0.09)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              onClick={() => setOpen(open === t.id ? null : t.id)}
            >
              {/* Row main */}
              <div className="arena-main">
                <div className="arena-left">
                  <span className="arena-n">{t.n}</span>
                  <div className="arena-info">
                    <span className="arena-tag">{t.tag}</span>
                    <h3 className="arena-title">{t.title}</h3>
                  </div>
                </div>
                <p className="arena-inline-desc">{t.desc}</p>
                <span className={`arena-status arena-status-${t.id}`}>{t.id === 'ai' ? 'LIVE' : t.id === 'web' ? 'OPEN' : 'UPCOMING'}</span>
                <span className="arena-row-arrow">↗</span>
              </div>

              {/* Expandable detail */}
              <AnimatePresence initial={false}>
                {open === t.id && (
                  <motion.div
                    className="arena-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="arena-detail-inner">
                      <p className="arena-desc">{t.desc}</p>
                      <div className="arena-meta">
                        <div className="arena-prize">
                          <span className="arena-prize-lbl">Prize Pool</span>
                          <span className="arena-prize-val">{t.prize}</span>
                        </div>
                        <a href="/login" className="arena-cta" onClick={(e) => e.stopPropagation()}>
                          Register Now
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M2 6.5h9M8 3l3.5 3.5L8 10"
                              stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
