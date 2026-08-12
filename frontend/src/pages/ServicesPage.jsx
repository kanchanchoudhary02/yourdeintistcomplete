import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import Services from '../components/Services.jsx'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Dental Services | Your Dentist, Malviya Nagar, Jaipur"
        description="Explore all 12 dental services at Your Dentist, Malviya Nagar, Jaipur — implants, RCT, teeth whitening, smile designing, Invisalign, braces, cosmetic dentistry and more."
      />
      <PageHero eyebrow="What we treat" title="Our Dental Services" crumb="Services" />
      <Services />
    </>
  )
}
