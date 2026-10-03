import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Work.css'

const NATIONAL_ANTHEM_IMAGES = [
  '/Work/national-anthem/national anthem 2.png',
  '/Work/national-anthem/national anthem 3.PNG',
  '/Work/national-anthem/national anthem 4.PNG',
  '/Work/national-anthem/national anthem 5.PNG',
  '/Work/national-anthem/national anthem 7.JPG',
  '/Work/national-anthem/national anthem 9.jpg',
  '/Work/national-anthem/national anthem 10.jpg',
  '/Work/national-anthem/national anthem 11.jpg',
  '/Work/national-anthem/national anthem 12.jpg',
  '/Work/national-anthem/national anthem 13.jpg',
  '/Work/national-anthem/national anthem 33.jpg',
]

const HOUSE_OF_WHITE_CIRCLES_IMAGES = [
  '/Work/house-of-white-circles/house of white circles 1.jpg',
  '/Work/house-of-white-circles/house of white circles 2.jpg',
  '/Work/house-of-white-circles/house of white circles 3.jpg',
  '/Work/house-of-white-circles/house of white circles 4.jpg',
  '/Work/house-of-white-circles/house of white circles 5.jpg',
  '/Work/house-of-white-circles/house of white circles 6.jpg',
  '/Work/house-of-white-circles/house of white circles 7.jpg',
  '/Work/house-of-white-circles/house of white circles 8.PNG',
  '/Work/house-of-white-circles/house of white circles 9.PNG',
  '/Work/house-of-white-circles/house of white circles 10.jpeg',
]
const CANNES_IMAGES = [
  '/Work/cannes/cannes 1.PNG',
  '/Work/cannes/cannes 2.PNG',
  '/Work/cannes/cannes 3.jpg',
  '/Work/cannes/cannes 4.jpg',
  '/Work/cannes/cannes 5.jpg',
  '/Work/cannes/cannes 6.jpg',
  '/Work/cannes/cannes 7.jpg',
]
const METAMORPHOSIS_IMAGES = [
  '/Work/Metamorphosis/metamorphosis 1.PNG',
  '/Work/Metamorphosis/metamorphosis 2.PNG',
  '/Work/Metamorphosis/metamorphosis 3.PNG',
  '/Work/Metamorphosis/metamorphosis 4.PNG',
  '/Work/Metamorphosis/metamorphosis 5.PNG',
  '/Work/Metamorphosis/metamorphosis 6.PNG',
  '/Work/Metamorphosis/metamorphosis 7.PNG',
  '/Work/Metamorphosis/metamorphosis 8.PNG',
  '/Work/Metamorphosis/metamorphosis 9.jpg',
  '/Work/Metamorphosis/metamorphosis 10.jpg',
]
const WORK = {
  number: '01',
  title: 'Mumbai Climate Week – National Anthem Rendition',
  description:
    'From direction to cinematography, coordination to post-production, our students led it with passion, professionalism, and purpose.',
}
const HOUSE_OF_WHITE_CIRCLES = {
  number: '02',
  title: 'From Classroom Creativity to Award-Winning Cinema',
  description:
    'This achievement reflects the power of storytelling, creativity, and cinematic vision nurtured at MET Institute of Mass Media.',
}
const CANNES = {
  number: '03',
  title: 'MET Takes the Global Stage',
  description:
    'What begins in the classroom can lead to the world stage. Through international exposure and hands-on industry experience, students step into a global environment to learn, connect, and explore the evolving world of film and media.',
}
const METAMORPHOSIS = {
  number: '04',
  title: 'Evolving Beyond Boundaries',
  description:
    'MET enters a new era as the Mediaverse, where stories transcend mediums, creativity meets technology, and imagination shapes reality. A celebration of transformation and the creators shaping tomorrow.',
}

const EASE = [0.2, 0.7, 0.2, 1]

function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  ...props
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    return (
      <Tag
        className={className}
        {...props}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      className={className}
      {...props}
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

function ImageSlideshow({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length, reduce])

  return (
    <div className="work-card__image">
      {images.map((image, index) => (
        <motion.img
          key={image}
          src={image}
          alt={`${alt} — image ${index + 1}`}
          className={`work-card__slide ${
            index === currentIndex ? 'work-card__slide--active' : ''
          }`}
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.025,
          }}
          transition={{
            opacity: {
              duration: 0.9,
              ease: 'easeInOut',
            },
            scale: {
              duration: 1.2,
              ease: 'easeOut',
            },
          }}
        />
      ))}
    </div>
  )
}

