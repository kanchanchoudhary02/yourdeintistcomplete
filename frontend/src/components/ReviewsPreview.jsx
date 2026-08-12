import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews.js'
import { clinic } from '../data/clinic.js'

const preview = reviews.slice(0, 3)

export default function ReviewsPreview() {
  return (
    <section id="reviews" className="reviews section-pad">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Patient reviews</span>
          <h2>What Our Patients Say</h2>
          <span className="badge reviews-badge">
            <Star size={14} fill="currentColor" strokeWidth={0} />
            Rated {clinic.rating}/5 by {clinic.reviewCount}+ Google Reviews
          </span>
        </div>

        <div className="reviews-grid">
          {preview.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card review-card-compact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Quote className="review-quote-icon" size={24} strokeWidth={1.5} />
              <div className="stars" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={15} fill={idx < r.rating ? 'currentColor' : 'none'} strokeWidth={idx < r.rating ? 0 : 1.5} />
                ))}
              </div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="review-author">
                <span>{r.name}</span>
                <span className="review-google">Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/reviews" className="btn btn-outline">
            View All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
