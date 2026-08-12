import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>{crumb}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
