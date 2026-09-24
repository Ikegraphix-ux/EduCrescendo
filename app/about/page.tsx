import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import IconBadge from "@/components/IconBadge";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import { BOOK_DISCOVERY_MSG } from "@/lib/pages";

export const metadata = { title: "About — EduCrescendo Global™" };

const coreValues = [
  { icon: "star" as const, tone: undefined, title: "Flourishing", body: "We pursue holistic wellbeing, growth, and thriving for individuals and communities." },
  { icon: "leadership" as const, tone: "green" as const, title: "Excellence", body: "We strive for the highest standards in thought, design, implementation, and impact." },
  { icon: "shield" as const, tone: "gold" as const, title: "Stewardship", body: "We responsibly manage opportunities, relationships, resources, and influence." },
  { icon: "diagnose" as const, tone: undefined, title: "Innovation", body: "We continuously explore better ways to address complex educational challenges." },
  { icon: "schools" as const, tone: "green" as const, title: "Integrity", body: "We act with honesty, transparency, and accountability." },
  { icon: "communities" as const, tone: "gold" as const, title: "Impact", body: "We focus on outcomes that produce meaningful and lasting transformation." },
];

const focusAreas = [
  { icon: "learner" as const, tone: undefined, title: "Flourishing Learners™", body: "Supporting holistic learner development and future readiness." },
  { icon: "educator" as const, tone: "green" as const, title: "Flourishing Educators™", body: "Empowering teachers and education professionals to thrive." },
  { icon: "leadership" as const, tone: "gold" as const, title: "Flourishing Leadership™", body: "Developing leaders capable of creating transformational cultures." },
  { icon: "schools" as const, tone: undefined, title: "Flourishing Schools™", body: "Strengthening institutions through strategic and systemic improvement." },
  { icon: "communities" as const, tone: "green" as const, title: "Flourishing Communities™", body: "Expanding educational impact beyond school walls." },
  { icon: "diagnose" as const, tone: "gold" as const, title: "FlourishScore™", body: "Measuring and advancing flourishing through meaningful data and insights." },
];

