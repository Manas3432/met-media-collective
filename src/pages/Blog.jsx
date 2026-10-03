import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Blog.css'

const ARTICLES = [
  {
  number: '01',
  category: 'MMC / THE COLLECTIVE',
  date: 'October 2025',
  title: 'What Happens When Students Run a Real Media Agency?',
  subtitle:
    'Because the best way to understand media, might be to make it.',
  description:
    'There is a certain difference between learning about the media industry and actually being asked to function within it.',
  icon: '',
  color: '#E31E24',
  ink: '#FFFFFF',
},
  {
  number: '02',
  category: 'MMC / THE COLLECTIVE',
  date: '',
  title: 'When Students Take the Lead',
  subtitle:
    'From studying communication to experiencing what it means to create it.',
  description:
    'There is a point in every media student’s journey when the way we look at communication begins to change.',
  icon: '',
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
              <strong>04</strong>
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
  <img
    src="/Blog/Blog1.png"
    alt="MET Media Collective"
    className="blog-feature__image"
  />
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

              <a
  href="/blog/real-media-agency"
  target="_blank"
  rel="noopener noreferrer"
  className="blog-read-link"
>
  Read the Blog
  <ArrowUpRight size={18} />
</a>

            </Reveal>

          </div>

          <div className="blog-feature blog-feature--second">

  <Reveal className="blog-feature__visual">
    <img
      src="/Blog/Blog2.png"
      alt="When Students Take the Lead"
      className="blog-feature__image"
    />
  </Reveal>

  <Reveal
    className="blog-feature__content"
    delay={0.15}
  >

    <div className="blog-article-meta">
      <span>{ARTICLES[1].category}</span>
      {ARTICLES[1].date && (
        <span>{ARTICLES[1].date}</span>
      )}
    </div>

    <h2>
      {ARTICLES[1].title}
    </h2>

    <h3>
      {ARTICLES[1].subtitle}
    </h3>

    <p>
      {ARTICLES[1].description}
    </p>

    <a
      href="/blog/when-students-take-the-lead"
      target="_blank"
      rel="noopener noreferrer"
      className="blog-read-link"
    >
      Read the Blog
      <ArrowUpRight size={18} />
    </a>

  </Reveal>

</div>


          {/* =================================================
              FILTERS
              ================================================= */}

          <div className="blog-filter">
  <span className="blog-filter__label">
    Categories
  </span>
</div>


          {/* =================================================
              ARTICLE LIST
              ================================================= */}

          <div className="blog-list">

            {ARTICLES.slice(2).map((article, index) => (

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
                    {String(index + 1).padStart(2, '0')}
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
          </Reveal>

        </div>

      </section>

    </main>
  )
}