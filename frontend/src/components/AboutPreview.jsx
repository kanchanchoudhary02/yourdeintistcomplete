import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { clinic } from '../data/clinic.js'

export default function AboutPreview() {
  return (
    <section id="about" className="about section-pad">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop"
            alt="Premium dental veneers smile makeover result at Your Dentist, Malviya Nagar, Jaipur"
          />
          <div className="about-badge">
            <ShieldCheck size={20} />
            <span>
              IDA Member Clinic
              <small>Trusted dental care since day one</small>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">About the clinic</span>
          <h2>Compassionate Dentistry. Exceptional Results.</h2>
          <p className="about-lead">
            Your Dentist is a premium dental clinic in {clinic.addressShort}, built around careful diagnosis,
            modern procedures and a genuinely comfortable patient experience — not rushed check-ups.
          </p>
          <p className="about-body">
            Led by a dental surgeon with {clinic.yearsExperience}+ years of experience, the clinic combines
            cosmetic and restorative dentistry under one roof, so every treatment plan is personalized to how
            you actually live and smile.
          </p>

          <Link to="/about" className="btn btn-outline">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
