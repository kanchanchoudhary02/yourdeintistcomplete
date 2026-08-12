import { motion } from 'framer-motion'
import { Activity, Scissors, Clock3, Baby, AlignCenter, Cpu } from 'lucide-react'

const features = [
  { icon: Activity, title: 'Single Sitting Root Canal & Capping', text: 'Pain-free RCT and capping completed in one visit, so you leave with the treatment done.' },
  { icon: Scissors, title: 'Wisdom Tooth Expert', text: 'Careful, modern extractions for even the most complex wisdom tooth cases.' },
  { icon: Clock3, title: 'One Day Dentistry', text: 'Advanced procedures planned and completed in a single, efficient appointment.' },
  { icon: Baby, title: 'Master in Pediatric Dentistry', text: 'Gentle, specialised care that keeps young patients calm and comfortable.' },
  { icon: AlignCenter, title: 'Invisible Aligners', text: 'Straighten your smile discreetly with custom, nearly invisible aligners.' },
  { icon: Cpu, title: 'Fully Digital Dental Clinic', text: 'Digital scans, imaging and planning for precise, modern treatment.' },
]

export default function WhyChooseUs() {
  return (
    <section className="why section-pad">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why patients choose us</span>
          <h2>Why Patients Choose Your Dentist</h2>
        </div>

        <div className="why-grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                className="why-card"
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              >
                <span className="why-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
