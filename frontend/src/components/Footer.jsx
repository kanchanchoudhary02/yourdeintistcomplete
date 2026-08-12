import { Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { clinic } from '../data/clinic.js'
import { services } from '../data/services.js'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

const footerServices = services.slice(0, 6).map((s) => s.name)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="navbar-logo-mark">YD</span>
          <h3>{clinic.name}</h3>
          <p>{clinic.tagline}</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {footerServices.map((s) => (
              <li key={s}>
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={16} /> <a href={clinic.phoneTel}>{clinic.phoneDisplay}</a>
            </li>
            <li>
              <MessageCircle size={16} />{' '}
              <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <MapPin size={16} /> <span>{clinic.addressShort}</span>
            </li>
            <li>
              <Clock size={16} /> <span>{clinic.timings}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2026 {clinic.name}. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
