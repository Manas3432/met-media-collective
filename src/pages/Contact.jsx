import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Contact.css'

const EASE = [0.2, 0.7, 0.2, 1]
const WHATSAPP_NUMBER = '916360837702'
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

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.43ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.46 4.45-9.9 9.91-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
const [submitting, setSubmitting] = useState(false)

async function handleSubmit(event) {
  event.preventDefault()

  const form = event.currentTarget

  const formData = new FormData(form)

  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  setSubmitting(true)

  const { error } = await supabase
    .from('join_submissions')
    .insert([
      {
        name,
        email,
        subject,
        message,
      },
    ])

  setSubmitting(false)

  if (error) {
    console.error('Submission error:', error)
    alert('Something went wrong. Please try again.')
    return
  }

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
            LET 'S
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
                    <strong>mmc@met.edu 
</strong>
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

                <a
  href={`https://wa.me/${WHATSAPP_NUMBER}`}
  target="_blank"
  rel="noreferrer"
  className="contact-detail"
  aria-label="Chat with MET Media Collective on WhatsApp"
>
  <span className="contact-detail__icon">
    <WhatsAppIcon />
  </span>

  <span>
    <small>WhatsApp</small>
    <strong>+91 63608 37702</strong>
  </span>

  <ArrowUpRight size={18} />
</a>

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
  disabled={submitting}
>
  {submitting ? 'Sending...' : 'Send Message'}
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