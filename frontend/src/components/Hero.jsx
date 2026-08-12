import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Check, ShieldCheck, Sparkles, Smile, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { icon: Smile, title: 'Natural Look', text: 'Smile that feels like you' },
  { icon: ShieldCheck, title: 'Durable & Long Lasting', text: 'Built for everyday confidence' },
  { icon: Sparkles, title: 'Stain Resistant', text: 'A brighter look for longer' },
  { icon: Check, title: 'Minimally Invasive', text: 'Precise, conservative care' },
]
const process = [
  { number: '01', title: 'Natural Tooth', type: 'natural' },
  { number: '02', title: 'Tooth Preparation', type: 'prepared' },
  { number: '03', title: 'Custom Veneer', type: 'veneer' },
  { number: '04', title: 'Perfect Result', type: 'result' },
]
export default function Hero() {
  return (
    <section id="home" className="hero hero-premium">
      <div className="hero-premium-bg" aria-hidden="true" />
      <div className="hero-light-orb hero-light-orb-one" aria-hidden="true" />
      <div className="hero-light-orb hero-light-orb-two" aria-hidden="true" />
      <div className="container hero-premium-inner">
        <motion.div className="hero-premium-copy" initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.11}}}}>
          <motion.div className="hero-premium-eyebrow" variants={{hidden:{opacity:0,y:14},visible:{opacity:1,y:0}}}>
            <span className="hero-eyebrow-icon"><ShieldCheck size={15}/></span>
            Advanced Dentistry &amp; Expert Care
          </motion.div>
          <motion.h1 variants={{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.65}}}}>
            <span className="hero-line">Transform</span>
            <span className="hero-line hero-blue">Your Smile</span>
            <span className="hero-line">With Precision</span>
            <span className="hero-line">Dentistry</span>
          </motion.h1>
          <motion.div className="hero-heading-line" variants={{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.55}}}} />
          <motion.p className="hero-premium-sub" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}>
            Custom dental veneers crafted with precision to give you a natural, confident and beautiful smile.
          </motion.p>
          <motion.div className="hero-premium-actions" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}>
            <Link to="/contact" className="btn btn-primary hero-main-btn"><CalendarDays size={18}/>Book Appointment<ArrowRight size={16}/></Link>
            <a href="#services" className="btn btn-outline hero-video-btn"><PlayCircle size={18}/>Explore Treatments</a>
          </motion.div>
          <motion.div className="hero-feature-grid" variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
            {features.map(({icon:Icon,title,text})=><div className="hero-feature" key={title}><span className="hero-feature-icon"><Icon size={20}/></span><div><strong>{title}</strong><small>{text}</small></div></div>)}
          </motion.div>
        </motion.div>
        <motion.div className="hero-premium-visual" initial={{opacity:0,x:45,scale:.96}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.9,ease:'easeOut',delay:.15}}>
          <div className="hero-visual-aura"/><div className="hero-visual-ring hero-visual-ring-one"/><div className="hero-visual-ring hero-visual-ring-two"/>
          <div className="hero-image-circle"><div className="hero-image-circle-inner hero-video-frame"><video className="hero-premium-teeth hero-premium-video" autoPlay muted loop playsInline preload="auto" aria-label="Veneer treatment and smile transformation (3–6 second hero clip)"><source src="/videos/hero-veneer.mp4" type="video/mp4" /></video></div></div>
          <div className="hero-treatment-card"><div className="hero-treatment-top"><span className="hero-treatment-badge"><Sparkles size={14}/>Smile Design</span><span className="hero-treatment-dot"/></div><strong>Designed for a natural finish</strong><p>Digital planning, precision fit and comfortable treatment.</p></div>
          <div className="hero-process-card"><div className="hero-process-heading"><span>Veneer Journey</span><small>Simple. Precise. Beautiful.</small></div><div className="hero-process-grid">
            {process.map((item,index)=><div className="hero-process-item" key={item.number}><div className={`hero-process-visual ${item.type}`}>{(item.type==='veneer'||item.type==='result')?<img src="/veneer-smile.png" alt={item.title}/>:<span className="hero-process-tooth"/>}</div><span className="hero-process-number">{item.number}</span><strong>{item.title}</strong>{index<3&&<ArrowRight className="hero-process-arrow" size={17}/>}</div>)}
          </div></div>
        </motion.div>
      </div>
    </section>
  )
}
