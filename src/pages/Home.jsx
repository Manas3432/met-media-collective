import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Plus } from 'lucide-react'
import './Home.css'

/* ==========================================================
   OWNER-PROVIDED CONTENT
   Source: MMC Web Page Content
   ========================================================== */

const HERO_VERTICALS = [
  'Advertising',
  'Public Relations',
  'Digital Marketing',
  'Entertainment & Events',
  'Journalism',
  'Cinematic Storytelling',
]

const VERTICALS = [
  {
    title: 'Advertising',
    color: 'var(--red)',
    ink: '#fff',
    text: 'Campaign concepts, brand strategy, copy, and creative production. Build brands from brief to launch.',
  },
  {
    title: 'Public Relations',
    color: 'var(--blue)',
    ink: '#fff',
    text: 'Reputation building, media outreach, and stakeholder communication at real scale.',
  },
  {
    title: 'Digital Marketing',
    color: 'var(--green)',
    ink: '#fff',
    text: 'Content calendars, social strategy, performance marketing, SEO/SEM and analytics-led decisions.',
  },
  {
    title: 'Entertainment & Films',
    color: 'var(--orange)',
    ink: '#111',
    text: 'Short films, branded content, and end-to-end event activations from concept to screen.',
  },
  {
    title: 'Journalism',
    color: 'var(--yellow)',
    ink: '#111',
    text: 'News packages, features, interviews, and campus reporting with real editorial standards.',
  },
  {
    title: 'Data & Insights',
    color: 'var(--olive)',
    ink: '#fff',
    text: 'Audience research, campaign measurement, and decision support to sharpen every strategy.',
  },
]

/*
 * The owner has not supplied an actual portfolio/project list
 * in the current content document.
 *
 * We therefore keep the Work section visually intact but do not
 * fabricate project names, years, clients, or achievements.
 */
const WORK = [
  {
    cat: 'Campaign',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'red',
    span: 'w7',
    image: null,
  },
  {
    cat: 'Digital',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'blue',
    span: 'w5',
    image: null,
  },
  {
    cat: 'Film / Content',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'yellow',
    span: 'w4',
    image: null,
  },
  {
    cat: 'Events',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'green',
    span: 'w4',
    image: null,
  },
  {
    cat: 'Case Study',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'orange',
    span: 'w4',
    image: null,
  },
  {
    cat: 'Campaign',
    title: 'Featured Work',
    meta: 'Coming soon',
    tone: 'olive',
    span: 'w12',
    image: null,
  },
]

const MENTORSHIP = [
  {
    title: 'Workshops & Inspiration Sessions',
    text: 'with industry leaders.',
  },
  {
    title: 'Live Client Briefs',
    text: 'and collaborative reviews in real time.',
  },
  {
    title: 'Portfolio Reviews & Showcases',
    text: 'for meaningful feedback.',
  },
]

const WORKING_MODEL = [
  {
    title: 'Real Agency Workflow',
    text: 'Brief → Strategy → Execution',
  },
  {
    title: 'Sprint-Based',
    text: 'Time-bound delivery',
  },
  {
    title: 'Industry Network',
    text: 'Leaders & mentors',
  },
  {
    title: 'Portfolio Ready',
    text: 'Graduate with proof',
  },
]

const TEAM = [
  {
    group: 'CEO',
    name: 'Ronak Thakkar',
    tone: 'red',
  },
  {
    group: 'CCO',
    name: 'Vedant Gotad',
    tone: 'blue',
  },
  {
    group: 'COO',
    name: 'Tehsin Khan',
    tone: 'yellow',
  },
  {
    group: 'CGO',
    name: 'Akshata, Purva',
    tone: 'green',
  },
  {
    group: 'Advertising Head',
    name: 'Sahil, Anson',
    tone: 'orange',
  },
  {
    group: 'PR Head',
    name: 'Anuprita, Nitya',
    tone: 'olive',
  },
  {
    group: 'Cinematic Storytelling',
    name: 'Shawn, Chirag',
    tone: 'red',
  },
]

