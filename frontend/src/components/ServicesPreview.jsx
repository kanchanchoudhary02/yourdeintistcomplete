import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '../data/services.js'
import SmileLine from './SmileLine.jsx'

const featured = services.slice(0, 6)

export default function ServicesPreview() {
  return (
    <section id="services" className="services section-pad">
      <SmileLine className="section-divider" />
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What we treat</span>
          <h2>Complete Dental Care, One Clinic</h2>
          <p>
            A look at our most-requested treatments — from routine check-ups to complete smile makeovers, all
            planned and delivered under one roof.
          </p>
        </div>

        <div className="services-grid">
          {featured.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                className="service-card"
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <span className="service-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <Link to="/services" className="service-link">
                  Learn More <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
