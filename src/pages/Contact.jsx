import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Contact.css'

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

function Label({ number, children, light = false }) {
  return (
    <p className={`contact-label ${light ? 'contact-label--light' : ''}`}>
      <span>{number}</span>
      {children}
    </p>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="contact-hero">

        <div className="contact-container">

          <Label number="07">
            Join Us / Contact
          </Label>

          <Reveal
            as="h1"
            className="contact-hero__title"
          >
            LET'S
            <br />
            <span>MAKE</span>
            <br />
            SOMETHING.
          </Reveal>

          <Reveal
            className="contact-hero__bottom"
            delay={0.15}
          >
            <p>
              Wanna make
              <br />
              something epic?
            </p>

            <p className="contact-hero__side">
              We're always happy to connect with
              passionate media people.
            </p>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT
          ===================================================== */}

      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-grid">

            {/* -----------------------------------------------
                LEFT — INFORMATION
                ----------------------------------------------- */}

            <Reveal className="contact-info">

              <Label number="01">
                Get Involved
              </Label>

              <h2>
                Be part of
                <br />
                the Collective.
              </h2>

              <p className="contact-info__intro">
                Work on real projects, build your portfolio,
                and make a dent.
              </p>


              <div className="contact-details">

                <a
                  href="mailto:contact@met.edu"
                  className="contact-detail"
                >
                  <span className="contact-detail__icon">
                    <Mail size={20} />
                  </span>

                  <span>
                    <small>Email</small>
                    <strong>contact@met.edu</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>


                <a
                  href="https://www.met.edu/institute/institute_of_mass_media"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail__icon">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <small>Visit</small>
                    <strong>MET IMM</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>

              </div>


              <div className="contact-location">

                <span className="contact-location__number">
                  400
                </span>

                <div>
                  <small>Institute</small>
                  <p>
                    MET IMM
                    <br />
                    MET College, Mumbai
                  </p>
                </div>

              </div>

            </Reveal>


            {/* -----------------------------------------------
                RIGHT — FORM
                ----------------------------------------------- */}

            <Reveal
              className="contact-form-wrap"
              delay={0.12}
            >

              <Label number="02">
                Send Us a Message
              </Label>

              <h2>
                Tell us
                <br />
                what's up.
              </h2>

              {!submitted ? (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form__field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>


                  <div className="contact-form__field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>


                  <div className="contact-form__field">
                    <label htmlFor="subject">
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                    />
                  </div>


                  <div className="contact-form__field">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us a little more..."
                      required
                    />
                  </div>


                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <ArrowRight size={19} />
                  </button>

                </form>

              ) : (

                <div className="contact-form__success">

                  <span>✦</span>

                  <h3>
                    MESSAGE
                    <br />
                    READY.
                  </h3>

                  <p>
                    Thanks for reaching out.
                    We'll be in touch.
                  </p>

                  <a
                    href="mailto:contact@met.edu"
                    className="contact-submit"
                  >
                    Email the Collective
                    <ArrowUpRight size={18} />
                  </a>

                </div>

              )}

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOIN STATEMENT
          ===================================================== */}

      <section className="contact-join">

        <div className="contact-container">

          <Reveal>
            <Label number="03" light>
              Join Us
            </Label>
          </Reveal>

          <Reveal
            as="h2"
            className="contact-join__title"
          >
            WORK.
            <br />
            BUILD.
            <br />
            <span>MAKE A DENT.</span>
          </Reveal>

          <Reveal
            className="contact-join__bottom"
            delay={0.15}
          >
            <p>
              Be part of the Collective — work on real
              projects, build your portfolio, and make a dent.
            </p>

            <a
              href="mailto:contact@met.edu"
              className="contact-join__button"
            >
              Join the Collective
              <ArrowRight size={18} />
            </a>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="contact-footer">

        <div className="contact-container">

          <div className="contact-footer__top">

            <div>
              <p className="contact-footer__brand">
                MET<span>.</span>
              </p>

              <p className="contact-footer__tagline">
                Not a Classroom.
                <br />
                Not a Workshop.
                <br />
                <strong>A Real Agency.</strong>
              </p>
            </div>


            <div className="contact-footer__links">

              <div>
                <small>Navigate</small>

                <a href="/about">About</a>
                <a href="/objectives">Objectives</a>
                <a href="/verticals">Verticals</a>
                <a href="/mentorship">Mentorship</a>
              </div>

              <div>
                <small>&nbsp;</small>

                <a href="/team">Team</a>
                <a href="/blog">Blog</a>
                <a href="/join">Join Us</a>
              </div>

              <div>
                <small>Institute</small>

                <a
                  href="https://www.met.edu/institute/institute_of_mass_media"
                  target="_blank"
                  rel="noreferrer"
                >
                  MET IMM ↗
                </a>

                <span>
                  MET College,
                  <br />
                  Mumbai
                </span>
              </div>

            </div>

          </div>


          <div className="contact-footer__bottom">

            <span>
              © {new Date().getFullYear()} MET Media Collective ·
              MET IMM, Mumbai
            </span>

            <span>
              Where Learning Meets Action · MET IMM
            </span>

          </div>

        </div>

      </footer>

    </main>
  )
}