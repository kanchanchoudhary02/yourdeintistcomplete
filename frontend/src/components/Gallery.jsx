import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryCategories, galleryItems } from '../data/gallery.js'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)

  // Filter images according to selected category
  const filtered =
    active === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === active)

  // Close lightbox when category changes
  useEffect(() => {
    setOpenIndex(null)
  }, [active])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (openIndex === null || filtered.length === 0) return

      if (e.key === 'Escape') {
        setOpenIndex(null)
      }

      if (e.key === 'ArrowRight') {
        setOpenIndex((current) => {
          if (current === null) return 0
          return (current + 1) % filtered.length
        })
      }

      if (e.key === 'ArrowLeft') {
        setOpenIndex((current) => {
          if (current === null) return 0
          return (current - 1 + filtered.length) % filtered.length
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [openIndex, filtered.length])

  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">

        {/* Intro */}
        <p className="gallery-intro">
          A look at treatment outcomes across our most-requested procedures.
          Demo images shown for now.
        </p>

        {/* Category Filters */}
        <div
          className="gallery-filters"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              className={`gallery-filter ${
                active === category ? 'active' : ''
              }`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <motion.button
                key={`${item.category}-${item.image}-${index}`}
                type="button"
                className="gallery-item"
                onClick={() => setOpenIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: '-40px',
                }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.07,
                }}
                aria-label={`View ${item.title}`}
              >
                {/* Image */}
<img
  src={item.image}
  alt={item.title}
  loading="lazy"
  className={`gallery-img ${
    item.category === 'Dr. Rubby' ? 'doctor-img' : ''
  }`}
/>
                {/* Overlay */}
                <span className="gallery-item-overlay">
                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <span className="gallery-title">
                    {item.title}
                  </span>
                </span>
              </motion.button>
            ))
          ) : (
            <div className="gallery-empty">
              <p>No images available in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
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
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Lightbox Image */}
              <img
                src={filtered[openIndex].image}
                alt={filtered[openIndex].title}
                className="lightbox-image"
              />

              {/* Caption */}
              <div className="lightbox-caption">
                <span>
                  {filtered[openIndex].category}
                </span>

                <p>
                  {filtered[openIndex].title}
                </p>
              </div>

              {/* Close */}
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setOpenIndex(null)}
                aria-label="Close image"
              >
                <X size={20} />
              </button>

              {/* Previous */}
              {filtered.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav prev"
                  aria-label="Previous image"
                  onClick={() =>
                    setOpenIndex(
                      (current) =>
                        (current - 1 + filtered.length) %
                        filtered.length
                    )
                  }
                >
                  <ChevronLeft size={26} />
                </button>
              )}

              {/* Next */}
              {filtered.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav next"
                  aria-label="Next image"
                  onClick={() =>
                    setOpenIndex(
                      (current) =>
                        (current + 1) % filtered.length
                    )
                  }
                >
                  <ChevronRight size={26} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}