const ARTICLES = [
  {
    title: 'AI in Media 2025',
    cat: 'Industry News',
    date: 'March 2025',
    excerpt:
      'From generative visuals to AI-written copy, the media industry is undergoing its biggest transformation yet. Here’s what every media professional needs to know heading into 2025.',
    tone: 'orange',
  },
  {
    title: 'Film Branding',
    cat: 'Student Showcase',
    date: 'February 2025',
    excerpt:
      'Behind the Lens: Brand Film Shot in 48 Hours. A real brief. A real deadline. Zero sleep. How Team Cinematic Storytelling pulled off an end-to-end brand film sprint.',
    tone: 'red',
  },
  {
    title: 'Digital Trends',
    cat: 'Industry News',
    date: 'January 2025',
    excerpt:
      '5 Digital Marketing Trends Dominating 2025 — short-form video, creator-led brands, and hyper-personalisation.',
    tone: 'blue',
  },
  {
    title: 'AR/VR Creative Tech',
    cat: 'Student Showcase',
    date: 'December 2024',
    excerpt:
      'Our AR Filter That Hit 50K+ Impressions in a Week. The Creative Technology team built an Instagram AR filter for a live brief.',
    tone: 'green',
  },
  {
    title: 'Journalism Media',
    cat: 'Industry News',
    date: 'November 2024',
    excerpt:
      'When Social Media Becomes the Newsroom. Independent creators are breaking news faster than legacy outlets.',
    tone: 'yellow',
  },
]

const OBJECTIVES = [
  {
    number: '01',
    title: 'Real-World Exposure',
    text: 'Engage with industry-relevant projects. Run end-to-end campaign sprints and ship assets on real deadlines.',
    tags: ['Case Studies', 'Creatives', 'Reports'],
  },
  {
    number: '02',
    title: 'Cross-Functional Collaboration',
    text: 'Work in integrated teams spanning Advertising, PR, Digital, Films & Events, and Journalism with agile workflows.',
    tags: ['Shared Briefs', 'Stand-ups'],
  },
  {
    number: '03',
    title: 'Portfolio Building',
    text: 'Deliver tangible outputs — campaigns, videos, event activations, and content strategies with measurable KPIs.',
    tags: ['Portfolio Links', 'Reels'],
  },
  {
    number: '04',
    title: 'Mentorship & Industry Learning',
    text: 'Interact with media leaders, filmmakers, and strategists. Masterclasses, critiques, and career portfolio reviews.',
    tags: ['Masterclasses', 'Mentor Network'],
  },
  {
    number: '05',
    title: 'Strategic Skill Development',
    text: 'Learn planning, execution, analytics, and client servicing. Follow a real Brief → Strategy → Execution workflow.',
    tags: ['GA & Ads', 'Planning', 'Retros'],
  },
  {
    number: '06',
    title: 'Innovation & Creativity',
    text: 'Experiment with AI, AR/VR, immersive campaigns, and platform-native storytelling. Test, measure, iterate fast.',
    tags: ['Prototyping', 'Creative Risk'],
  },
]

const EASE = [0.2, 0.7, 0.2, 1]

/* ==========================================================
   SHARED COMPONENTS
   ========================================================== */

function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

function SectionHead({ num, label, title }) {
  return (
    <Reveal className="sec-head">
      <p className="label">
        <span>{num}</span> {label}
      </p>
      <h2>{title}</h2>
    </Reveal>
  )
}

function Visual({ tone = 'red', variant = 0, image, alt = '' }) {
  return (
    <div className={`viz tone-${tone} viz--v${variant % 6}`}>
      {image ? (
        <img
          className="viz__img"
          src={image}
          alt={alt}
          loading="lazy"
        />
      ) : (
        <span className="viz__art" aria-hidden="true" />
      )}
    </div>
  )
}

/* ==========================================================
   HERO
   ========================================================== */