export default function AboutPage() {
  return (
    <>
      <Hero backgroundImage={false} style={{ padding: "96px 56px 76px" }}>
        <p className="eyebrow">About</p>
        <h1 style={{ maxWidth: 660 }}>Reimagining Education for Human Flourishing</h1>
        <p className="lead">
          EduCrescendo Global™ is an educational transformation ecosystem dedicated to helping
          individuals, institutions, and societies flourish. We develop innovative frameworks,
          assessment systems, leadership models, and practical solutions that empower meaningful,
          measurable, and sustainable transformation across education and beyond.
        </p>
      </Hero>

      <Reveal>
        <p className="eyebrow">Our Story</p>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <h2>Why EduCrescendo Global™ Exists</h2>
            <p className="body" style={{ marginBottom: 14 }}>
              Around the world, educational systems are under increasing pressure to prepare
              learners for a complex and rapidly changing future. Despite significant investments
              in education, many institutions continue to struggle with challenges related to
              learner wellbeing, leadership effectiveness, teacher development, organisational
              culture, and long-term societal impact.
            </p>
            <p className="body" style={{ marginBottom: 14 }}>
              At EduCrescendo Global™, we believe education must be evaluated not only by academic
              outcomes but also by its ability to cultivate flourishing human beings and thriving
              communities. This conviction gave rise to EduCrescendo Global™ — an ecosystem
              committed to advancing transformational approaches that help people, organisations,
              and societies move from surviving to flourishing.
            </p>
            <p className="body">
              Our work integrates research, innovation, leadership development, assessment, and
              implementation support to create practical pathways for sustainable growth and
              impact.
            </p>
          </div>
          <Photo
            src="/images/edu/flourid.jpg"
            alt="Founding team, working session, whiteboard visible — documentary, not staged."
            minHeight={160}
            captionLabel="Team snapshot"
            caption="Founding conversation, deep collaboration, and the early vision behind the ecosystem."
          />
        </div>
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2">
          <div className="card">
            <h3>Our Vision</h3>
            <p className="body" style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
              A World Where Individuals, Institutions, and Societies Flourish
            </p>
            <p className="body">
              We envision a future where education serves as a catalyst for human flourishing,
              enabling learners, educators, leaders, families, and communities to realise their
              full potential and contribute meaningfully to society.
            </p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p className="body" style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
              Advancing Flourishing Through Transformative Education
            </p>
            <p className="body">
              Our mission is to develop and deploy innovative educational ecosystems, frameworks,
              tools, and solutions that empower measurable flourishing and sustainable
              transformation across diverse contexts.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Our Belief</p>
        <h2>Education Should Produce More Than Achievement</h2>
        <p className="lead">
          Academic success matters. However, education must also nurture character, wellbeing,
          purpose, leadership, creativity, resilience, relationships, and contribution. We believe
          flourishing represents one of the most important outcomes of education and should be
          intentionally cultivated, measured, and sustained.
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Our Approach</p>
        <h2>Research-Informed. Innovation-Driven. Transformation-Focused.</h2>
        <p className="body" style={{ marginBottom: 28, maxWidth: 640 }}>
          Everything we do is guided by five foundational commitments:
        </p>
        <div className="grid g3">
          <div className="card"><h3>Understanding Before Intervention</h3><p className="body">Effective transformation begins with accurate diagnosis and deep understanding.</p></div>
          <div className="card"><h3>Measuring What Matters</h3><p className="body">What gets measured receives attention. We develop meaningful indicators that capture dimensions of flourishing often overlooked by traditional systems.</p></div>
          <div className="card"><h3>Building Capacity</h3><p className="body">Sustainable transformation occurs when people are empowered to lead change from within.</p></div>
          <div className="card"><h3>Integrating Theory and Practice</h3><p className="body">Ideas only create impact when translated into practical action.</p></div>
          <div className="card"><h3>Pursuing Long-Term Flourishing</h3><p className="body">We focus on sustainable outcomes that strengthen individuals, institutions, and communities over time.</p></div>
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Our Core Values</p>
        <h2 className="center" style={{ maxWidth: 560 }}>The Principles That Guide Our Work</h2>
        <div className="grid g3" style={{ marginTop: 32 }}>
          {coreValues.map((v) => (
            <div className="card" key={v.title}>
              <IconBadge name={v.icon} tone={v.tone} />
              <h3>{v.title}</h3>
              <p className="body">{v.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">What Makes Us Different</p>
        <h2>Beyond Consultancy</h2>
        <div className="grid g2" style={{ alignItems: "start" }}>
          <p className="lead" style={{ marginBottom: 0 }}>
            EduCrescendo Global™ is not simply a consultancy. We are a transformation ecosystem.
            Rather than offering isolated services, we develop integrated frameworks, solutions,
            and implementation pathways that help institutions move from aspiration to measurable
            progress. This integrated approach enables deeper and more sustainable change.
          </p>
          <FieldTags
            tags={[
              "Thought Leadership",
              "Research and Innovation",
              "Assessment Systems",
              "Leadership Development",
              "Capacity Building",
              "School Transformation Support",
              "Ecosystem Development",
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Our Focus Areas</p>
        <h2 className="center" style={{ maxWidth: 560 }}>Areas of Transformation</h2>
        <div className="grid g3" style={{ marginTop: 32 }}>
          {focusAreas.map((f) => (
            <div className="card" key={f.title}>
              <IconBadge name={f.icon} tone={f.tone} />
              <h3>{f.title}</h3>
              <p className="body">{f.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2" style={{ alignItems: "center" }}>
          <Photo
            src="/images/edu/founder.jpeg"
            alt="John Hayford Duah-Darkwah, Founder and Chief Education Transformation Strategist of EduCrescendo Global™"
            minHeight={320}
            captionLabel="Founder"
            caption="John Hayford Duah-Darkwah, Chief Education Transformation Strategist."
          />
          <div>
            <p className="eyebrow">Message from the Founder</p>
            <h2>Building a Future Where Flourishing Becomes the Norm</h2>
            <p className="body" style={{ marginBottom: 14 }}>
              At EduCrescendo Global™, we believe the future of education requires more than
              incremental improvement. It requires a renewed vision of what success means and a
              commitment to creating systems that enable people and institutions to flourish.
            </p>
            <p className="body" style={{ marginBottom: 14 }}>
              Our aspiration is to contribute frameworks, tools, ideas, and solutions that help
              educational communities unlock their potential and create lasting impact.
            </p>
            <p className="body" style={{ marginBottom: 14 }}>
              The journey towards flourishing is both a challenge and an opportunity. We invite
              educators, leaders, institutions, and partners to join us in shaping that future
              together.
            </p>
            <p className="body" style={{ fontWeight: 700, color: "var(--text)" }}>
              — John Hayford Duah-Darkwah
              <br />
              Founder &amp; Chief Education Transformation Strategist
              <br />
              EduCrescendo Global™
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#8fd6b0" }}>
          Join the Movement Toward Flourishing Education
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          Whether you&apos;re a school leader, educator, policymaker, development partner, or
          community stakeholder — there&apos;s a place for you in this journey.
        </h2>
        <PageButton href="/flourish" variant="accent">Explore the FLOURISH™ Ecosystem</PageButton>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="ghost-light" style={{ marginLeft: 10 }}>
          Book a Discovery Conversation
        </WaButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 600 }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>Looking Ahead</p>
        <p className="lead center">
          EduCrescendo Global™ continues to develop innovative frameworks, tools, partnerships, and
          initiatives that advance flourishing across education and society. Together, we can build
          environments where people do more than succeed. They flourish.
        </p>
      </Reveal>
    </>
  );
}

