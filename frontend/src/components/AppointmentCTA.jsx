import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { clinic } from '../data/clinic.js'

export default function AppointmentCTA() {
  return (
    <section id="appointment" className="appointment-cta section-pad">
      <div className="container">
        <motion.div
          className="appointment-cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="eyebrow">Book your visit</span>
            <h2>Ready When You Are</h2>
            <p>
              Tell us what you need and your preferred time — our team will confirm your slot by phone or
              WhatsApp. {clinic.timings}.
            </p>
          </div>

          <div className="appointment-cta-actions">
            <Link to="/contact" className="btn btn-red">
              Book Appointment <ArrowRight size={16} />
            </Link>
            <a href={clinic.phoneTel} className="btn btn-outline appointment-cta-outline">
              <Phone size={16} /> Call Now
            </a>
            <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
