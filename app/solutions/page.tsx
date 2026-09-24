import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import IconBadge from "@/components/IconBadge";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import Stepper from "@/components/Stepper";
import { BOOK_DISCOVERY_MSG } from "@/lib/pages";
import { solBlocks } from "@/lib/content-data";

export const metadata = { title: "Solutions — EduCrescendo Global™" };

export default function SolutionsPage() {
  return (
    <>
      <Hero backgroundImage={false} style={{ padding: "96px 56px 76px" }}>
        <p className="eyebrow">Solutions</p>
        <h1 style={{ maxWidth: 680 }}>Practical Solutions for Meaningful and Measurable Transformation</h1>
        <p className="lead">
          Transformational change does not occur by chance. It requires the right frameworks,
          tools, leadership, insights, and support systems. EduCrescendo Global™ develops and
          delivers innovative solutions that help educational institutions, leaders, educators,
          learners, and communities flourish. Our solutions are designed to move organisations from
          aspiration to action and from action to sustainable impact.
        </p>
        <WaButton message={BOOK_DISCOVERY_MSG}>Book a Discovery Conversation</WaButton>
        <PageButton href="/validation" variant="ghost-light" style={{ marginLeft: 12 }}>
          Apply for the Validation Partnership Programme
        </PageButton>
      </Hero>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>Framework</p>
        <h2 className="center" style={{ maxWidth: 620 }}>
          Understand deeply. Develop strategically. Transform sustainably.
        </h2>
        <p className="body center" style={{ maxWidth: 560, marginTop: 12 }}>
          Every solution within the EduCrescendo Global™ ecosystem is designed around this
          principle. Our solutions combine:
        </p>
        <FieldTags
          center
          tags={["Assessment", "Research", "Strategy", "Leadership Development", "Capacity Building", "Implementation Support", "Continuous Improvement"]}
        />
      </Reveal>

      {solBlocks.map((block, i) => (
        <Reveal className={i % 2 ? "" : "alt"} key={block.label}>
          <IconBadge name={block.icon} tone={i % 2 ? "green" : undefined} />
          <p className="eyebrow">{block.label}</p>
          <h2>{block.title}</h2>
          <p className="lead">{block.intro}</p>
          <div style={{ maxWidth: 760 }}>
            {block.items.map((it) => (
              <div className="card" style={{ marginBottom: 14 }} key={it.title}>
                <h3 style={{ fontSize: 16 }}>{it.title}</h3>
                <p className="body" style={{ marginBottom: it.tags.length ? 10 : 0 }}>{it.body}</p>
                {it.tags.length > 0 && <FieldTags tags={it.tags} />}
              </div>
            ))}
          </div>
          {block.cta && (
            <PageButton href="/flourish" variant="secondary" style={{ marginTop: 8 }}>
              {block.cta}
            </PageButton>
          )}
        </Reveal>
      ))}

      <Reveal className="alt">
        <p className="eyebrow">Research and Innovation</p>
        <h2>Advancing New Possibilities</h2>
        <p className="lead">
          Innovation is central to our work. EduCrescendo Global™ develops research-informed
          frameworks, tools, and systems designed to address emerging educational challenges and
          opportunities. Current areas of innovation include:
        </p>
        <div className="grid g3">
          {[
            ["FlourishScore™", "A comprehensive assessment tool for measuring student flourishing."],
            ["Flourishing Leadership™", "Developing leaders who foster flourishing environments."],
            ["Flourishing Schools™", "Creating school environments that promote student well-being."],
            ["Educational Transformation Frameworks", "Strategic approaches to reshaping educational practices."],
            ["School Intelligence Systems", "Data-driven solutions for improving school performance."],
            ["Future of Learning Initiatives", "Exploring innovative approaches to education."],
          ].map(([t, b]) => (
            <div className="card" key={t}><h3>{t}</h3><p className="body">{b}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>How We Work</p>
        <h2 className="center">Our Transformation Process</h2>
        <Stepper steps={["Discover", "Diagnose", "Design", "Develop", "Transform", "Flourish"]} />
        <p className="body center" style={{ maxWidth: 540, marginTop: 20 }}>
          This process ensures that solutions produce lasting impact rather than short-term
          improvements.
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Who We Serve</p>
        <h2>Diverse Educational Contexts</h2>
        <FieldTags tags={["Basic Schools", "Secondary Schools", "International Schools", "Faith-Based Schools", "Educational Networks", "NGOs", "Community Organisations", "Leadership Development Programmes", "Educational Startups", "Government and Development Agencies"]} />
      </Reveal>

      <Reveal>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Featured Opportunity</p>
            <h2>Become a Pioneer School</h2>
            <p className="body" style={{ marginBottom: 16 }}>
              Selected schools are invited to participate in validation initiatives that provide
              early access to innovative frameworks, tools, and transformation support. Benefits
              may include:
            </p>
            <FieldTags tags={["Baseline Diagnostics", "Leadership Support", "Strategic Insights", "Validation Participation Recognition", "Early Access to Innovation"]} />
            <PageButton href="/validation" variant="accent" style={{ marginTop: 16 }}>
              Apply for the Validation Partnership Programme
            </PageButton>
          </div>
          <Photo src="/images/edu/pioneer.jpg" alt="Pioneer School" minHeight={260} />
        </div>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#8fd6b0" }}>
          Ready to Accelerate Transformation?
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          Whether you are seeking to strengthen leadership, improve school culture, enhance learner
          outcomes, or build flourishing educational communities, we are ready to support your
          journey.
        </h2>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">Book a Discovery Conversation</WaButton>
        <WaButton message="Hi, I'd like to get in touch with EduCrescendo Global." variant="ghost-light" style={{ marginLeft: 10 }}>
          Contact Our Team
        </WaButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 560 }}>
        <p className="lead center" style={{ fontWeight: 600, color: "var(--text)" }}>
          Transformation happens when vision meets action. EduCrescendo Global™ exists to help
          educational communities move beyond aspiration and build pathways toward measurable
          flourishing and sustainable impact.
        </p>
      </Reveal>
    </>
  );
}

