import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import Stepper from "@/components/Stepper";
import WaForm from "@/components/WaForm";
import { BOOK_DISCOVERY_MSG, VALIDATION_MSG } from "@/lib/pages";

export const metadata = { title: "Validation Partnership Programme — EduCrescendo Global™" };

export default function ValidationPage() {
  return (
    <>
      <Hero
        slideshow={false}
        style={{ background: "radial-gradient(circle at 80% 20%, #a06a10 0%, #6b4708 55%, var(--blue-dark) 100%)" }}
      >
        <p className="eyebrow" style={{ color: "#ffd98a" }}>Pioneer Institutions</p>
        <h1 style={{ maxWidth: 640 }}>Become a Pioneer in Educational Transformation</h1>
        <p className="lead">
          Great innovations are refined through collaboration with visionary institutions willing
          to explore new possibilities. EduCrescendo Global™ invites forward-thinking schools and
          educational organisations to participate in validation programmes designed to test,
          refine, and scale transformative solutions that advance flourishing and sustainable
          improvement. By becoming a validation partner, your institution gains early access to
          innovative frameworks, tools, insights, and support while contributing to the future of
          educational transformation.
        </p>
        <PageButton href="/validation" variant="accent">Apply for the Validation Partnership Programme</PageButton>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="ghost-light" style={{ marginLeft: 12 }}>
          Book a Discovery Conversation
        </WaButton>
      </Hero>

      <Reveal>
        <p className="eyebrow">Why Validation Programmes?</p>
        <h2>Innovation Through Partnership</h2>
        <p className="lead">
          Meaningful transformation requires more than good ideas. It requires real-world
          implementation, continuous learning, collaborative refinement, and measurable impact. Our
          validation programmes create opportunities for educational institutions to:
        </p>
        <div className="grid g3" style={{ marginTop: 8 }}>
          {[
            "Explore innovative solutions before wider release",
            "Contribute to the development of emerging frameworks and tools",
            "Receive valuable insights and support",
            "Strengthen leadership and organisational capacity",
            "Participate in shaping the future of flourishing education",
          ].map((b) => (
            <div className="card" key={b}><p className="body">{b}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Current Validation Opportunity</p>
        <h2>FlourishScore™ Validation Partnership Programme — Measuring What Matters</h2>
        <p className="lead" style={{ marginBottom: 0 }}>
          FlourishScore™ is a transformational assessment and intelligence system designed to help
          educational institutions understand, measure, and improve flourishing outcomes.
          Participating institutions will help test and refine the system while receiving
          meaningful insights that can inform strategic improvement efforts.
        </p>
      </Reveal>

      <Reveal>
        <p className="eyebrow">What Participating Schools May Receive</p>
        <div className="grid g3">
          {[
            ["diagnose", undefined, "Baseline Flourishing Assessment", "Establish a comprehensive understanding of current institutional strengths and opportunities."],
            ["leadership", "green", "Diagnostic Insights Report", "Receive structured insights that help identify key priorities for growth and development."],
            ["schools", "gold", "Strategic Improvement Recommendations", "Gain practical guidance for strengthening flourishing outcomes."],
            ["communities", undefined, "Leadership Reflection Sessions", "Engage school leaders in conversations around institutional growth and transformation."],
            ["star", "green", "Early Access to Innovation", "Participate in the development and refinement of emerging educational solutions."],
            ["shield", "gold", "Validation Recognition", "Be acknowledged as a contributing institution helping advance educational innovation."],
          ].map(([icon, tone, t, b]) => (
            <div className="card" key={t as string}>
              <IconBadge name={icon as any} tone={tone as any} />
              <h3>{t}</h3>
              <p className="body">{b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Who Should Apply?</p>
        <h2>Ideal Validation Institutions</h2>
        <div className="grid g2">
          <div className="card"><h3>Basic Schools</h3><p className="body">Seeking deeper understanding of learner, educator, and institutional flourishing.</p></div>
          <div className="card"><h3>Secondary Schools</h3><p className="body">Interested in strengthening culture, wellbeing, leadership, and educational outcomes.</p></div>
          <div className="card"><h3>International Schools</h3><p className="body">Committed to holistic excellence and innovative improvement approaches.</p></div>
          <div className="card"><h3>Faith-Based Schools</h3><p className="body">Seeking alignment between educational excellence, values formation, and flourishing.</p></div>
          <div className="card" style={{ gridColumn: "span 2" }}>
            <h3>Educational Networks</h3>
            <p className="body">Groups of schools interested in system-wide transformation and comparative insights.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">What We Look For in Validation Partners</p>
        <h2>Characteristics of Strong Validation Institutions</h2>
        <p className="body" style={{ marginBottom: 16 }}>We value institutions that demonstrate:</p>
        <FieldTags tags={["Openness to innovation", "Commitment to continuous improvement", "Leadership engagement", "Willingness to provide feedback", "Interest in long-term transformation", "Desire to contribute to broader educational impact"]} />
        <p className="body" style={{ marginTop: 16 }}>
          Validation participation is not dependent on institutional size, location, or current
          performance level. What matters most is a commitment to learning and growth.
        </p>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow center" style={{ justifyContent: "center" }}>The Validation Journey</p>
        <h2 className="center">What Participation Typically Looks Like</h2>
        <Stepper
          steps={[
            "1. Discovery Conversation",
            "2. Selection & Onboarding",
            "3. Assessment & Data Collection",
            "4. Insight Generation",
            "5. Reflection & Planning",
            "6. Feedback & Refinement",
            "7. Ongoing Engagement",
          ]}
        />
      </Reveal>

      <Reveal>
        <p className="eyebrow">Benefits of Early Participation</p>
        <h2>Why Join Now?</h2>
        <div className="grid g3">
          {[
            ["Early Access", "Engage with emerging solutions before public release."],
            ["Strategic Insights", "Gain valuable information to support institutional decision-making."],
            ["Influence Development", "Help shape tools and frameworks through direct feedback."],
            ["Learning Opportunities", "Participate in conversations and initiatives focused on flourishing and transformation."],
            ["Partnership Opportunities", "Build relationships within a growing network of educational innovators."],
          ].map(([t, b]) => (
            <div className="card" key={t}><h3>{t}</h3><p className="body">{b}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2">
          <div className="card">
            <h3>Validation Partnership Programme Application Form</h3>
            <p className="body" style={{ marginBottom: 12 }}>Apply to Become a Pioneer Institution.</p>
            <WaForm baseMessage={VALIDATION_MSG}>
              <div className="form-grid">
                <div className="form-field"><label>School / Organisation Name</label><input name="school" placeholder="e.g. St. Mary's Basic School" /></div>
                <div className="form-field">
                  <label>Institution Type</label>
                  <select name="type" defaultValue="">
                    <option value="">Select type</option>
                    <option>Basic School</option>
                    <option>Secondary School</option>
                    <option>International School</option>
                    <option>Faith-Based School</option>
                    <option>Educational Network</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field"><label>Contact Person</label><input name="contact" placeholder="Full name" /></div>
                <div className="form-field"><label>Position / Role</label><input name="role" placeholder="e.g. Headteacher" /></div>
                <div className="form-field"><label>Email Address</label><input type="email" name="email" placeholder="you@institution.edu" /></div>
                <div className="form-field"><label>Phone Number</label><input type="tel" name="phone" placeholder="+233 ..." /></div>
                <div className="form-field"><label>Location</label><input name="location" placeholder="City / Region" /></div>
                <div className="form-field"><label>Student Population</label><input name="students" placeholder="Approx. number" /></div>
                <div className="form-field"><label>Number of Staff</label><input name="staff" placeholder="Approx. number" /></div>
                <div className="form-field">
                  <label>Preferred Contact Method</label>
                  <select name="preferred_contact" defaultValue="">
                    <option value="">Select</option>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </select>
                </div>
                <div className="form-field full"><label>Why are you interested in participating?</label><textarea name="interest" placeholder="Tell us what draws you to this validation programme" /></div>
                <div className="form-field full"><label>Transformation priorities</label><textarea name="priorities" placeholder="What matters most for your institution right now" /></div>
              </div>
              <button type="submit" className="btn btn-primary">Start Application</button>
            </WaForm>
          </div>
          <div>
            <h3>FAQs</h3>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>Is participation free?</b> Arrangements may vary depending on the programme; details discussed during the discovery conversation.</p></div>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>How long do validation programmes last?</b> Duration varies based on objectives, scope, and context.</p></div>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>Does participation require major organisational change?</b> No. Designed to fit institutional realities and support gradual, meaningful progress.</p></div>
            <div className="card"><p className="body"><b>Can multiple schools participate together?</b> Yes. Educational networks and groups of schools may be considered.</p></div>
          </div>
        </div>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 560 }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>Testimonial</p>
        <h2>Voices of Future Transformation</h2>
        <p className="body center">
          As validation programmes expand, this section will feature experiences, insights, and
          stories from participating institutions.
        </p>
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#8fd6b0" }}>
          Help Shape the Future of Flourishing Education
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          Educational transformation requires courageous institutions willing to explore, learn,
          and innovate. If your school or organisation is committed to building environments where
          learners, educators, leaders, and communities flourish, we invite you to begin the
          conversation.
        </h2>
        <PageButton href="/validation" variant="accent">Apply for the Validation Partnership Programme</PageButton>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="ghost-light" style={{ marginLeft: 10 }}>
          Book a Discovery Conversation
        </WaButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 520 }}>
        <p className="lead center" style={{ fontWeight: 600, color: "var(--text)" }}>
          Every transformation journey begins with a single step. Today&apos;s validation
          institutions become tomorrow&apos;s leading examples of flourishing in action.
        </p>
      </Reveal>
    </>
  );
}
