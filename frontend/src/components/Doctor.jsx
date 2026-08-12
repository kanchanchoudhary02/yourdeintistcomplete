import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Anchor, Wand2, Stethoscope, BadgeCheck } from 'lucide-react'
import { doctor, clinic } from '../data/clinic.js'

const iconFor = [GraduationCap, Anchor, Wand2, Stethoscope, BadgeCheck]

export default function Doctor() {
  return (
    <section id="doctor" className="doctor section-pad">
      <div className="container doctor-grid">
        <motion.div
          className="doctor-visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="doctor-photo-frame">
            <img
              src="/doctor.jpeg"
              alt="Dr. Ruby Ladha, lead dentist at Your Dentist, Malviya Nagar"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">Meet Your Dentist</span>
          <h2>{doctor.name}</h2>
          <p className="doctor-bio">{doctor.bio}</p>

          <ul className="doctor-credentials">
            {doctor.credentials.map((c, i) => {
              const Icon = iconFor[i % iconFor.length]
              return (
                <li key={c}>
                  <Icon size={17} strokeWidth={1.7} />
                  {c}
                </li>
              )
            })}
          </ul>

          <div className="doctor-cta">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline">
              Ask a Question
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
