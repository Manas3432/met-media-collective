import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/objectives', label: 'Objectives' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/work', label: 'Work' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="nav__bar">
        <Link to="/" className="nav__logo" aria-label="MET Media Collective, home">
  <img src="/met-logo.svg" alt="MET Media Collective" />
</Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/join" className="nav__cta">
          Join Us <ArrowUpRight size={16} />
        </Link>

        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="nav__overlay"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <nav aria-label="Mobile">
              <ul>
                {[...LINKS, { to: '/join', label: 'Join Us' }].map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={reduce ? false : { y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <NavLink to={l.to} end={l.to === '/'} className="nav__mlink">
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <p className="label nav__foot">MET Media Collective — Bandra, Mumbai</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}