export default function Work() {
  return (
    <main className="work-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="work-hero">
        <div className="work-container">

          <p className="work-label">
            <span>05</span>
            Work / Projects
          </p>

          <Reveal as="h1" className="work-hero__title">
            WHAT WE
            <br />
            <span>MAKE.</span>
          </Reveal>

          <Reveal className="work-hero__bottom" delay={0.15}>
            <p>
              Real projects.
              <br />
              Real stories.
              <br />
              Real work.
            </p>

            <div className="work-hero__arrow">
              ↓
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          WORK
          ===================================================== */}

      <section className="work-projects">
        <div className="work-container">

          <div className="work-projects__intro">
            <Reveal>
              <p className="work-label">
                <span>01</span>
                Featured Work
              </p>

              <h2>
                FROM IDEA
                <br />
                <span>TO IMPACT.</span>
              </h2>
            </Reveal>

            <Reveal
              className="work-projects__intro-copy"
              delay={0.15}
            >
              <p>
                Work created by the Collective — from concept and
                production to execution and the final frame.
              </p>
            </Reveal>
          </div>

          {/* NATIONAL ANTHEM CARD */}

          <div className="work-projects__grid">
            

            <Reveal
  as="a"
  className="work-card"
  href="https://youtu.be/NsUQgWu7hlQ?si=5IH9c6pWVeJ5WifE"
  target="_blank"
  rel="noreferrer"
>

              <div className="work-card__media">
                <ImageSlideshow
                  images={NATIONAL_ANTHEM_IMAGES}
                  alt="Mumbai Climate Week National Anthem Rendition"
                />
              </div>

              <div className="work-card__top">
                <span>{WORK.number}</span>
                <ArrowUpRight size={24} />
              </div>

              <div className="work-card__content">
                <h3>{WORK.title}</h3>

                <p>{WORK.description}</p>
              </div>

            </Reveal>

            <Reveal
  as="a"
  className="work-card"
  href="https://www.instagram.com/p/DYgwx3YjRKQ/?stkn=MWttc2o0bGpyNGxidw=="
  target="_blank"
  rel="noreferrer"
>
  <div className="work-card__media">
    <ImageSlideshow
      images={HOUSE_OF_WHITE_CIRCLES_IMAGES}
      alt="House of White Circles"
    />
  </div>

  <div className="work-card__top">
    <span>{HOUSE_OF_WHITE_CIRCLES.number}</span>
    <ArrowUpRight size={24} />
  </div>

  <div className="work-card__content">
    <h3>{HOUSE_OF_WHITE_CIRCLES.title}</h3>

    <p>{HOUSE_OF_WHITE_CIRCLES.description}</p>
  </div>
</Reveal>

<Reveal
  as="a"
  className="work-card"
  href="https://www.instagram.com/reel/DYrY_7BML8c/?stkn=cTZyNW0yb2h4amcy"
  target="_blank"
  rel="noreferrer"
>
  <div className="work-card__media">
    <ImageSlideshow
      images={CANNES_IMAGES}
      alt="MET Takes the Global Stage"
    />
  </div>

  <div className="work-card__top">
    <span>{CANNES.number}</span>
    <ArrowUpRight size={24} />
  </div>

  <div className="work-card__content">
    <h3>{CANNES.title}</h3>

    <p>{CANNES.description}</p>
  </div>
</Reveal>

<Reveal
  as="a"
  className="work-card"
  href="https://www.instagram.com/metamorphosis.officiall?stkn=MTh4MDRpZzE3b293Nw=="
  target="_blank"
  rel="noreferrer"
>
  <div className="work-card__media">
    <ImageSlideshow
      images={METAMORPHOSIS_IMAGES}
      alt="METAMORPHOSIS"
    />
  </div>

  <div className="work-card__top">
    <span>{METAMORPHOSIS.number}</span>
    <ArrowUpRight size={24} />
  </div>

  <div className="work-card__content">
    <h3>{METAMORPHOSIS.title}</h3>

    <p>{METAMORPHOSIS.description}</p>
  </div>
</Reveal>

          </div>

        </div>
      </section>

    </main>
  )
}