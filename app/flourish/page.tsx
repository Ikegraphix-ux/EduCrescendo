import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import IconBadge from "@/components/IconBadge";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import FlourishWheel from "@/components/FlourishWheel";
import { BOOK_DISCOVERY_MSG } from "@/lib/pages";
import { domainFocus } from "@/lib/content-data";

export const metadata = { title: "FLOURISH™ Ecosystem — EduCrescendo Global™" };

export default function FlourishPage() {
  return (
    <>
      <Hero backgroundImage="/images/edu/flourid.jpg" style={{ background: "radial-gradient(circle at 85% 25%, #14603f 0%, #0c4a30 55%, var(--blue-dark) 100%)" }}>
        <div className="grid g2" style={{ alignItems: "center", gap: 40 }}>
          <div>
            <p className="eyebrow">The FLOURISH™ Ecosystem</p>
            <h1>A Framework for Human Flourishing and Transformational Impact</h1>
            <p className="lead">
              The FLOURISH™ Ecosystem is EduCrescendo Global™&apos;s integrated architecture for
              advancing flourishing across education, leadership, communities, and society. It
              brings together research, innovation, assessment, leadership development,
              organisational transformation, and practical implementation into one coherent system
              designed to help individuals and institutions thrive. More than a framework,
              FLOURISH™ is a movement toward a future where flourishing becomes intentional,
              measurable, and sustainable.
            </p>
            <PageButton href="/solutions" variant="accent">Explore Our Solutions</PageButton>
            <WaButton message={BOOK_DISCOVERY_MSG} variant="ghost-light" style={{ marginLeft: 12 }}>
              Book a Discovery Conversation
            </WaButton>
          </div>
          <FlourishWheel />
        </div>
      </Hero>

      <Reveal>
        <p className="eyebrow">What Is FLOURISH™?</p>
        <h2>Moving Beyond Traditional Measures of Success</h2>
        <p className="lead">
          Success has often been defined through limited indicators such as grades, test scores,
          productivity, or economic outcomes. While important, these measures alone do not fully
          capture human potential or societal wellbeing. The FLOURISH™ Ecosystem expands the
          conversation by focusing on holistic flourishing — the conditions that enable people,
          organisations, and communities to thrive.
        </p>
        <p className="body" style={{ fontStyle: "italic", maxWidth: 600 }}>
          How do we intentionally cultivate environments where people flourish and systems become
          catalysts for flourishing?
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">The FLOURISH™ Vision</p>
        <h2>Flourishing at Every Level</h2>
        <p className="body" style={{ maxWidth: 680, marginBottom: 20 }}>
          The FLOURISH™ Ecosystem recognises that transformation must occur across interconnected
          layers. When one layer flourishes, it strengthens the others. Transformation therefore
          becomes systemic rather than isolated. Each layer contributes to and benefits from the
          flourishing of the whole ecosystem.
        </p>
        <FieldTags tags={["Learners", "Educators", "Leaders", "Schools & Institutions", "Families & Communities", "Society"]} />
      </Reveal>

      <Reveal>
        <p className="eyebrow">The FLOURISH™ Philosophy</p>
        <h2>Flourishing Is Not an Accident</h2>
        <p className="lead">
          Flourishing emerges when individuals and institutions intentionally develop conditions
          that support growth, wellbeing, purpose, resilience, contribution, and sustainable
          success. The FLOURISH™ Ecosystem is built on the belief that flourishing can be:
        </p>
        <div className="grid g3" style={{ maxWidth: 760 }}>
          {["Cultivated", "Measured", "Strengthened", "Sustained", "Scaled"].map((w) => (
            <div className="card" key={w}><h3>{w}</h3></div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow center" style={{ justifyContent: "center" }}>The FLOURISH™ Architecture</p>
        <h2 className="center">Six Interconnected Domains</h2>
        <div className="grid g3" style={{ marginTop: 32 }}>
          {domainFocus.map((d) => (
            <div className="card" key={d.title}>
              <IconBadge name={d.icon} />
              <h3>{d.title}</h3>
              <p className="body" style={{ fontSize: 13 }}>Focus Areas: {d.areas.join(", ")}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">FlourishScore™</p>
            <h2>Measuring What Matters</h2>
            <p className="lead" style={{ marginBottom: 12 }}>
              At the centre of the FLOURISH™ Ecosystem is FlourishScore™ — a transformation
              intelligence and assessment system designed to help institutions understand, measure,
              and improve flourishing outcomes. It provides:
            </p>
            <FieldTags tags={["Baseline Diagnostics", "Institutional Insights", "Progress Tracking", "Strategic Recommendations", "Transformation Roadmaps"]} />
            <p className="body" style={{ margin: "14px 0" }}>
              Through FlourishScore™, flourishing becomes visible, measurable, and actionable.
            </p>
            <PageButton href="/flourish">Learn About FlourishScore™</PageButton>
          </div>
          <Photo
            src="/images/edu/report.jpg"
            alt="FlourishScore™ report"
            minHeight={280}
            captionLabel="Imagery direction"
            caption="FlourishScore™ report mock-up on a tablet."
          />
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow center" style={{ justifyContent: "center" }}>How the Ecosystem Works</p>
        <h2 className="center">Diagnose → Understand → Develop → Transform → Flourish</h2>
        <div className="grid g3" style={{ marginTop: 32 }}>
          {[
            ["Diagnose", "Assess current realities and establish meaningful baselines."],
            ["Understand", "Identify strengths, challenges, opportunities, and priorities."],
            ["Develop", "Build capacity through targeted interventions and support."],
            ["Transform", "Implement strategies that create measurable change."],
            ["Flourish", "Sustain growth and continuously improve outcomes."],
          ].map(([t, b]) => (
            <div className="card" key={t}><h3>{t}</h3><p className="body">{b}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Who the Ecosystem Serves</p>
        <h2>Designed for Diverse Contexts</h2>
        <FieldTags tags={["Basic Schools", "Secondary Schools", "International Schools", "Faith-Based Institutions", "Educational Networks", "Universities", "Community Organisations", "Leadership Development Programmes", "Government and Development Initiatives"]} />
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Research, Innovation and Thought Leadership</p>
            <h2>Building the Future of Flourishing</h2>
            <p className="body" style={{ marginBottom: 0 }}>
              The FLOURISH™ Ecosystem continues to evolve through ongoing research, innovation,
              collaboration, and practical implementation. EduCrescendo Global™ is committed to
              developing frameworks, tools, and insights that advance the understanding and
              practice of flourishing in education and society.
            </p>
          </div>
          <Photo src="/images/edu/researchfinding.jpg" alt="Research findings" minHeight={220} />
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Ecosystem in Action</p>
        <h2>Turning Vision into Measurable Impact</h2>
        <p className="lead">
          The ultimate purpose of the FLOURISH™ Ecosystem is not merely to inspire. Its purpose is
          to produce measurable flourishing. Through integrated solutions, leadership development,
          assessment systems, and collaborative partnerships, we help institutions move from
          aspiration to transformation.
        </p>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--green)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#dff5eb" }}>
          Join the Journey Toward Flourishing
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          The future belongs to institutions that intentionally cultivate flourishing. Explore how
          the FLOURISH™ Ecosystem can support your organisation&apos;s transformation journey.
        </h2>
        <PageButton href="/solutions" variant="accent">Explore Solutions</PageButton>
        <PageButton href="/validation" variant="ghost-light" style={{ marginLeft: 10 }}>
          Apply for the Validation Partnership Programme
        </PageButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 560 }}>
        <p className="lead center" style={{ fontWeight: 600, color: "var(--text)" }}>
          Flourishing is not simply an outcome. It is a way of designing systems, developing
          people, shaping cultures, and transforming societies. The FLOURISH™ Ecosystem exists to
          make that vision practical, measurable, and scalable.
        </p>
      </Reveal>
    </>
  );
}
