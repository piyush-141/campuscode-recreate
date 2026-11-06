import './Footer.css'
import logoMark from '../../../assets/logo.png'

const year = new Date().getFullYear()

const cols = {
  Product: ['About', 'Hackathons', 'How it works', 'Community'],
  Builders: ['Students', 'Teams', 'Organizers', 'Developers'],
  Guides: ['Hackathon Rules', 'FAQ', 'Support', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-top">

        {/* Brand */}
        <div className="foot-brand">
          <a href="/" className="foot-logo">
            <img className="foot-logo-mark" src={logoMark} alt="" />
            <span className="foot-logo-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span>
          </a>
          <p className="foot-tagline">
            The student hackathon arena.
            <br />
            You build the idea,<br />we run the competition.
          </p>
        </div>

        {/* Link columns */}
        <div className="foot-cols">
          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading} className="foot-col">
              <h4 className="foot-col-h">{heading}</h4>
              <ul className="foot-col-list">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="foot-col-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container foot-status"><span><i /> ALL SYSTEMS OPERATIONAL</span><a href="#terms">TERMS</a><a href="#privacy">PRIVACY</a><a href="#contact">CONTACT</a></div>

      {/* Giant typographic wordmark */}
      <div className="foot-wm" aria-hidden="true">
        <span>CampusCode</span>
      </div>
      <div className="container foot-bottom"><span>© {year} CAMPUSCODE</span><span>LEARN · BUILD · COMPETE · SHIP</span><span>CHENNAI · INDIA</span></div>
    </footer>
  )
}
