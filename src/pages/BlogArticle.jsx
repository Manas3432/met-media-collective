import { motion, useReducedMotion } from 'framer-motion'
import './BlogArticle.css'
import { useLocation } from 'react-router-dom'

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

export default function BlogArticle() {
  const { pathname } = useLocation()

  const isBlog2 = pathname === '/blog/when-students-take-the-lead'

  /* ==========================================================
     BLOG 02
     ========================================================== */

  if (isBlog2) {
    return (
      <main className="blog-article-page">

        <section className="blog-article-hero">
          <div className="blog-container">

            <p className="blog-article-label">
              <span>02</span>
              MMC / The Collective
            </p>

            <Reveal as="h1" className="blog-article-title">
              When Students Take the Lead
            </Reveal>

            <Reveal className="blog-article-subtitle" delay={0.1}>
              From studying communication to experiencing what it means to create it.
            </Reveal>

            <Reveal className="blog-article-author" delay={0.15}>
              — by Rashmi Borhade
            </Reveal>

          </div>
        </section>


        <section className="blog-article-body">

          <div className="blog-container">

            <Reveal className="blog-article-image">
              <img
                src="/Blog/Blog2.png"
                alt="When Students Take the Lead"
              />
            </Reveal>


            <article className="blog-article-content">

              <p>
                There is a point in every media student’s journey when the way
                we look at communication begins to change. At first, media is
                something we observe, analyse and discuss. We study campaigns,
                examine advertisements, understand audiences and learn why
                certain stories work. But when we are given the responsibility
                of actually creating something for an audience, those lessons
                begin to feel very different. The concepts we once discussed in
                classrooms suddenly become decisions we have to make ourselves.
              </p>

              <p>
                That is where <strong>MMC: MET Media Collective</strong>, the
                student-led media agency at MET Institute of Mass Media, comes
                in. As we begin working on real projects, the experience is not
                simply about producing content. It is about understanding the
                thought, responsibility and intention that go into creating
                media. And somewhere along the way, we begin to look at the
                media around us a little differently too.
              </p>


              <h2>
                Suddenly, Everything Becomes Something to Study
              </h2>

              <p>
                Once you start creating media, it becomes difficult to look at it
                in quite the same way.
              </p>

              <p>
                An advertisement on the street is no longer just something you
                pass by. You begin noticing its headline, visual language,
                placement and the audience it is trying to reach. A brand’s
                social media page becomes an exercise in understanding tone and
                consistency. A campaign you come across online makes you wonder
                why a particular idea was chosen and what made it effective.
              </p>

              <p>
                Even the simplest piece of content can become a source of
                observation.
              </p>

              <p>
                We start noticing the opening line of a video, the choice of
                music, the framing of an image or the way a caption has been
                written. We begin asking what made someone stop and pay
                attention in the first place.
              </p>

              <p>
                This is one of the most interesting things responsibility does.
                It turns everyday media into a collection of lessons. We become
                more curious about the choices behind the final product because
                we know that, sooner or later, we will be making similar choices
                ourselves.
              </p>


              <h2>
                Attention Is Not Something We Can Assume
              </h2>

              <p>
                Today, audiences have more content competing for their attention
                than ever before. Every scroll brings something new, and every
                platform has its own language, pace and expectations.
              </p>

              <p>
                For us as students, this makes one thing particularly clear:
                creating content is not the same as creating communication.
              </p>

              <p>
                A piece of content may look good, but does it have something to
                say? A campaign may be creative, but is it relevant to the people
                it is trying to reach? A headline may sound interesting, but does
                it actually make someone want to know more?
              </p>

              <p>
                These questions become much more important when there is a real
                audience on the other side.
              </p>

              <p>
                Responsibility encourages us to think beyond
                <em>“Will this look good?”</em> and towards
                <em>“Will this mean something to the person seeing it?”</em>
              </p>

              <p>
                That shift might seem small, but it changes the way an idea is
                developed from the very beginning.
              </p>


              <h2>
                Creativity Needs a Purpose
              </h2>

              <p>
                As media students, we are encouraged to experiment, and that
                freedom is important. Some of the most interesting ideas come
                from being willing to try something unexpected.
              </p>

              <p>
                But real responsibility also teaches us that creativity works
                best when it has direction.
              </p>

              <p>
                Every creative decision communicates something. The words we
                use, the image we choose, the tone we adopt and even the
                platform we select can affect how a message is understood.
              </p>

              <p>
                That means an idea cannot simply be interesting for the sake of
                being interesting. It needs to serve a purpose.
              </p>

              <p>
                Sometimes that purpose is to inform. Sometimes it is to
                entertain. Sometimes it is to make someone think, remember,
                participate or feel connected to something.
              </p>

              <p>
                Understanding that purpose helps us make better creative
                decisions without taking away the freedom to experiment.
              </p>


              <h2>
                The Audience Stops Being a Slide in a Presentation
              </h2>

              <p>
                In classrooms, we often talk about audiences through
                demographics, interests and behaviour. These are useful ways to
                understand people, but working on real communication makes
                audiences feel much more human.
              </p>

              <p>
                There are real people behind every view, like, comment, share or
                scroll.
              </p>

              <p>
                Two people can see the same piece of content and take away
                completely different things from it. Something that seems
                obvious to the person creating it may not be obvious to the
                person receiving it. A joke may work for one audience and
                completely miss the mark with another.
              </p>

              <p>
                This makes understanding an audience less about simply
                identifying who they are and more about considering how they
                think.
              </p>

              <p>
                At MMC, this is part of what makes creating media interesting.
                We have to step outside our own perspective and think about how
                an idea might exist in someone else’s world.
              </p>


              <h2>
                Working Together Changes the Way We Think
              </h2>

              <p>
                A media project may begin with one idea, but it rarely remains
                the responsibility of one person.
              </p>

              <p>
                A campaign can involve research, writing, strategy, design,
                photography, videography, editing and distribution. Each part
                influences the next, which means that collaboration becomes just
                as important as individual creativity.
              </p>

              <p>
                Working as part of a collective teaches us to understand our
                role within a larger process. A writer needs to communicate with
                a designer. A creative idea may need to work within production
                limitations. A strategy may change the way content is created.
              </p>

              <p>
                It also teaches us to listen.
              </p>

              <p>
                Sometimes the strongest contribution to a project is not another
                idea, but the ability to recognise why someone else’s idea works
                better.
              </p>

              <p>
                That is an important lesson for anyone entering the media
                industry: good work is rarely about proving who had the best
                idea. It is about making the final idea better.
              </p>


              <h2>
                Feedback Starts to Feel More Valuable
              </h2>

              <p>
                There is a difference between receiving feedback on an
                assignment and receiving feedback on something that is actually
                going to be used.
              </p>

              <p>
                When a project has a purpose, revisions become part of the
                process rather than an indication that something has gone wrong.
              </p>

              <p>
                A headline may need to be changed. A design may need to be
                simplified. A video may need a stronger opening. A campaign may
                need to speak to its audience in a different way.
              </p>

              <p>
                Learning to accept these changes is part of becoming a better
                creator.
              </p>

              <p>
                It teaches us that being attached to an idea is not the same as
                being committed to the outcome. Sometimes, the best thing we can
                do for an idea is change it.
              </p>


              <h2>
                Responsibility Also Shows Us What We Do Not Know
              </h2>

              <p>
                One of the most useful things about working on real projects is
                discovering where our knowledge ends.
              </p>

              <p>
                We may understand the theory behind a campaign and still
                struggle with its execution. We may have a strong concept but
                discover that bringing it to life requires skills we have not
                developed yet.
              </p>

              <p>
                And that is perfectly alright.
              </p>

              <p>
                In fact, that is where learning becomes most meaningful.
              </p>

              <p>
                A real project gives us a reason to research something we do not
                understand, ask someone for help, learn a new tool or rethink an
                approach. Instead of learning simply because something is on a
                syllabus, we learn because the work requires us to.
              </p>


              <h2>
                We Start Becoming More Conscious Consumers of Media
              </h2>

              <p>
                Perhaps the most interesting change happens even when we are not
                working.
              </p>

              <p>
                We begin noticing the world around us differently.
              </p>

              <p>
                We question why certain campaigns stay with us while others
                disappear. We notice whose stories are being told and how they
                are being represented. We think about why one brand feels
                authentic while another feels disconnected. We become more
                aware of the choices that shape the media we consume every day.
              </p>

              <p>
                And that awareness makes us better creators. Because the more
                carefully we observe, the more thoughtfully we can create.
              </p>


              <h2>
                What Responsibility Really Changes
              </h2>

              <p>
                Real responsibility does not mean that students suddenly have
                everything figured out. It does not turn a classroom into a
                professional agency overnight.
              </p>

              <p>
                What it does is give our learning a different kind of purpose.
              </p>

              <p>
                At MMC, we are still students. We are learning, experimenting,
                making mistakes and finding our own creative voices. But we are
                also beginning to understand what it means to be accountable for
                an idea once it leaves the classroom.
              </p>

              <p>
                We are learning that communication is not only about what we
                want to say. It is also about how someone else receives it.
              </p>

              <p>
                We are learning that creativity becomes stronger when it has
                purpose, that collaboration can make an idea better and that
                feedback is part of creating rather than something that comes
                afterwards.
              </p>

              <p>
                Most importantly, we are learning to look at media from both
                sides: as the audience and as the creator.
              </p>

              <p>
                And perhaps that is where real responsibility makes its biggest
                difference.
              </p>

              <p className="blog-article-ending">
                It does not simply change the way we create media. It changes the
                way we see the media we have always been surrounded by.
              </p>

            </article>

          </div>

        </section>

      </main>
    )
  }


  /* ==========================================================
     BLOG 01 — EXISTING ARTICLE
     ========================================================== */

  return (
    <main className="blog-article-page">

      <section className="blog-article-hero">
        <div className="blog-container">

          <p className="blog-article-label">
            <span>01</span>
            MMC / The Collective
          </p>

          <Reveal as="h1" className="blog-article-title">
            What Happens When Students Run a Real Media Agency?
          </Reveal>

          <Reveal className="blog-article-subtitle" delay={0.1}>
            Because the best way to understand media, might be to make it.
          </Reveal>

          <Reveal className="blog-article-author" delay={0.15}>
            — by Rashmi Borhade
          </Reveal>

        </div>
      </section>


      <section className="blog-article-body">

        <div className="blog-container">

          <Reveal className="blog-article-image">
            <img
              src="/Blog/Blog1.png"
              alt="MET Media Collective"
            />
          </Reveal>


          <article className="blog-article-content">

            <p>
              There is a certain difference between learning about the media
              industry and actually being asked to function within it.
            </p>

            <p>
              In a classroom, a brief can be discussed, a campaign can be
              conceptualised, and a deadline can be moved when there is an
              assignment due the next day. In a real media agency, however,
              the brief still exists, the audience is still waiting, and the
              deadline does not particularly care about your lecture schedule.
            </p>

            <p>
              That is exactly what makes <strong>MMC - MET Media Collective</strong>
              {' '}different.
            </p>

            <p>
              Launching on <strong>2 October</strong>, MMC is the campus media
              agency of <strong>MET Institute of Mass Media</strong>, created
              to take students beyond the classroom and into the experience
              of working as a media collective. It is a space where ideas are
              not simply submitted for marks; they are developed, executed,
              published and experienced by an actual audience.
            </p>

            <p>
              So, what happens when students run a real media agency?
            </p>

            <p>
              Well, we are about to find out.
            </p>


            <h2>From classroom concepts to real briefs</h2>

            <p>
              One of the biggest changes is that the work suddenly feels a lot
              more real.
            </p>

            <p>
              A media student might already know what a creative brief is, how
              a campaign works or why an audience matters. But knowing something
              academically and having to make decisions around it are two very
              different things.
            </p>

            <p>
              At MMC, a brief can mean asking: <em>Who are we speaking to?
              What do they care about? What should they feel? Where should they
              see this? And, most importantly, why should they care?</em>
            </p>

            <p>
              There is no single correct answer.
            </p>

            <p>
              The process involves brainstorming, researching, writing, designing,
              filming, editing, presenting, revising and sometimes going back to
              the beginning because an idea that looked brilliant at 4 p.m. does
              not look quite as brilliant at 9 p.m.
            </p>

            <p>
              And that is part of the experience.
            </p>


            <h2>Everyone becomes part of the process</h2>

            <p>
              A real agency does not run on one person having one great idea.
            </p>

            <p>
              It runs on collaboration.
            </p>

            <p>
              MMC brings together students with different interests, strengths
              and ways of thinking. Someone might think visually, someone might
              naturally build a narrative, someone might obsess over the smallest
              detail in a caption, while someone else is already thinking about
              how the audience will respond.
            </p>

            <p>
              That diversity is important.
            </p>

            <p>
              A campaign is rarely just a design, just a video or just a piece
              of writing. It is all of those things working together. When students
              work alongside one another, they begin to understand how different
              parts of the media process connect.
            </p>

            <p>
              The writer needs the designer. The designer needs the strategist.
              The strategist needs the researcher. The social media team needs
              everyone.
            </p>

            <p>
              And everyone needs to communicate.
            </p>


            <h2>Deadlines suddenly mean something</h2>

            <p>
              There is also something humbling about discovering that creativity
              and time management have to coexist.
            </p>

            <p>
              We all love the exciting part of a project; the brainstorming,
              the mood boards, the first draft, the moment when an idea finally
              starts looking like something.
            </p>

            <p>
              But then comes the deadline.
            </p>

            <p>
              Running an agency means learning how to turn an idea into something
              deliverable. It means understanding that perfection cannot always
              be the enemy of completion. It means responding to feedback,
              making changes without taking them personally and learning that
              a second draft is not necessarily a failure of the first.
            </p>

            <p>
              Sometimes, it is simply how good work gets made.
            </p>

            <p>
              MMC is designed to give students a chance to experience exactly
              that process while still having the support and space to learn
              from it.
            </p>

            <p>
              <strong>There will be mistakes. That is the point.</strong>
            </p>


            <p>
              A student-run agency is not expected to function like an agency
              with twenty years of experience.
            </p>

            <p>
              And that is precisely what makes it interesting.
            </p>

            <p>
              There will be ideas that do not work. There will be posts that
              need rewriting, concepts that need rethinking and probably a few
              moments where everyone looks at the clock and wonders how the
              deadline arrived so quickly.
            </p>

            <p>
              But these moments are part of learning.
            </p>

            <p>
              The goal is not to create a space where students never make
              mistakes. It is to create a space where mistakes become useful.
            </p>

            <p>
              Because the media industry does not really offer a pause button.
              The earlier students learn how to adapt, collaborate and solve
              problems, the more prepared they become for what comes next.
            </p>


            <h2>But this is not just about work</h2>

            <p>
              For us, MMC is also about creating something that belongs to the
              campus.
            </p>

            <p>
              A college is full of stories; events, people, conversations,
              ideas, talent and the small moments that might otherwise disappear
              after the day is over.
            </p>

            <p>
              A campus media agency has the opportunity to capture those stories
              and give them a life beyond the classroom.
            </p>

            <p>
              That could mean telling the story of an event, creating a campaign
              around a campus initiative, experimenting with a new format,
              highlighting student talent or finding a completely unexpected way
              to look at something familiar.
            </p>

            <p>
              The campus becomes our environment, our audience and, in many
              ways, our first creative laboratory.
            </p>


            <h2>So, what happens next?</h2>

            <p>
              MMC is not being launched with the promise that we already have
              everything figured out.
            </p>

            <p>
              We are launching with the promise that we are willing to figure
              it out together.
            </p>

            <p>
              MET Media Collective is a chance to experience what happens when
              students are trusted with responsibility, creativity and an
              audience. It is where classroom knowledge meets real execution,
              where ideas have to move from notebooks to screens, and where
              collaboration becomes more than a group assignment.
            </p>

            <p>
              Most importantly, it is an opportunity to ask better questions.
            </p>

            <p>
              What makes people stop scrolling?
            </p>

            <p>
              What makes a story worth telling?
            </p>

            <p>
              What makes an idea memorable?
            </p>

            <p>
              What happens when creativity meets strategy?
            </p>

            <p>
              And what can students create when they are given the chance to
              actually create?
            </p>

            <p>
              On 2 October, MMC begins answering those questions.
            </p>

            <p>
              We are not just opening a campus agency.
            </p>

            <p>
              <strong>We are opening a space for ideas to move.</strong>
            </p>

            <p className="blog-article-ending">
              Welcome to MMC - MET Media Collective.
            </p>

          </article>

        </div>

      </section>

    </main>
  )
}