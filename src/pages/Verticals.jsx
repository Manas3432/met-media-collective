import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import './Verticals.css'

const VERTICALS = [
  {
    number: '01',
    title: 'Advertising',
    short: 'Build brands from brief to launch.',
    description:
      'Campaign concepts, brand strategy, copy, and creative production. Build brands from brief to launch.',
    color: '#E31E24',
    ink: '#FFFFFF',
  },
  {
    number: '02',
    title: 'Public Relations',
    short: 'Build reputation and influence.',
    description:
      'Reputation building, media outreach, and stakeholder communication at real scale.',
    color: '#16539F',
    ink: '#FFFFFF',
  },
  {
    number: '03',
    title: 'Digital Marketing',
    short: 'Strategy powered by content and data.',
    description:
      'Content calendars, social strategy, performance marketing, SEO/SEM and analytics-led decisions.',
    color: '#208447',
    ink: '#FFFFFF',
  },
  {
    number: '04',
    title: 'Entertainment & Films',
    short: 'From concept to screen.',
    description:
      'Short films, branded content, and end-to-end event activations from concept to screen.',
    color: '#E2902A',
    ink: '#111111',
  },
  {
    number: '05',
    title: 'Journalism',
    short: 'Stories with editorial standards.',
    description:
      'News packages, features, interviews, and campus reporting with real editorial standards.',
    color: '#F9C60F',
    ink: '#111111',
  },
  {
    number: '06',
    title: 'Data & Insights',
    short: 'Measure. Understand. Improve.',
    description:
      'Audience research, campaign measurement, and decision support to sharpen every strategy.',
    color: '#968E5B',
    ink: '#FFFFFF',
  },
]

const EASE = [0.2, 0.7, 0.2, 1]

function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </Tag>
  )
}

function SectionLabel({ number, children, light = false }) {
  return (
    <p className={`verticals-label ${light ? 'verticals-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Verticals() {
  const [active, setActive] = useState(null)
  const reduce = useReducedMotion()

  return (
    <main className="verticals-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="verticals-hero">
        <div className="verticals-container">

          <SectionLabel number="03">
            Media Verticals / The Collective
          </SectionLabel>

          <Reveal
            as="h1"
            className="verticals-hero__title"
          >
            SIX
            <br />
            <span>DISCIPLINES.</span>
          </Reveal>

          <Reveal
            className="verticals-hero__bottom"
            delay={0.15}
          >
            <p>
              One collective.
              <br />
              Multiple ways to create.
            </p>

            <div className="verticals-hero__mark">
              <span>MET</span>
              <i />
              <span>MEDIA</span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          VERTICAL LIST
          ===================================================== */}

      <section className="verticals-list-section">

        <div className="verticals-container">

          <div className="verticals-list-head">
            <Reveal>
              <SectionLabel number="01">
                Explore The Verticals
              </SectionLabel>
            </Reveal>

            <Reveal
              className="verticals-list-head__copy"
              delay={0.1}
            >
              <p>
                Each discipline brings a different perspective,
                workflow, and way of making.
              </p>
            </Reveal>
          </div>

          <div className="vertical-list">

            {VERTICALS.map((vertical, index) => {
              const isActive = active === index

              return (
                <Reveal
                  key={vertical.number}
                  className={`vertical-row ${
                    isActive ? 'is-active' : ''
                  }`}
                  delay={index * 0.05}
                >
                  <button
                    className="vertical-row__button"
                    style={{
                      '--vertical-color': vertical.color,
                      '--vertical-ink': vertical.ink,
                    }}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() =>
                      setActive(
                        isActive ? null : index,
                      )
                    }
                    aria-expanded={isActive}
                  >

                    <span className="vertical-row__number">
                      {vertical.number}
                    </span>

                    <span className="vertical-row__title">
                      {vertical.title}
                    </span>

                    <span className="vertical-row__plus">
                      <Plus size={24} />
                    </span>

                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="vertical-row__detail"
                        initial={
                          reduce
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={
                          reduce
                            ? { opacity: 0 }
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.45,
                          ease: EASE,
                        }}
                      >
                        <div className="vertical-row__detail-inner">

                          <p className="vertical-row__short">
                            {vertical.short}
                          </p>

                          <p className="vertical-row__description">
                            {vertical.description}
                          </p>

                          <Link
                            to="/join"
                            className="vertical-row__link"
                          >
                            Work In This Vertical
                            <ArrowUpRight size={18} />
                          </Link>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </Reveal>
              )
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          CROSS DISCIPLINE
          ===================================================== */}

      <section className="verticals-cross">

        <div className="verticals-container">

          <Reveal>
            <SectionLabel number="02" light>
              Cross-Discipline Thinking
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="verticals-cross__title"
          >
            THE BEST IDEAS
            <br />
            <span>DON'T STAY IN ONE LANE.</span>
          </Reveal>

          <Reveal
            className="verticals-cross__copy"
            delay={0.15}
          >
            <p>
              Advertising can meet journalism. Digital can meet
              films. PR can meet data. The Collective is designed
              so students can work across disciplines and build
              integrated ideas.
            </p>

            <Link
              to="/objectives"
              className="verticals-cross__link"
            >
              See Our Objectives
              <ArrowRight size={18} />
            </Link>
          </Reveal>

        </div>

      </section>

    </main>
  )
}