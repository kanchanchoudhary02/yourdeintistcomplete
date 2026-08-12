import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { doctor, clinic } from '../data/clinic.js'

export default function DoctorPreview() {
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
          <p className="doctor-bio">
            {clinic.yearsExperience}+ years of clinical experience across implants, cosmetic dentistry and
            full-mouth rehabilitation — with a reputation for smile designs that look natural.
          </p>

          <span className="badge doctor-badge">
            <BadgeCheck size={15} />
            BDS · Implantologist · Member, IDA
          </span>

          <div className="doctor-cta">
            <Link to="/about" className="btn btn-primary">
              Read Full Profile <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
