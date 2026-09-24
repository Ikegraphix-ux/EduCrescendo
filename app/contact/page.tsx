import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import FieldTags from "@/components/FieldTags";
import WaButton from "@/components/WaButton";
import PageButton from "@/components/PageButton";
import WaForm from "@/components/WaForm";
import Icon from "@/components/Icons";
import { BOOK_DISCOVERY_MSG, GENERAL_CONTACT_MSG } from "@/lib/pages";
import { helpOptions } from "@/lib/content-data";

export const metadata = { title: "Contact — EduCrescendo Global™" };

export default function ContactPage() {
  return (
    <>
      <Hero slideshow={false}>
        <h1 style={{ maxWidth: 620 }}>Let&apos;s Build a Flourishing Future Together</h1>
        <p className="lead">
          Meaningful transformation begins with meaningful conversations. Whether you are exploring
          educational innovation, seeking transformational solutions, considering a validation
          programme, or interested in partnership opportunities, we would be delighted to connect
          with you. At EduCrescendo Global™, we believe flourishing grows through collaboration,
          shared learning, and purposeful action.
        </p>
        <WaButton message={BOOK_DISCOVERY_MSG}>Book a Discovery Conversation</WaButton>
        <PageButton href="/validation" variant="ghost-light" style={{ marginLeft: 12 }}>
          Apply for the Validation Partnership Programme
        </PageButton>
      </Hero>

      <Reveal>
        <p className="eyebrow center" style={{ justifyContent: "center" }}>How Can We Help?</p>
        <h2 className="center">Choose the Conversation That&apos;s Right for You</h2>
        <div className="grid g2" style={{ marginTop: 32 }}>
          {helpOptions.map((o) => (
            <div className="card" key={o.title}>
              <h3>{o.title}</h3>
              <p className="body" style={{ marginBottom: 8 }}>{o.body}</p>
              {o.note && <p className="body" style={{ fontSize: 12.5, color: "var(--text-3)", marginBottom: 14 }}>{o.note}</p>}
              {o.href ? (
                <PageButton href={o.href} variant="secondary" style={{ padding: "10px 18px", fontSize: 12.5, marginTop: 6 }}>
                  {o.cta}
                </PageButton>
              ) : (
                <WaButton
                  message={`Hi, I'd like to know more about: ${o.title}.`}
                  variant="secondary"
                  style={{ padding: "10px 18px", fontSize: 12.5, marginTop: 6 }}
                >
                  {o.cta}
                </WaButton>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="alt">
        <div className="grid g2">
          <div className="card">
            <h3>Send Us a Message</h3>
            <p className="body" style={{ marginBottom: 14 }}>We would love to hear from you.</p>
            <WaForm baseMessage={GENERAL_CONTACT_MSG}>
              <div className="form-grid">
                <div className="form-field"><label>Full Name</label><input name="name" placeholder="Your name" /></div>
                <div className="form-field"><label>Organisation / Institution</label><input name="org" placeholder="Your organisation" /></div>
                <div className="form-field"><label>Position / Role</label><input name="role" placeholder="Your role" /></div>
                <div className="form-field"><label>Email Address</label><input type="email" name="email" placeholder="you@institution.edu" /></div>
                <div className="form-field"><label>Phone Number</label><input type="tel" name="phone" placeholder="+233 ..." /></div>
                <div className="form-field"><label>Country</label><input name="country" placeholder="Your country" /></div>
                <div className="form-field full">
                  <label>Area of Interest</label>
                  <select name="interest_area" defaultValue="">
                    <option value="">Select an area</option>
                    <option>Discovery Conversation</option>
                    <option>Validation Partnership Programme</option>
                    <option>Partnership Opportunity</option>
                    <option>Speaking Engagement</option>
                    <option>Research Collaboration</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="form-field full"><label>Message</label><textarea name="message" placeholder="Tell us how we can help" /></div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: 4 }}>Send Message</button>
            </WaForm>
          </div>
          <div>
            <h3>FAQs</h3>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>Do I need to be a school to engage with EduCrescendo Global™?</b> No. We engage with a diverse range of educational, community, leadership, and development-focused organisations.</p></div>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>Are your solutions available internationally?</b> Yes. Many of our frameworks, tools, and programmes are designed for adaptation across diverse contexts.</p></div>
            <div className="card" style={{ marginBottom: 12 }}><p className="body"><b>Can we request a customised engagement?</b> Yes. We welcome conversations about context-specific needs and opportunities.</p></div>
            <div className="card"><p className="body"><b>How quickly can we expect a response?</b> We aim to respond promptly and typically acknowledge requests within a reasonable timeframe.</p></div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="eyebrow">Discovery Conversation Request</p>
        <h2>Start the Journey</h2>
        <p className="body" style={{ marginBottom: 16, maxWidth: 620 }}>
          If you are seeking practical ways to strengthen leadership, improve educational outcomes,
          cultivate flourishing, or explore innovative solutions, a discovery conversation is often
          the best place to begin.
        </p>
        <WaForm baseMessage="Hi, I'd like to request a Discovery Conversation with EduCrescendo Global.">
          <div className="form-grid">
            <div className="form-field"><label>Name</label><input name="name" placeholder="Your name" /></div>
            <div className="form-field"><label>Organisation</label><input name="org" placeholder="Your organisation" /></div>
            <div className="form-field"><label>Role</label><input name="role" placeholder="Your role" /></div>
            <div className="form-field"><label>Email</label><input type="email" name="email" placeholder="you@institution.edu" /></div>
            <div className="form-field"><label>Phone Number</label><input type="tel" name="phone" placeholder="+233 ..." /></div>
            <div className="form-field">
              <label>Preferred Meeting Format</label>
              <select name="meeting_format" defaultValue="">
                <option value="">Select</option>
                <option>Online Meeting</option>
                <option>Phone Call</option>
                <option>In-Person Meeting</option>
              </select>
            </div>
            <div className="form-field"><label>Preferred Date</label><input type="date" name="preferred_date" /></div>
            <div className="form-field full"><label>Additional Notes</label><textarea name="notes" placeholder="Anything else we should know" /></div>
          </div>
          <button type="submit" className="btn btn-primary">Request Conversation</button>
        </WaForm>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Partnership Opportunities</p>
        <h2>Advancing Transformation Together</h2>
        <p className="body" style={{ marginBottom: 16, maxWidth: 640 }}>
          The most significant challenges facing education require collaborative solutions.
          EduCrescendo Global™ actively seeks partnerships with organisations that share a
          commitment to flourishing and sustainable transformation. Potential partners include:
        </p>
        <FieldTags tags={["Schools", "School Networks", "Universities", "NGOs", "Foundations", "Government Agencies", "Faith-Based Organisations", "Community Organisations", "Research Institutions", "Innovation Hubs"]} />
        <WaButton
          message="Hi, I'd like to explore partnership opportunities with EduCrescendo Global."
          style={{ marginTop: 16 }}
        >
          Explore Partnership Opportunities
        </WaButton>
      </Reveal>

      <Reveal>
        <div className="grid g2" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Connect With Us</p>
            <h2>Stay Connected</h2>
            <p className="body" style={{ marginBottom: 12 }}>
              Follow EduCrescendo Global™ for insights, updates, research, opportunities, and
              thought leadership.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/edu.crescendo_global26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="https://www.facebook.com/share/1Rtf2PmVqS/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="https://www.tiktok.com/@educrescendo.glob?_r=1&_t=ZS-97o4ZG9b8Jp" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Icon name="tiktok" /></a>
            </div>
            <WaForm baseMessage="Hi, I'd like to subscribe to the EduCrescendo Global newsletter." style={{ marginTop: 14 }}>
              <div className="form-grid">
                <div className="form-field"><label>Name</label><input name="name" placeholder="Your name" /></div>
                <div className="form-field"><label>Email</label><input type="email" name="email" placeholder="you@institution.edu" /></div>
              </div>
              <button type="submit" className="btn btn-accent">Subscribe</button>
            </WaForm>
          </div>
          <div className="photo" style={{ minHeight: 200 }}>
            <div className="cap"><b>Map</b>Location placeholder</div>
          </div>
        </div>
      </Reveal>

      <Reveal className="alt">
        <p className="eyebrow">Location and Contact Information</p>
        <FieldTags tags={["Email: [Insert Official Email]", "Phone: [Insert Official Number]", "Office Address: [Insert Address]", "Business Hours: Mon–Fri, 8:00 AM–5:00 PM"]} />
      </Reveal>

      <Reveal className="center" style={{ background: "var(--blue-dark)", color: "#fff" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "#8fd6b0" }}>
          The Future Is Built Through Collaboration
        </p>
        <h2 style={{ color: "#fff", maxWidth: 600 }}>
          Transformation does not happen in isolation. It happens when visionary individuals and
          institutions come together around a shared commitment to growth, innovation, and
          flourishing.
        </h2>
        <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">Book a Discovery Conversation</WaButton>
        <WaButton message={GENERAL_CONTACT_MSG} variant="ghost-light" style={{ marginLeft: 10 }}>
          Contact Our Team
        </WaButton>
      </Reveal>

      <Reveal className="center" style={{ maxWidth: 480 }}>
        <p className="lead center" style={{ fontWeight: 600, color: "var(--text)" }}>
          Every flourishing future begins with a conversation. Let&apos;s start one today.
        </p>
      </Reveal>
    </>
  );
}
