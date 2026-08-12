import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryCategories, galleryItems } from '../data/gallery.js'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  useEffect(() => {
    setOpenIndex(null)
  }, [active])

  useEffect(() => {
    const onKey = (e) => {
      if (openIndex === null) return
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % filtered.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, filtered.length])

  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">
        <p className="gallery-intro">A look at treatment outcomes across our most-requested procedures. Demo images shown for now.</p>

        <div className="gallery-filters" role="tablist" aria-label="Filter gallery by treatment">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`gallery-filter ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              className="gallery-item"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="gallery-item-overlay">
                <span>{item.category}</span>
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && filtered[openIndex] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={filtered[openIndex].image} alt={filtered[openIndex].title} />
              <div className="lightbox-caption">
                <span>{filtered[openIndex].category}</span>
                <p>{filtered[openIndex].title}</p>
              </div>
              <button className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Close">
                <X size={20} />
              </button>
              <button
                className="lightbox-nav prev"
                aria-label="Previous image"
                onClick={() => setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length)}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="lightbox-nav next"
                aria-label="Next image"
                onClick={() => setOpenIndex((i) => (i + 1) % filtered.length)}
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
