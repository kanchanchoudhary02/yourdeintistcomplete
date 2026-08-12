import { Phone, MessageCircle } from 'lucide-react'
import { clinic } from '../data/clinic.js'

export default function FloatingActions() {
  return (
    <div className="floating-actions" role="group" aria-label="Quick contact">
      <a href={clinic.phoneTel} className="floating-btn floating-call" aria-label="Call the clinic">
        <Phone size={20} />
      </a>
      <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="floating-btn floating-whatsapp" aria-label="Message on WhatsApp">
        <MessageCircle size={22} />
      </a>
    </div>
  )
}
