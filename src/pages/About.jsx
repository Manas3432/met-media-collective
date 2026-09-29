import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './About.css'

const DISCIPLINES = [
  { name: 'Advertising', color: '#E31E24', ink: '#FFFFFF' },
  { name: 'PR', color: '#16539F', ink: '#FFFFFF' },
  { name: 'Entertainment & Events', color: '#E2902A', ink: '#111111' },
  { name: 'Digital Marketing', color: '#208447', ink: '#FFFFFF' },
  { name: 'Journalism', color: '#F9C60F', ink: '#111111' },
  { name: 'Cinematic Storytelling', color: '#968E5B', ink: '#FFFFFF' },
  { name: 'Creative Tech', color: '#111111', ink: '#FFFFFF' },
]

const EASE = [0.2, 0.7, 0.2, 1]

function Reveal({ children, delay = 0, className = '', as = 'div', style }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
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
    <p className={`about-label ${light ? 'about-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          ABOUT HERO
          ===================================================== */}

      <section className="about-hero">
        <div className="about-container">

          <SectionLabel number="01">
            About / What We Are
          </SectionLabel>

          <Reveal as="h1" className="about-hero__title">
            A REAL
            <br />
            <span>AGENCY.</span>
          </Reveal>

          <Reveal className="about-hero__intro">
            <p>
              Not a classroom, not a workshop.
            </p>

            <div className="about-hero__arrow">
              <ArrowDown />
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          WHAT WE ARE
          ===================================================== */}

      <section className="about-story">
        <div className="about-container">

          <div className="about-story__grid">

            <Reveal className="about-story__main">
              <p>
                The MET Media Collective is MET IMM's
                student-run Campus Media Agency designed to
                bring the industry straight into the classroom.
                Students apply theory, creativity, and strategy
                in real time by working on live projects, client
                briefs, and cross-functional campaigns.
              </p>
            </Reveal>

            <Reveal
              className="about-story__side"
              delay={0.15}
            >
              <p>
                Through mentorship, workshops, and hands-on
                execution, learners develop storytelling,
                campaign management, analytics, and strategic
                thinking skills graduating with portfolio-ready
                work and real professional confidence.
              </p>

              <Link
                to="/join"
                className="about-link"
              >
                Get Involved
                <ArrowUpRight size={18} />
              </Link>
            </Reveal>

          </div>

        </div>
      </section>

      {/* =====================================================
          DISCIPLINES
          ===================================================== */}

      <section className="about-disciplines">

        <div className="about-container">

          <div className="about-disciplines__head">

            <Reveal>
              <SectionLabel number="02">
                Disciplines
              </SectionLabel>

              <h2>
                MANY DISCIPLINES.
                <br />
                <span>ONE COLLECTIVE.</span>
              </h2>
            </Reveal>

            <Reveal
              className="about-disciplines__statement"
              delay={0.15}
            >
              <p>
                Seven creative and strategic disciplines
                working together to bring ideas to life.
              </p>
            </Reveal>

          </div>

          <div className="discipline-list">

            {DISCIPLINES.map((discipline, index) => (
              <Reveal
                key={discipline.name}
                className="discipline-row"
                delay={index * 0.06}
                style={{
                  '--discipline-color': discipline.color,
                  '--discipline-ink': discipline.ink,
                }}
              >
                <span className="discipline-row__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{discipline.name}</h3>

                <ArrowUpRight
                  size={24}
                  aria-hidden="true"
                />
              </Reveal>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          QUOTE
          ===================================================== */}

      <section className="about-quote">

        <div className="about-container">

          <Reveal className="about-quote__mark">
            “
          </Reveal>

          <Reveal
            as="blockquote"
            className="about-quote__text"
            delay={0.1}
          >
            Because the best way to learn media…
            <br />
            is to live it.
          </Reveal>

          <Reveal
            className="about-quote__author"
            delay={0.2}
          >
            — MET Media Collective
          </Reveal>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="about-final">

        <div className="about-container">

          <Reveal className="about-final__label">
            <SectionLabel number="03" light>
              Be Part Of It
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="about-final__title"
          >
            LEARN.
            <br />
            MAKE.
            <br />
            <span>LIVE IT.</span>
          </Reveal>

          <Reveal
            className="about-final__bottom"
            delay={0.15}
          >
            <p>
              Work on real projects, collaborate across
              disciplines, and build work that speaks for you.
            </p>

            <Link
              to="/join"
              className="about-final__button"
            >
              Join the Collective
              <ArrowRight size={18} />
            </Link>
          </Reveal>

        </div>

      </section>

    </main>
  )
}

function ArrowDown() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4V20M12 20L6 14M12 20L18 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}