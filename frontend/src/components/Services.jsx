import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services.js'
import SmileLine from './SmileLine.jsx'

export default function Services() {
  return (
    <section id="services" className="services section-pad">
      <SmileLine className="section-divider" />
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What we treat</span>
          <h2>Complete Dental Care, One Clinic</h2>
          <p>
            Twelve specialised services covering everything from a routine clean-up to complex, full-mouth
            restorative work — all planned and delivered under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                className="service-card"
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              >
                <span className="service-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <Link to="/contact" className="service-link">
                  Enquire Now <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
