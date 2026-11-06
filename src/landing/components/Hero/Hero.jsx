import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-grid" />
      <svg className="hero-orbits" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true">
        <path d="M70 90 C300 260 440 90 650 230 S900 420 1120 250 S1370 40 1530 90" />
        <path d="M-50 540 C180 350 300 500 520 410 S790 160 1000 210 S1270 560 1450 390 S1560 300 1660 380" />
        <path d="M280 760 C440 550 610 590 800 470 S1110 390 1320 500 S1480 620 1600 520" />
        <circle cx="735" cy="290" r="6" /><circle cx="1170" cy="290" r="6" />
        <circle cx="550" cy="465" r="6" /><circle cx="1405" cy="545" r="6" />
      </svg>
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow"><span /> THE DIGITAL HOME FOR STUDENT INNOVATION</p>
          <p className="hero-index">CAMPUSCODE / 001</p>
          <div className="hero-heading" aria-label="Build. Compete. Ship.">
            <div className="hero-line"><span className="hero-word hero-word-solid">BUILD</span></div>
            <div className="hero-line"><span className="hero-word hero-word-outline">COMPETE</span></div>
            <div className="hero-line"><span className="hero-word hero-word-solid">SHIP.</span></div>
          </div>
          <div className="hero-bottom">
            <p className="hero-sub">A digital arena for students<br />who don&apos;t just have ideas.<br />They build them.</p>
            <a href="#arena" className="hero-btn">EXPLORE HACKATHONS <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
      <span className="hero-page-count">01 / 05</span>
    </section>
  )
}