function Hero() {
  const reduce = useReducedMotion()
  const lines = ['MET.', 'Media', 'Collective']

  return (
    <section className="hero">
      <div className="hero__meta label">
        <span>MET IMM</span>
        <span>Mumbai</span>
        <span>Campus Media Agency</span>
      </div>

      <h1 className="hero__title" aria-label="MET Media Collective">
        {lines.map((line, i) => (
          <span className="hero__mask" key={line} aria-hidden="true">
            <motion.span
              className={`hero__line ${
                i === 0 ? 'hero__line--accent' : ''
              }`}
              initial={reduce ? false : { y: '105%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1 + i * 0.12,
                ease: EASE,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="hero__foot">
        <motion.p
          className="hero__lead"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: EASE,
          }}
        >
          A student-run real agency inside MET IMM. Live briefs,
          cross-discipline collaboration, and a portfolio that
          actually speaks for you.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link to="/verticals" className="btn btn--dark">
            Explore Collective <ArrowRight size={18} />
          </Link>

          <Link to="/join" className="btn btn--ghost">
            Join Us
          </Link>
        </motion.div>
      </div>

      <div className="hero__swatches" aria-hidden="true">
        {[
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'olive',
          'black',
        ].map((c, i) => (
          <motion.i
            key={c}
            className={`tone-${c}`}
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: 0.5 + i * 0.07,
              duration: 0.7,
              ease: EASE,
            }}
          />
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...HERO_VERTICALS, ...HERO_VERTICALS].map(
            (title, i) => (
              <span key={i}>
                {title}
                <b>✦</b>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   ABOUT
   ========================================================== */

function Intro() {
  return (
    <section className="sec intro" id="about">
      <SectionHead
        num="01"
        label="About / What We Are"
        title="A Real Agency."
      />

      <div className="intro__grid">
        <Reveal as="div" className="intro__big">
          <p>
            Not a classroom, not a workshop.
          </p>

          <p style={{ marginTop: '1.5rem' }}>
            The MET Media Collective is MET IMM's student-run
            Campus Media Agency designed to bring the industry
            straight into the classroom. Students apply theory,
            creativity, and strategy in real time by working on
            live projects, client briefs, and cross-functional
            campaigns.
          </p>
        </Reveal>

        <Reveal className="intro__side" delay={0.15}>
          <p>
            Through mentorship, workshops, and hands-on
            execution, learners develop storytelling, campaign
            management, analytics, and strategic thinking skills
            graduating with portfolio-ready work and real
            professional confidence.
          </p>

          <p>
            "Because the best way to learn media… is to live it."
          </p>

          <Link to="/about" className="textlink">
            About the Collective <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ==========================================================
   VERTICALS
   ========================================================== */

function Verticals() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section className="sec verticals" id="verticals">
      <SectionHead
        num="02"
        label="Media Verticals"
        title="Six disciplines. One collective."
      />

      <p className="label" style={{ marginBottom: '2rem' }}>
        Scroll to browse verticals
      </p>

      <ul className="vlist">
        {VERTICALS.map((v, i) => {
          const isOpen = active === i

          return (
            <li
              key={v.title}
              className={`vrow ${isOpen ? 'is-open' : ''}`}
              style={{
                '--vc': v.color,
                '--vi': v.ink,
              }}
              onMouseEnter={() => setActive(i)}
            >
              <button
                className="vrow__btn"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={isOpen}
              >
                <span className="vrow__num">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="vrow__title">{v.title}</span>

                <Plus
                  className="vrow__icon"
                  size={28}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="vrow__body"
                    initial={
                      reduce
                        ? false
                        : { height: 0, opacity: 0 }
                    }
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={
                      reduce
                        ? { opacity: 0 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                    }}
                  >
                    <div className="vrow__inner">
                      <p>{v.text}</p>

                      <Link
                        to="/verticals"
                        className="textlink"
                      >
                        Explore <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

/* ==========================================================
   WORK
   ========================================================== */

function Work() {
  return (
    <section className="sec work" id="work">
      <div className="work__head">
        <SectionHead
          num="03"
          label="Featured Work"
          title="Selected projects"
        />

        <Link to="/work" className="textlink">
          All work <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="work__grid">
        {WORK.map((w, i) => (
          <Reveal
            key={i}
            className={`wcard ${w.span}`}
            delay={(i % 3) * 0.08}
          >
            <Link
              to="/work"
              className="wcard__link"
              aria-label={`${w.title}, ${w.cat}`}
            >
              <div className="wcard__media">
                <Visual
                  tone={w.tone}
                  variant={i}
                  image={w.image}
                  alt={`${w.title} — ${w.cat}`}
                />

                <span className="wcard__tag label">
                  {w.cat}
                </span>

                <span
                  className="wcard__go"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={22} />
                </span>
              </div>

              <div className="wcard__info">
                <h3>{w.title}</h3>
                <span>{w.meta}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ==========================================================
   MENTORSHIP
   ========================================================== */

function Mentorship() {
  return (
    <section className="sec dark mentor" id="mentorship">
      <SectionHead
        num="04"
        label="Mentorship"
        title="Learn from practitioners."
      />

      <Reveal as="p" className="mentor__lead">
        Learn directly from practitioners via masterclasses,
        critique sessions, and production sprints. Build
        confidence by shipping real work under time-bound
        constraints.
      </Reveal>

      <div className="mentor__grid">
        {MENTORSHIP.map((item, i) => (
          <Reveal
            key={item.title}
            className="pillar"
            delay={i * 0.1}
          >
            <span className="pillar__num">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <p className="label" style={{ color: 'var(--yellow)' }}>
          Our Working Model
        </p>

        <div className="mentor__grid">
          {WORKING_MODEL.map((item, i) => (
            <Reveal
              key={item.title}
              className="pillar"
              delay={i * 0.08}
            >
              <span className="pillar__num">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   TEAM
   ========================================================== */

function Team() {
  return (
    <section className="sec team" id="team">
      <div className="work__head">
        <SectionHead
          num="05"
          label="Leadership / Team"
          title="Meet the collective."
        />

        <Link to="/team" className="textlink">
          Become a Member <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="team__grid">
        {TEAM.map((member, i) => (
          <Reveal
            key={`${member.group}-${member.name}`}
            className="tcard"
            delay={(i % 4) * 0.08}
          >
            <Visual
              tone={member.tone}
              variant={i + 2}
              alt={`${member.name} portrait placeholder`}
            />

            <p className="label">{member.group}</p>

            <h3>{member.name}</h3>

            <span>{member.group}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ==========================================================
   BLOG / INSIGHTS
   ========================================================== */

function Insights() {
  const [feat, ...rest] = ARTICLES

  return (
    <section className="sec insights" id="blog">
      <div className="work__head">
        <SectionHead
          num="06"
          label="Blog / Latest From The Collective"
          title="Stories. Trends. Showcases."
        />

        <Link to="/blog" className="textlink">
          View All Posts <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="insights__grid">
        <Reveal className="feature">
          <Link to="/blog">
            <Visual
              tone={feat.tone}
              variant={4}
              alt={feat.title}
            />

            <p className="label feature__meta">
              {feat.cat} — {feat.date}
            </p>

            <h3>{feat.title}</h3>

            <p>{feat.excerpt}</p>

            <span
              className="textlink"
              style={{ marginTop: '1rem' }}
            >
              Read Article <ArrowUpRight size={18} />
            </span>
          </Link>
        </Reveal>

        <ul className="alist">
          {rest.map((article, i) => (
            <Reveal
              as="li"
              key={article.title}
              delay={i * 0.08}
            >
              <Link to="/blog" className="arow">
                <span className="label">
                  {article.cat}
                </span>

                <h3>{article.title}</h3>

                <span className="arow__date">
                  {article.date}
                </span>

                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ==========================================================
   JOIN CTA
   ========================================================== */

function JoinCTA() {
  return (
    <section className="cta" id="join">
      <p className="label">07 — Join Us / Contact</p>

      <Reveal as="h2" className="cta__title">
        Wanna make
        <br />
        something epic?
      </Reveal>

      <Reveal
        as="p"
        style={{
          maxWidth: '48ch',
          marginBottom: '3rem',
          fontSize: '1.15rem',
        }}
      >
        We're always happy to connect with passionate media
        people. Be part of the Collective — work on real
        projects, build your portfolio, and make a dent.
      </Reveal>

      <div className="cta__row">
        <div className="cta__actions">
          <Link
            to="/join"
            className="btn btn--light"
          >
            Send Us a Message <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="btn cta__ghost"
          >
            Contact
          </Link>
        </div>

        <div className="cta__info">
          <p className="label">Email</p>

          <p>
            <a href="mailto:contact@met.edu">
              contact@met.edu
            </a>
          </p>
        </div>

        <div className="cta__info">
          <p className="label">Location</p>

          <p>MET IMM, Mumbai</p>

          <p style={{ marginTop: '0.5rem' }}>
            <a href="#contact">
              Visit MET IMM <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   FOOTER
   ========================================================== */

function Footer() {
  const links = [
    { label: 'About', to: '/about' },
    { label: 'Objectives', to: '/objectives' },
    { label: 'Verticals', to: '/verticals' },
    { label: 'Mentorship', to: '/mentorship' },
    { label: 'Team', to: '/team' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'Join Us', to: '/join' },
  ]

  return (
    <footer className="footer">
      <p className="footer__mark" aria-hidden="true">
  <span className="footer__letter">M</span>
  <span className="footer__letter">E</span>
  <span className="footer__letter">T</span>
  <span className="footer__dot">.</span>
</p>

      <p className="footer__tagline">
  "Not a Classroom. Not a Workshop. A Real Agency."
</p>

      <div className="footer__row">
        <nav aria-label="Footer">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p>
          © {new Date().getFullYear()} MET Media Collective ·
          MET IMM, Mumbai
        </p>
      </div>
    </footer>
  )
}

/* ==========================================================
   HOME
   ========================================================== */

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Verticals />
      <Work />
      <Mentorship />
      <Team />
      <Insights />
      <JoinCTA />
      <Footer />
    </main>
  )
}