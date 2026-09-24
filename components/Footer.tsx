import Link from "next/link";
import Icon from "./Icons";
import WaButton from "./WaButton";

export default function Footer() {
  return (
    <footer>
      <div className="grid g4">
        <div>
          <div className="tag">EduCrescendo Global™</div>
          <p style={{ fontSize: 13, color: "#a9c3d9", lineHeight: 1.7 }}>
            Advancing Human Flourishing.
            <br />
            Through Transformational Education.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/flourish">FLOURISH™ Ecosystem</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/validation">Validation Partnership Programme</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/edu.crescendo_global26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://www.facebook.com/share/1Rtf2PmVqS/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="https://www.tiktok.com/@educrescendo.glob?_r=1&_t=ZS-97o4ZG9b8Jp" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Icon name="tiktok" />
            </a>
          </div>
        </div>
        <div>
          <h3>Newsletter</h3>
          <input placeholder="you@institution.edu" />
          <WaButton
            message="Hi, I'd like to subscribe to the EduCrescendo Global newsletter."
            variant="accent"
            style={{ width: "100%", padding: 11 }}
          >
            Subscribe
          </WaButton>
        </div>
      </div>
      <div className="bottom">
        <span>© EduCrescendo Global™ — All rights reserved</span>
        <span>Privacy Policy · Terms</span>
      </div>
    </footer>
  );
}
