import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Objectives.css'

const OBJECTIVES = [
  {
    number: '01',
    title: 'Real-World Exposure',
    description:
      'Engage with industry-relevant projects. Run end-to-end campaign sprints and ship assets on real deadlines.',
    tags: ['Case Studies', 'Creatives', 'Reports'],
    color: '#E31E24',
    ink: '#FFFFFF',
  },
  {
    number: '02',
    title: 'Cross-Functional Collaboration',
    description:
      'Work in integrated teams spanning Advertising, PR, Digital, Films & Events, and Journalism with agile workflows.',
    tags: ['Shared Briefs', 'Stand-ups'],
    color: '#16539F',
    ink: '#FFFFFF',
  },
  {
    number: '03',
    title: 'Portfolio Building',
    description:
      'Deliver tangible outputs — campaigns, videos, event activations, and content strategies with measurable KPIs.',
    tags: ['Portfolio Links', 'Reels'],
    color: '#208447',
    ink: '#FFFFFF',
  },
  {
    number: '04',
    title: 'Mentorship & Industry Learning',
    description:
      'Interact with media leaders, filmmakers, and strategists. Masterclasses, critiques, and career portfolio reviews.',
    tags: ['Masterclasses', 'Mentor Network'],
    color: '#F9C60F',
    ink: '#111111',
  },
  {
    number: '05',
    title: 'Strategic Skill Development',
    description:
      'Learn planning, execution, analytics, and client servicing. Follow a real Brief Strategy → Execution workflow.',
    tags: ['GA & Ads', 'Planning', 'Retros'],
    color: '#E2902A',
    ink: '#111111',
  },
  {
    number: '06',
    title: 'Innovation & Creativity',
    description:
      'Experiment with AI, AR/VR, immersive campaigns, and platform-native storytelling. Test, measure, iterate fast.',
    tags: ['Prototyping', 'Creative Risk'],
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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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
    <p className={`objectives-label ${light ? 'objectives-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Objectives() {
  return (
    <main className="objectives-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="objectives-hero">
        <div className="objectives-container">

          <SectionLabel number="02">
            Objectives / What We Build
          </SectionLabel>

          <Reveal as="h1" className="objectives-hero__title">
            SIX PILLARS
            <br />
            <span>OF MASTERY.</span>
          </Reveal>

          <Reveal
            className="objectives-hero__bottom"
            delay={0.15}
          >
            <p>
              Real skills.
              <br />
              Real workflow.
              <br />
              Real outcomes.
            </p>

            <a
              href="#pillars"
              className="objectives-scroll"
            >
              <span>Explore</span>
              <ArrowRight size={18} />
            </a>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          SIX OBJECTIVES
          ===================================================== */}

      <section
        className="objectives-pillars"
        id="pillars"
      >
        <div className="objectives-container">

          <div className="objectives-pillars__intro">
            <Reveal>
              <SectionLabel number="01">
                The Framework
              </SectionLabel>

              <h2>
                SIX WAYS
                <br />
                <span>TO GROW.</span>
              </h2>
            </Reveal>

            <Reveal
              className="objectives-pillars__intro-text"
              delay={0.15}
            >
              <p>
                Every project, collaboration, and brief is designed
                around skills that matter beyond the classroom.
              </p>
            </Reveal>
          </div>

          <div className="objective-list">

            {OBJECTIVES.map((objective, index) => (
              <Reveal
                key={objective.number}
                className="objective"
                delay={index * 0.06}
                style={{
                  '--objective-color': objective.color,
                  '--objective-ink': objective.ink,
                }}
              >
                <div className="objective__top">

                  <span className="objective__number">
                    {objective.number}
                  </span>

                  <span className="objective__arrow">
                    <ArrowUpRight size={22} />
                  </span>

                </div>

                <div className="objective__content">

                  <h3>
                    {objective.title}
                  </h3>

                  <p>
                    {objective.description}
                  </p>

                  <div className="objective__tags">
                    {objective.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
          ===================================================== */}

      <section className="objectives-closing">

        <div className="objectives-container">

          <Reveal className="objectives-closing__label">
            <SectionLabel number="02" light>
              The Outcome
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="objectives-closing__title"
          >
            LEARN THE
            <br />
            <span>WORK.</span>
            <br />
            BECOME THE
            <br />
            <span>PROOF.</span>
          </Reveal>

          <Reveal
            className="objectives-closing__bottom"
            delay={0.15}
          >
            <p>
              Build tangible work, collaborate across disciplines,
              and develop skills through real workflows.
            </p>

            <Link
              to="/verticals"
              className="objectives-closing__button"
            >
              Explore Verticals
              <ArrowRight size={18} />
            </Link>
          </Reveal>

        </div>

      </section>

    </main>
  )
}