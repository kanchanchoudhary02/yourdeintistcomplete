import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { galleryItems } from '../data/gallery.js'

const preview = galleryItems.slice(0, 4)

export default function GalleryPreview() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Real results</span>
          <h2>Our Dental Gallery</h2>
          <p>A look at treatment outcomes across our most-requested procedures.</p>
        </div>

        <div className="gallery-grid gallery-grid-preview">
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="gallery-item-overlay">
                <span>{item.category}</span>
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/gallery" className="btn btn-outline">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
