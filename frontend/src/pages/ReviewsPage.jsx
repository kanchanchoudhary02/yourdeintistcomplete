import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import Reviews from '../components/Reviews.jsx'

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Patient Reviews | Your Dentist, Malviya Nagar, Jaipur"
        description="Read patient reviews for Your Dentist, Malviya Nagar, Jaipur — rated 4.8/5 across 374+ Google Reviews for implants, RCT, smile designing and more."
      />
      <PageHero eyebrow="Patient reviews" title="What Our Patients Say" crumb="Reviews" />
      <Reviews />
    </>
  )
}
