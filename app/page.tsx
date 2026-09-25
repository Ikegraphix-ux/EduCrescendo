import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import FlourishWheel from "@/components/FlourishWheel";
import Photo from "@/components/Photo";
import IconBadge from "@/components/IconBadge";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import { BOOK_DISCOVERY_MSG } from "@/lib/pages";
import { domainFocus } from "@/lib/content-data";

export default function HomePage() {
  return (
    <>
      <Hero variant="home">
        <div className="home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">A new rhythm for education</p>
            <h1>Where education helps <span>everyone flourish.</span></h1>
            <p className="lead">
              We help schools and communities turn human potential into lasting progress through
              thoughtful frameworks, meaningful insight, and practical transformation.
            </p>
            <div className="home-hero-actions">
              <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">Start a conversation</WaButton>
              <PageButton href="/flourish" variant="ghost-light">
                Explore FLOURISH™
              </PageButton>
            </div>
            <div className="home-hero-note">
              <span className="note-mark" aria-hidden="true">✳</span>
              <span>Grounded in people. Designed for real-world change.</span>
            </div>
          </div>
          <div className="home-hero-art">
            <div className="art-orbit art-orbit-one" aria-hidden="true" />
            <div className="art-orbit art-orbit-two" aria-hidden="true" />
            <FlourishWheel />
            <div className="art-caption"><span className="art-caption-dot" /> The FLOURISH™ ecosystem</div>
          </div>
        </div>
        <div className="home-proof" aria-label="Our approach">
          <span>Whole-person flourishing</span>
          <span>Evidence-informed insight</span>
          <span>Practical transformation</span>
        </div>
      </Hero>

      <Reveal>
        <p className="eyebrow">Why EduCrescendo Exists</p>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <h2>Innovative frameworks. Real assessment. Practical transformation.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              EduCrescendo Global™ builds the frameworks, assessment systems, and leadership models
              institutions need to move from intention to measurable transformation.
            </p>
          </div>
          <Photo
            src="/images/edu/leadership.jpg"
            alt="Leadership team in genuine conversation — natural light, unposed."
            minHeight={320}
            captionLabel="Imagery direction"
            caption="Leadership team in genuine conversation — natural light, unposed."
          />
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Impact Areas</p>
        <h2 className="center" style={{ maxWidth: 560 }}>Six flourishing domains, one ecosystem.</h2>
        <div className="grid g3" style={{ marginTop: 40 }}>
          {domainFocus.map((d, i) => (
            <div className="card" key={d.title}>
              <IconBadge name={d.icon} tone={i % 3 === 1 ? "green" : i % 3 === 2 ? "gold" : undefined} />
              <h3>{d.title}</h3>
              <p className="body">{shortBlurb(d.title)}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <Photo
            src="/images/edu/flouridh.jpg"
            alt="FlourishScore™ report being reviewed by a school leader."
            minHeight={320}
            captionLabel="Imagery direction"
            caption="FlourishScore™ report being reviewed by a school leader."
          />
          <div>
            <p className="eyebrow">FlourishScore™</p>
            <h2>Baseline diagnostics. Real insights. Strategic recommendations.</h2>
            <p className="lead">
              FlourishScore™ delivers baseline diagnostics, insights, progress tracking, and
              strategic recommendations for every institution we work with.
            </p>
            <PageButton href="/flourish">Explore FLOURISH™</PageButton>
          </div>
        </div>
      </Reveal>

      <Reveal className="alt center" style={{ maxWidth: 640 }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>Validation Invitation</p>
        <h2>Become a pioneer in educational transformation.</h2>
        <p className="lead center">
          Join the FlourishScore™ Validation Partnership Programme — early access to innovation,
          and recognition as a founding partner in the ecosystem.
        </p>
        <PageButton href="/validation" variant="accent">Apply for Validation</PageButton>
      </Reveal>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Insights</p>
        <h2 className="center">Ideas, research, and perspectives</h2>
        <div className="grid g3" style={{ marginTop: 36 }}>
          <div className="card">
            <Photo src="/images/edu/research.jpg" alt="Research desk" minHeight={130} />
            <h3 style={{ marginTop: 16 }}>Flourishing Education™</h3>
            <p className="body">Explore how flourishing can broaden the way we think about educational purpose and learner growth.</p>
          </div>
          <div className="card">
            <Photo src="/images/edu/leadership.jpg" alt="Leadership meeting" minHeight={130} />
            <h3 style={{ marginTop: 16 }}>Flourishing Leadership™</h3>
            <p className="body">Consider the leadership practices that help educators and school communities thrive.</p>
          </div>
          <div className="card">
            <Photo
              src="/images/edu/community.jpg"
              alt="Community gathering"
              minHeight={150}
              captionLabel="Community"
              caption="School transformation grows through meaningful collaboration."
            />
            <h3 style={{ marginTop: 16 }}>School Transformation</h3>
            <p className="body">See why meaningful collaboration is central to lasting school transformation.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff", padding: "96px 56px" }}>
        <h2 style={{ color: "#fff", maxWidth: 560 }}>Let&apos;s Build a Flourishing Future Together</h2>
        <p className="lead center" style={{ color: "#cfe0ee" }}>
          Start with a Discovery Conversation — no commitment, just clarity on fit.
        </p>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">Book a Discovery Conversation</WaButton>
      </Reveal>
    </>
  );
}

function shortBlurb(title: string) {
  const map: Record<string, string> = {
    "Flourishing Learners™": "Character, future-readiness, and wellbeing.",
    "Flourishing Educators™": "Professional development and educator wellbeing.",
    "Flourishing Leadership™": "Development, coaching, and leadership communities.",
    "Flourishing Schools™": "Transformation frameworks and improvement support.",
    "Flourishing Communities™": "Engagement, capacity-building, and partnerships.",
    "Flourishing Societies™": "Research and systems-level transformation.",
  };
  return map[title] ?? "";
}

