import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X, Loader2 } from 'lucide-react'
import { services } from '../data/services.js'

// Backend API endpoint
const APPOINTMENTS_API_URL =
  "https://yourdeintistcomplete.onrender.com/api/appointments"

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  service: '',
  message: '',
}

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = (field) => (e) => {
    setForm((f) => ({
      ...f,
      [field]: e.target.value,
    }))
  }

  const validate = () => {
    const next = {}

    // Name
    if (!form.name.trim()) {
      next.name = 'Please enter your full name.'
    } else if (form.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters.'
    }

    // Phone - exactly matches backend validation
    if (!form.phone.trim()) {
      next.phone = 'Phone number is required.'
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      next.phone =
        'Please enter a valid 10-digit Indian phone number.'
    }

    // Email
    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = 'Please enter a valid email address.'
    }

    // Date
    if (!form.date) {
      next.date = 'Please select a preferred date.'
    }

    // Time
    if (!form.time) {
      next.time = 'Please select a preferred time.'
    }

    // Service
    if (!form.service) {
      next.service = 'Please select a service.'
    }

    setErrors(next)

    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    setSubmitError('')

    if (!validate()) {
      return
    }

    /*
      Combine selected date + time.

      Example:
      date = 2026-08-15
      time = 10:30

      preferredDate becomes:
      2026-08-15T10:30:00.000Z
    */

    const preferredDate = new Date(
      `${form.date}T${form.time}`
    ).toISOString()

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      preferredDate,
      message: form.message.trim(),
    }

    console.log('Sending appointment:', payload)

    try {
      setSubmitting(true)

      const res = await fetch(APPOINTMENTS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // Try to read backend response
      const data = await res.json().catch(() => ({}))

      console.log('Backend response:', data)

      if (!res.ok) {
        /*
          Your backend returns:
          {
            success: false,
            error: '...'
          }
        */

        throw new Error(
          data.error ||
            data.message ||
            'Something went wrong. Please try again.'
        )
      }

      // Success
      setSubmitted(true)

      setForm(initialForm)
      setErrors({})
    } catch (err) {
      console.error('Appointment error:', err)

      setSubmitError(
        err.message ||
          'Unable to reach the server. Please try again shortly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <motion.form
        className="appointment-form card"
        onSubmit={onSubmit}
        noValidate
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
      >
        {/* Name + Phone */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Your full name"
            />

            {errors.name && (
              <span className="form-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={update('phone')}
              placeholder="9876543210"
            />

            {errors.phone && (
              <span className="form-error">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Email + Service */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">
              Email (optional)
            </label>

            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
            />

            {errors.email && (
              <span className="form-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="service">
              Select Service
            </label>

            <select
              id="service"
              value={form.service}
              onChange={update('service')}
            >
              <option value="">
                Choose a service
              </option>

              {services.map((s) => (
                <option
                  key={s.slug}
                  value={s.name}
                >
                  {s.name}
                </option>
              ))}
            </select>

            {errors.service && (
              <span className="form-error">
                {errors.service}
              </span>
            )}
          </div>
        </div>

        {/* Date + Time */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="date">
              Preferred Date
            </label>

            <input
              id="date"
              type="date"
              value={form.date}
              onChange={update('date')}
              min={
                new Date()
                  .toISOString()
                  .split('T')[0]
              }
            />

            {errors.date && (
              <span className="form-error">
                {errors.date}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="time">
              Preferred Time
            </label>

            <input
              id="time"
              type="time"
              value={form.time}
              onChange={update('time')}
            />

            {errors.time && (
              <span className="form-error">
                {errors.time}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="form-field">
          <label htmlFor="message">
            Message (optional)
          </label>

          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell us briefly what you need help with"
          />
        </div>

        {/* Backend error */}
        {submitError && (
          <span className="form-error">
            {submitError}
          </span>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-red appointment-submit"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Loader2
                size={16}
                className="spin"
              />
              Sending...
            </>
          ) : (
            'Request Appointment'
          )}
        </button>
      </motion.form>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSubmitted(false)
            }
          >
            <motion.div
              className="modal-card"
              initial={{
                opacity: 0,
                y: 16,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <button
                className="modal-close"
                onClick={() =>
                  setSubmitted(false)
                }
                aria-label="Close"
                type="button"
              >
                <X size={18} />
              </button>

              <CheckCircle2
                size={40}
                className="modal-icon"
              />

              <h3>
                Thank you!
              </h3>

              <p>
                Your appointment request has
                been received. Our team will
                reach out shortly to confirm
                your slot.
              </p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  setSubmitted(false)
                }
                type="button"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}