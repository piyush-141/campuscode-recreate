import './Navbar.css'
import logoMark from '../../../assets/logo.png'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label="CampusCode home">
          <img className="nav-logo-mark" src={logoMark} alt="" />
          <span className="nav-logo-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a><a href="#how-it-works">How it works</a><a href="#arena">Hackathons</a><a href="#network">Community</a>
        </nav>
        <div className="nav-right"><a className="nav-login" href="/login">LOGIN</a><a href="/login" className="nav-cta">JOIN CAMPUSCODE <span>↗</span></a></div>
      </div>
    </header>
  )
}
