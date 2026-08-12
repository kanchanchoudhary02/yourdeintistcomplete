import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { clinic } from '../data/clinic.js'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img
            src="/d-logo.png"
            alt={`${clinic.name} logo`}
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">
            {clinic.name}
            <span>Dental Care · {clinic.addressShort}</span>
          </span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={clinic.phoneTel} className="navbar-phone" aria-label={`Call ${clinic.phoneDisplay}`}><span className="navbar-phone-icon"><Phone size={16}/></span><span>{clinic.phoneDisplay}</span></a>
          <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="navbar-whatsapp" aria-label="Chat on WhatsApp"><MessageCircle size={18}/></a>
          <Link to="/contact" className="btn btn-primary btn-sm">Book Appointment</Link>
        </div>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <nav className="container navbar-mobile-links" aria-label="Mobile">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}

              <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Book Appointment
              </Link>

              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}