import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Mentorship.css'

const EXPERIENCES = [
  {
    number: '01',
    title: 'Workshops & Inspiration Sessions',
    description:
      'Learn directly from industry leaders through workshops and inspiration sessions.',
    color: '#E31E24',
    ink: '#FFFFFF',
  },
  {
    number: '02',
    title: 'Live Client Briefs',
    description:
      'Work on live briefs and participate in collaborative reviews in real time.',
    color: '#16539F',
    ink: '#FFFFFF',
  },
  {
    number: '03',
    title: 'Portfolio Reviews & Showcases',
    description:
      'Present your work, receive meaningful feedback, and build a portfolio that reflects what you can actually do.',
    color: '#208447',
    ink: '#FFFFFF',
  },
]

const WORKING_MODEL = [
  {
    number: '01',
    title: 'Real Agency Workflow',
    value: 'Brief → Strategy → Execution',
  },
  {
    number: '02',
    title: 'Sprint-Based',
    value: 'Time-bound delivery',
  },
  {
    number: '03',
    title: 'Industry Network',
    value: 'Leaders & mentors',
  },
  {
    number: '04',
    title: 'Portfolio Ready',
    value: 'Graduate with proof',
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
    <p
      className={`mentorship-label ${
        light ? 'mentorship-label--light' : ''
      }`}
    >
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Mentorship() {
  return (
    <main className="mentorship-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="mentorship-hero">
        <div className="mentorship-container">

          <SectionLabel number="04">
            Mentorship / Industry Learning
          </SectionLabel>

          <Reveal
            as="h1"
            className="mentorship-hero__title"
          >
            LEARN FROM
            <br />
            <span>THE PEOPLE</span>
            <br />
            WHO DO IT.
          </Reveal>

          <Reveal
            className="mentorship-hero__bottom"
            delay={0.15}
          >
            <p>
              Workshops.
              <br />
              Live briefs.
              <br />
              Real feedback.
            </p>

            <div className="mentorship-hero__arrow">
              <ArrowDown />
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section className="mentorship-experience">
        <div className="mentorship-container">

          <div className="mentorship-experience__intro">

            <Reveal>
              <SectionLabel number="01">
                The Experience
              </SectionLabel>

              <h2>
                LEARN IT.
                <br />
                <span>APPLY IT.</span>
              </h2>
            </Reveal>

            <Reveal
              className="mentorship-experience__intro-copy"
              delay={0.15}
            >
              <p>
                Mentorship is built into the working process —
                through industry interaction, live projects, and
                feedback that helps turn ideas into stronger work.
              </p>
            </Reveal>

          </div>

          <div className="mentorship-experience__grid">

            {EXPERIENCES.map((experience, index) => (
              <Reveal
                key={experience.number}
                className="mentorship-card"
                delay={index * 0.08}
                style={{
                  '--mentorship-color': experience.color,
                  '--mentorship-ink': experience.ink,
                }}
              >
                <div className="mentorship-card__top">
                  <span>{experience.number}</span>

                  <ArrowUpRight size={24} />
                </div>

                <div className="mentorship-card__content">
                  <h3>{experience.title}</h3>

                  <p>{experience.description}</p>
                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WORKING MODEL
          ===================================================== */}

      <section className="mentorship-model">

        <div className="mentorship-container">

          <Reveal>
            <SectionLabel number="02" light>
              The Working Model
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="mentorship-model__title"
          >
            REAL
            <br />
            <span>AGENCY</span>
            <br />
            WORKFLOW.
          </Reveal>

          <Reveal
            className="mentorship-model__intro"
            delay={0.15}
          >
            <p>
              The Collective follows a working model that mirrors
              how real media teams operate — from the first brief
              to the final output.
            </p>
          </Reveal>

          <div className="mentorship-model__list">

            {WORKING_MODEL.map((item, index) => (
              <Reveal
                key={item.number}
                className="model-row"
                delay={index * 0.06}
              >
                <span className="model-row__number">
                  {item.number}
                </span>

                <div className="model-row__main">
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>

                <ArrowUpRight
                  className="model-row__arrow"
                  size={24}
                />
              </Reveal>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CLOSING CTA
          ===================================================== */}

      <section className="mentorship-closing">

        <div className="mentorship-container">

          <Reveal>
            <SectionLabel number="03">
              The Outcome
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="mentorship-closing__title"
          >
            DON'T JUST
            <br />
            LEARN THE
            <br />
            <span>THEORY.</span>
            <br />
            LIVE THE
            <br />
            <span>WORK.</span>
          </Reveal>

          <Reveal
            className="mentorship-closing__bottom"
            delay={0.15}
          >
            <p>
              Build with mentors, work through real briefs, and
              graduate with proof of what you can create.
            </p>

            <Link
              to="/objectives"
              className="mentorship-closing__button"
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

function ArrowDown() {
  return (
    <span className="mentorship-arrow-down">
      ↓
    </span>
  )
}