import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — EduCrescendo Global™",
  description: "Terms for using the EduCrescendo Global website and its information.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Terms of Use</h1>
      <p className="legal-updated">Last updated: 25 September 2026</p>
      <p className="lead">
        By using the EduCrescendo Global™ website, you agree to use it responsibly and in
        accordance with these terms.
      </p>

      <h2>Website information</h2>
      <p className="body">
        The website shares general information about EduCrescendo Global, its educational
        frameworks, services, and areas of work. It is provided for information and discussion;
        it is not a substitute for advice tailored to your institution or circumstances. Contact
        us to discuss whether a service or programme is suitable for your needs.
      </p>

      <h2>Using this website</h2>
      <p className="body">
        You may view and share links to public pages for personal or organisational information.
        You agree not to misuse the site, interfere with its operation, attempt unauthorised access,
        or use its content in a way that violates applicable law or another person’s rights.
      </p>

      <h2>Content and marks</h2>
      <p className="body">
        Unless a page says otherwise, website text, graphics, and materials are presented by
        EduCrescendo Global™. FLOURISH™, FlourishScore™, and other EduCrescendo names and marks
        identify its work. Please contact us before reproducing substantial material or using our
        marks in a way that suggests endorsement.
      </p>

      <h2>Third-party services and links</h2>
      <p className="body">
        The site may link to or embed services operated by others, including Google Maps and
        WhatsApp. Those services are governed by their own terms and privacy practices. We do not
        control their availability or content.
      </p>

      <h2>Changes and contact</h2>
      <p className="body">
        We may update the website or these terms as our work develops. Continued use after a change
        means you accept the revised terms. Questions about these terms can be sent through our
        <Link href="/contact"> Contact page</Link> or to <a href="mailto:educrescendoglobal@gmail.com">educrescendoglobal@gmail.com</a>.
      </p>
    </main>
  );
}

