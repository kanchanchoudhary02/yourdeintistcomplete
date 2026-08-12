import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { clinic } from '../data/clinic.js'

function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="stat-num">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const items = [
  { to: clinic.yearsExperience, suffix: '+', label: 'Years Experience' },
  { to: clinic.rating, suffix: '', decimals: 1, label: 'Google Rating' },
  { to: clinic.trustedPatients, suffix: '+', label: 'Trusted Patients' },
  { to: clinic.serviceCount, suffix: '+', label: 'Dental Services' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {items.map((it, i) => (
          <motion.div
            className="stat"
            key={it.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Counter to={it.to} suffix={it.suffix} decimals={it.decimals || 0} />
            <span className="stat-label">{it.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
