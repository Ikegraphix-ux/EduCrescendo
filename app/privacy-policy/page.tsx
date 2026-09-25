import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — EduCrescendo Global™",
  description: "How EduCrescendo Global handles information when you use this website or contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: 25 September 2026</p>
      <p className="lead">
        This notice explains what happens to information when you visit the EduCrescendo Global™
        website or contact our team.
      </p>

      <h2>Information you choose to share</h2>
      <p className="body">
        The contact and programme enquiry forms on this website prepare a message for WhatsApp. The
        message may include the details you enter. It is not sent by the website: WhatsApp opens so
        you can review and choose whether to send it. If you contact us by email, phone, or
        WhatsApp, we receive the information you provide in that conversation.
      </p>

      <h2>How we use it</h2>
      <p className="body">
        We use information you send us to respond to enquiries, discuss services or partnerships,
        and follow up on requests. Please avoid sending sensitive personal information or
        identifiable information about children through this website or messaging links.
      </p>

      <h2>Services provided by others</h2>
      <p className="body">
        This website uses Google Fonts and includes a Google Maps embed on the Contact page. When
        those features load, your browser may connect to Google. WhatsApp handles messages only if
        you choose to continue and send them. These services have their own privacy practices and
        terms. The website is also delivered through a hosting provider, which may process
        technical request data to operate and protect the site.
      </p>
      <ul className="legal-list">
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        <li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp Privacy Policy</a></li>
      </ul>

      <h2>Storage and your choices</h2>
      <p className="body">
        The website does not create user accounts or submit its enquiry forms to a site database.
        Messages you send to us may be retained for as long as needed to respond and manage the
        relationship. To ask about information you have shared with us, or request its correction or
        deletion, email <a href="mailto:educrescendoglobal@gmail.com">educrescendoglobal@gmail.com</a>.
      </p>

      <h2>Ghana data protection information</h2>
      <p className="body">
        For information about Ghana’s data protection framework, see the Data Protection
        Commission’s <a href="https://dataprotection.org.gh/wp-content/uploads/2025/05/Data-Protection-Act-2012-Act-843.pdf" target="_blank" rel="noopener noreferrer">Data Protection Act, 2012 (Act 843)</a>.
      </p>

      <h2>Updates and contact</h2>
      <p className="body">
        We may update this notice when our website or practices change. The date at the top shows
        when it was last revised. If you have a privacy question, please <Link href="/contact">contact us</Link>.
      </p>
    </main>
  );
}

