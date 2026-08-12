import { motion } from 'framer-motion'

/**
 * The site's signature device: a single continuous curve that reads as an
 * abstracted smile arc / dental arch. It draws itself once in the hero,
 * then reappears as a quiet divider between sections, tying every part of
 * the page back to "smile designing" without illustrating a literal tooth.
 */
export default function SmileLine({ variant = 'divider', className = '' }) {
  if (variant === 'hero') {
    return (
      <svg
        className={className}
        viewBox="0 0 640 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d="M8 40 C 120 40, 150 190, 320 190 C 490 190, 520 40, 632 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.circle
          cx="320"
          cy="190"
          r="4.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
      </svg>
    )
  }

  return (
    <svg
      className={`divider-line ${className}`}
      viewBox="0 0 1200 40"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 8 C 220 8, 260 32, 600 32 C 940 32, 980 8, 1200 8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
