import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import Contact from '../components/Contact.jsx'
import AppointmentForm from '../components/AppointmentForm.jsx'
import { clinic } from '../data/clinic.js'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Your Dentist, Malviya Nagar, Jaipur"
        description="Get in touch with Your Dentist in Malviya Nagar, Jaipur. Call, WhatsApp, or request an appointment online. Open daily till 8 PM."
      />
      <PageHero eyebrow="Get in touch" title="Book Your Appointment" crumb="Contact" />

      <section id="contact" className="contact-page section-pad">
        <div className="container contact-page-grid">
          <Contact />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-page-form"
          >
            <span className="eyebrow">Book your visit</span>
            <h2>Request an Appointment</h2>
            <p className="appointment-lead">
              Tell us a little about what you need and preferred time — our team will confirm your slot by
              phone or WhatsApp.
            </p>

            <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp appointment-wa">
              <MessageCircle size={18} /> Prefer WhatsApp? Message Us Instead
            </a>

            <AppointmentForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}
