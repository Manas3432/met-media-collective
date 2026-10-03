import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Team.css'

const TEAM = [
  {
    role: 'CEO',
    names: ['Ronak Thakkar'],
    color: '#E31E24',
    ink: '#FFFFFF',
  },
  {
    role: 'CCO',
    names: ['Vedant Gotad'],
    color: '#16539F',
    ink: '#FFFFFF',
  },
  {
    role: 'COO',
    names: ['Tehsin Khan'],
    color: '#208447',
    ink: '#FFFFFF',
  },
  {
    role: 'CGO',
    names: ['Akshata', 'Hegde'],
    color: '#F9C60F',
    ink: '#111111',
  },
  {
    role: 'HR Head',
    names: ['Purva', 'Mhatre'],
    color: '#F9C60F',
    ink: '#111111',
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
    <p className={`team-label ${light ? 'team-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Team() {
  return (
    <main className="team-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="team-hero">
        <div className="team-container">

          <SectionLabel number="05">
            Leadership / Team
          </SectionLabel>

          <Reveal
            as="h1"
            className="team-hero__title"
          >
            MEET THE
            <br />
            <span>COLLECTIVE.</span>
          </Reveal>

          <Reveal
            className="team-hero__bottom"
            delay={0.15}
          >
            <p>
              The people
              <br />
              behind the work.
            </p>

            <div className="team-hero__count">
              <strong>05</strong>
              <span>Leadership roles</span>
            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          LEADERSHIP
          ===================================================== */}

      <section className="team-leadership">

        <div className="team-container">

          <div className="team-leadership__intro">

            <Reveal>
              <SectionLabel number="01">
                Leadership
              </SectionLabel>

              <h2>
                THE PEOPLE
                <br />
                <span>LEADING THE WORK.</span>
              </h2>
            </Reveal>

            <Reveal
              className="team-leadership__copy"
              delay={0.15}
            >
              <p>
                Meet the people shaping the Collective across
                leadership, creative direction, operations, growth,
                advertising, public relations, and cinematic
                storytelling.
              </p>
            </Reveal>

          </div>


          <div className="team-grid">

            {TEAM.map((person, index) => (
              <Reveal
                key={`${person.role}-${index}`}
                className={`team-card ${
                  index === 0
                    ? 'team-card--featured'
                    : ''
                }`}
                delay={index * 0.06}
                style={{
                  '--team-color': person.color,
                  '--team-ink': person.ink,
                }}
              >

                <div className="team-card__top">
                  <span className="team-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <ArrowUpRight size={22} />
                </div>

                <div className="team-card__identity">

                  <p className="team-card__role">
                    {person.role}
                  </p>

                  <div className="team-card__names">
                    {person.names.map((name) => (
                      <h3 key={name}>
                        {name}
                      </h3>
                    ))}
                  </div>

                </div>

              </Reveal>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COLLECTIVE STATEMENT
          ===================================================== */}

      <section className="team-statement">

        <div className="team-container">

          <Reveal>
            <SectionLabel number="02" light>
              The Collective
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="team-statement__title"
          >
            DIFFERENT
            <br />
            ROLES.
            <br />
            <span>ONE TEAM.</span>
          </Reveal>

          <Reveal
            className="team-statement__bottom"
            delay={0.15}
          >
            <p>
              Advertising, PR, storytelling, operations,
              creative direction, and growth come together
              under one collective.
            </p>
            
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          JOIN CTA
          ===================================================== */}

      <section className="team-join">

        <div className="team-container">

          <Reveal>
            <SectionLabel number="03">
              Become a Member
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="team-join__title"
          >
            YOUR NAME
            <br />
            <span>COULD BE NEXT.</span>
          </Reveal>

          <Reveal
            className="team-join__bottom"
            delay={0.15}
          >
            <p>
              Work on real projects, build your portfolio,
              and become part of the Collective.
            </p>

            <Link
              to="/join"
              className="team-join__button"
            >
              Join the Collective
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>

        </div>

      </section>

    </main>
  )
}