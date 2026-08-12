import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import Gallery from '../components/Gallery.jsx'

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | Your Dentist, Malviya Nagar, Jaipur"
        description="Browse before & after results from Your Dentist, Malviya Nagar, Jaipur — smile designing, teeth whitening, dental implants and cosmetic dentistry outcomes."
      />
      <PageHero eyebrow="Real results" title="Our Dental Gallery" crumb="Gallery" />
      <Gallery />
    </>
  )
}
