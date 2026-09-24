import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import IconBadge from "@/components/IconBadge";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import { topics } from "@/lib/content-data";

export const metadata = { title: "Insights — EduCrescendo Global™" };

export default function InsightsPage() {
  return (
    <>
      <Hero slideshow={false} style={{ padding: "96px 56px 76px" }}>
        <p className="eyebrow">Insights</p>
        <h1 style={{ maxWidth: 680 }}>Ideas, Research, and Perspectives for Educational Transformation</h1>
        <p className="lead">
          The future of education will be shaped by the quality of ideas, the strength of
          leadership, and the courage to innovate. Insights is the thought leadership platform of
          EduCrescendo Global™ — a space for research, reflection, practical wisdom, and
          transformative conversations focused on flourishing, education, leadership, and societal
          impact. Here we explore the questions that matter, challenge conventional thinking, and
          share ideas that inspire meaningful change.
        </p>
        <PageButton href="/insights">Explore Articles</PageButton>
        <WaButton
          message="Hi, I'd like to subscribe to EduCrescendo Global Insights updates."
          variant="ghost-light"
          style={{ marginLeft: 12 }}
        >
          Subscribe for Updates
        </WaButton>
      </Hero>

      <Reveal>
        <p className="eyebrow">Why Insights?</p>
        <h2>Advancing the Conversation</h2>
        <p className="lead">
          Educational transformation requires more than programmes and solutions. It requires new
          ways of thinking. Through Insights, we seek to contribute thoughtful perspectives,
          practical frameworks, emerging research, and innovative ideas that support flourishing
          across individuals, institutions, and society. Our goal is not simply to provide
          information — our goal is to stimulate reflection, inspire action, and advance
          transformation.
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Featured Topics</p>
        <h2 className="center">Explore Key Areas of Thought Leadership</h2>
        <div className="grid g3" style={{ marginTop: 32 }}>
          {topics.map((t) => (
            <div className="card" key={t.title}>
              <IconBadge name={t.icon} />
              <h3>{t.title}</h3>
              <p className="body" style={{ fontSize: 13, marginBottom: 14 }}>{t.tags.join(", ")}</p>
              <WaButton
                message={`Hi, I'd like to learn more about ${t.title}.`}
                variant="secondary"
                style={{ padding: "9px 16px", fontSize: 12 }}
              >
                {t.cta}
              </WaButton>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Editor&apos;s Featured Insights</p>
        <div className="grid g3">
          <div className="card">
            <Photo src="/images/edu/researchdesk.jpg" alt="Research desk" minHeight={150} />
            <h3 style={{ marginTop: 16 }}>Why Flourishing May Be the Missing Measure of Educational Success</h3>
            <p className="body">Brief summary placeholder.</p>
          </div>
          <div className="card">
            <Photo src="/images/edu/classroom.jpg" alt="Classroom" minHeight={150} />
            <h3 style={{ marginTop: 16 }}>Beyond Academic Achievement: Rethinking What Schools Are For</h3>
            <p className="body">Brief summary placeholder.</p>
          </div>
          <div className="card">
            <Photo src="/images/edu/leadershipcircle.jpg" alt="Leadership circle" minHeight={150} />
            <h3 style={{ marginTop: 16 }}>The Rise of Flourishing Leadership™</h3>
            <p className="body">Brief summary placeholder.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Research Library</p>
        <h2>Research, Briefs, and Publications</h2>
        <p className="body" style={{ marginBottom: 18, maxWidth: 600 }}>
          Explore a growing collection of research-informed resources designed to support leaders,
          educators, institutions, and partners.
        </p>
        <FieldTags tags={["Research Briefs", "White Papers", "Position Papers", "Framework Documents", "Case Studies", "Educational Reports", "Validation Findings"]} />
        <PageButton href="/insights" style={{ marginTop: 18 }}>Access Resources</PageButton>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Thought Leadership Series</p>
        <h2>Signature Series</h2>
        <p className="body" style={{ marginBottom: 18, maxWidth: 620 }}>
          EduCrescendo Global™ develops recurring thought leadership series focused on pressing
          educational challenges and emerging opportunities. Potential series include:
        </p>
        <div className="grid g3">
          {[
            "The Future of Flourishing Education",
            "Flourishing Leadership Conversations",
            "Reimagining Schools",
            "Innovation and Learning",
            "Education and Societal Transformation",
            "Measuring What Matters",
          ].map((s) => (
            <div className="card" key={s}><p className="body">{s}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Case Studies and Stories</p>
            <h2>Transformation in Practice</h2>
            <p className="body" style={{ marginBottom: 0 }}>
              Ideas matter. Implementation matters even more. This section will feature examples,
              reflections, and stories demonstrating how frameworks, tools, and strategies are
              being applied in real-world contexts — including school transformation stories,
              validation programme experiences, leadership development journeys, innovation case
              studies, and community impact stories.
            </p>
          </div>
          <Photo src="/images/edu/interview.jpg" alt="Interview setup, natural light" minHeight={220} />
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">For Educators, Leaders, and Partners</p>
        <h2>Who Insights Is For</h2>
        <FieldTags tags={["School Leaders", "Proprietors", "Teachers", "Educational Consultants", "Policymakers", "Researchers", "Development Organisations", "Community Leaders", "Change Agents"]} />
        <p className="body" style={{ marginTop: 16 }}>
          If you are committed to advancing flourishing and transformation, this platform is for
          you.
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Contributing to the Conversation</p>
        <h2>Collaborate With Us</h2>
        <p className="lead" style={{ marginBottom: 16 }}>
          We welcome opportunities to engage with researchers, educators, innovators, institutions,
          and partners who share our commitment to flourishing and transformational impact.
        </p>
        <FieldTags tags={["Collaborative Research", "Guest Contributions", "Speaking Engagements", "Strategic Partnerships", "Innovation Projects"]} />
        <WaButton
          message="Hi, I'd like to get in touch with EduCrescendo Global."
          style={{ marginTop: 18 }}
        >
          Contact Our Team
        </WaButton>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#8fd6b0" }}>
          Building the Future Through Better Ideas
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          The future is shaped by the ideas we cultivate today. At EduCrescendo Global™, we believe
          flourishing is one of the most important conversations of our time.
        </h2>
        <WaButton message="Hi, I'd like to subscribe to EduCrescendo Global Insights updates." variant="accent">
          Subscribe for Updates
        </WaButton>
        <PageButton href="/flourish" variant="ghost-light" style={{ marginLeft: 10 }}>
          Explore the FLOURISH™ Ecosystem
        </PageButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 540 }}>
        <p className="lead center" style={{ fontWeight: 600, color: "var(--text)" }}>
          Knowledge becomes powerful when it inspires action. May these insights help illuminate
          pathways toward flourishing, transformation, and lasting impact.
        </p>
      </Reveal>
    </>
  );
}
