import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Blog.css'

const ARTICLES = [
  {
    number: '01',
    category: 'Industry News',
    date: 'March 2025',
    title: 'AI in Media 2025',
    subtitle: 'How AI is Reshaping the Future of Advertising & Content Creation',
    description:
      "From generative visuals to AI-written copy, the media industry is undergoing its biggest transformation yet. Here's what every media professional needs to know heading into 2025.",
    icon: '✦',
    color: '#E31E24',
    ink: '#FFFFFF',
  },
  {
    number: '02',
    category: 'Student Showcase',
    date: 'February 2025',
    title: 'Film Branding',
    subtitle: 'Behind the Lens: Brand Film Shot in 48 Hours',
    description:
      'A real brief. A real deadline. Zero sleep. How Team Cinematic Storytelling pulled off an end-to-end brand film sprint.',
    icon: '◉',
    color: '#E2902A',
    ink: '#111111',
  },
  {
    number: '03',
    category: 'Industry News',
    date: 'January 2025',
    title: 'Digital Trends',
    subtitle: '5 Digital Marketing Trends Dominating 2025',
    description:
      'Short-form video, creator-led brands, and hyper-personalisation — the trends shaping campaigns and what they mean for students entering the industry.',
    icon: '↗',
    color: '#208447',
    ink: '#FFFFFF',
  },
  {
    number: '04',
    category: 'Student Showcase',
    date: 'December 2024',
    title: 'AR/VR Creative Tech',
    subtitle: 'Our AR Filter That Hit 50K+ Impressions in a Week',
    description:
      'The Creative Technology team built an Instagram AR filter for a live brief — and it went massive. Here’s the full story.',
    icon: '◇',
    color: '#16539F',
    ink: '#FFFFFF',
  },
  {
    number: '05',
    category: 'Industry News',
    date: 'November 2024',
    title: 'Journalism Media',
    subtitle: 'When Social Media Becomes the Newsroom',
    description:
      'Independent creators are breaking news faster than legacy outlets. What does this mean for the next generation of journalists?',
    icon: '●',
    color: '#F9C60F',
    ink: '#111111',
  },
]

const CATEGORIES = [
  'All',
  'Industry News',
  'Student Showcase',
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
      viewport={{ once: true, amount: 0.12 }}
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
    <p className={`blog-label ${light ? 'blog-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Blog() {
  return (
    <main className="blog-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="blog-hero">
        <div className="blog-container">

          <SectionLabel number="06">
            Blog / Latest From The Collective
          </SectionLabel>

          <Reveal
            as="h1"
            className="blog-hero__title"
          >
            STORIES.
            <br />
            <span>TRENDS.</span>
            <br />
            SHOWCASES.
          </Reveal>

          <Reveal
            className="blog-hero__bottom"
            delay={0.15}
          >
            <p>
              Ideas worth reading.
              <br />
              Work worth seeing.
            </p>

            <div className="blog-hero__count">
              <strong>05</strong>
              <span>Published stories</span>
            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          ARTICLES
          ===================================================== */}

      <section className="blog-articles">

        <div className="blog-container">

          <div className="blog-articles__head">

            <Reveal>
              <SectionLabel number="01">
                Latest From The Collective
              </SectionLabel>
            </Reveal>

            <Reveal
              className="blog-articles__intro"
              delay={0.1}
            >
              <p>
                Industry perspectives, student showcases, and
                stories from the world of media.
              </p>
            </Reveal>

          </div>


          <div className="blog-feature">

            <Reveal className="blog-feature__visual">

              <div className="blog-feature__visual-art">
                <span>01</span>
                <strong>AI</strong>
                <em>MEDIA</em>
              </div>

            </Reveal>


            <Reveal
              className="blog-feature__content"
              delay={0.15}
            >

              <div className="blog-article-meta">
                <span>{ARTICLES[0].category}</span>
                <span>{ARTICLES[0].date}</span>
              </div>

              <h2>
                {ARTICLES[0].title}
              </h2>

              <h3>
                {ARTICLES[0].subtitle}
              </h3>

              <p>
                {ARTICLES[0].description}
              </p>

              <Link
                to="/blog"
                className="blog-read-link"
              >
                Read Article
                <ArrowUpRight size={18} />
              </Link>

            </Reveal>

          </div>


          {/* =================================================
              FILTERS
              ================================================= */}

          <div className="blog-filter">

            <span className="blog-filter__label">
              Categories
            </span>

            <div className="blog-filter__items">
              {CATEGORIES.map((category, index) => (
                <button
                  key={category}
                  className={
                    index === 0
                      ? 'is-active'
                      : ''
                  }
                >
                  {category}
                </button>
              ))}
            </div>

          </div>


          {/* =================================================
              ARTICLE LIST
              ================================================= */}

          <div className="blog-list">

            {ARTICLES.slice(1).map((article, index) => (

              <Reveal
                key={article.number}
                className="blog-card"
                delay={index * 0.06}
                style={{
                  '--article-color': article.color,
                  '--article-ink': article.ink,
                }}
              >

                <div className="blog-card__number">
                  {article.number}
                </div>

                <div className="blog-card__visual">

                  <span className="blog-card__icon">
                    {article.icon}
                  </span>

                  <span className="blog-card__visual-number">
                    {article.number}
                  </span>

                </div>

                <div className="blog-card__content">

                  <div className="blog-article-meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <h4>
                    {article.subtitle}
                  </h4>

                  <p>
                    {article.description}
                  </p>

                  <Link
                    to="/blog"
                    className="blog-card__link"
                  >
                    Read Article
                    <ArrowRight size={17} />
                  </Link>

                </div>

                <div className="blog-card__arrow">
                  <ArrowUpRight size={22} />
                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING
          ===================================================== */}

      <section className="blog-closing">

        <div className="blog-container">

          <Reveal>
            <SectionLabel number="02" light>
              Keep Exploring
            </SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            className="blog-closing__title"
          >
            READ.
            <br />
            <span>THINK.</span>
            <br />
            MAKE.
          </Reveal>

          <Reveal
            className="blog-closing__bottom"
            delay={0.15}
          >
            <p>
              Stay curious. Follow the work, the ideas, and
              the conversations shaping media.
            </p>

            <Link
              to="/verticals"
              className="blog-closing__button"
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