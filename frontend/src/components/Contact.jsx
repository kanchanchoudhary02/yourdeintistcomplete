import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { clinic } from '../data/clinic.js'

export default function Contact() {
  return (
    <motion.div
      className="contact-info"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">Visit the clinic</span>
      <h2>{clinic.name}</h2>

      <ul className="contact-details">
        <li>
          <MapPin size={19} />
          <span>
            {clinic.addressLines.map((line) => (
              <span key={line} style={{ display: 'block' }}>
                {line}
              </span>
            ))}
          </span>
        </li>
        <li>
          <Phone size={19} />
          <a href={clinic.phoneTel}>{clinic.phoneDisplay}</a>
        </li>
        <li>
          <Clock size={19} />
          <span>{clinic.timings}</span>
        </li>
      </ul>

      <div className="contact-cta">
        <a href={clinic.phoneTel} className="btn btn-primary">
          <Phone size={16} /> Call Now
        </a>
        <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>

      <div className="contact-map">
        <iframe
          title="Your Dentist clinic location on Google Maps"
          src={clinic.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  )
}
