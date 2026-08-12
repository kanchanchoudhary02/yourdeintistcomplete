import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { reviews } from '../data/reviews.js'
import { clinic } from '../data/clinic.js'

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (d) => {
    setDir(d)
    setIndex((i) => (i + d + reviews.length) % reviews.length)
  }

  const r = reviews[index]

  return (
    <section id="reviews" className="reviews section-pad">
      <div className="container">
        <div className="section-head center">
          <span className="badge reviews-badge">
            <Star size={14} fill="currentColor" strokeWidth={0} />
            Rated {clinic.rating}/5 by {clinic.reviewCount}+ Google Reviews
          </span>
        </div>

        <div className="reviews-slider">
          <button className="reviews-nav" onClick={() => go(-1)} aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>

          <div className="reviews-track">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                className="review-card"
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <Quote className="review-quote-icon" size={28} strokeWidth={1.5} />
                <div className="stars" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < r.rating ? 'currentColor' : 'none'} strokeWidth={i < r.rating ? 0 : 1.5} />
                  ))}
                </div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">
                  <span>{r.name}</span>
                  <span className="review-google">Google Review</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="reviews-nav" onClick={() => go(1)} aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="reviews-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`reviews-dot ${i === index ? 'active' : ''}`}
              onClick={() => {
                setDir(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="reviews-grid reviews-grid-all">
          {reviews.map((rv) => (
            <div key={rv.name} className="review-card review-card-compact">
              <Quote className="review-quote-icon" size={22} strokeWidth={1.5} />
              <div className="stars" aria-label={`${rv.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill={idx < rv.rating ? 'currentColor' : 'none'} strokeWidth={idx < rv.rating ? 0 : 1.5} />
                ))}
              </div>
              <p>&ldquo;{rv.text}&rdquo;</p>
              <div className="review-author">
                <span>{rv.name}</span>
                <span className="review-google">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
