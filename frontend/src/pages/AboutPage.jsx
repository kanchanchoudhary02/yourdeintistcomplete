import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import About from '../components/About.jsx'
import Doctor from '../components/Doctor.jsx'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Your Dentist, Malviya Nagar, Jaipur"
        description="Learn about Your Dentist in Malviya Nagar, Jaipur — our patient-first philosophy, modern dental care, and lead dentist Dr. Ruby Ladha's 18+ years of experience."
      />
      <PageHero eyebrow="Who we are" title="About Your Dentist" crumb="About" />
      <About />
      <Doctor />
    </>
  )
}
