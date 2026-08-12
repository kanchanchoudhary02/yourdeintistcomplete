import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import ServicesPreview from '../components/ServicesPreview.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import DoctorPreview from '../components/DoctorPreview.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import ReviewsPreview from '../components/ReviewsPreview.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function Home() {
  return (
    <>
      <SEO
        title="Your Dentist | Dental Clinic in Malviya Nagar, Jaipur"
        description="Your Dentist in Malviya Nagar, Jaipur offers advanced dental care including dental implants, RCT, cosmetic dentistry, smile designing, braces and teeth whitening."
      />
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorPreview />
      <GalleryPreview />
      <ReviewsPreview />
      <AppointmentCTA />
    </>
  )
}
