"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGES, BOOK_DISCOVERY_MSG } from "@/lib/pages";
import WaButton from "./WaButton";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="nav">
        <Link href="/" className="logo">
          EduCrescendo<span>.</span>
        </Link>
        <div className="nav-right">
          <WaButton message={BOOK_DISCOVERY_MSG}>Book a Discovery Conversation</WaButton>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`nav-overlay${open ? " open" : ""}`}>
        <div className="backdrop" onClick={() => setOpen(false)} />
        <div className="panel">
          <div className="panel-top">
            <div className="logo">
              EduCrescendo<span>.</span>
            </div>
            <button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <ul>
            {PAGES.map((p) => (
              <li key={p.href} className={pathname === p.href ? "current" : ""}>
                <Link href={p.href}>{p.name}</Link>
              </li>
            ))}
          </ul>
          <div className="panel-cta">
            <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">
              Book a Discovery Conversation
            </WaButton>
            <p className="panel-tag">
              Advancing Human Flourishing.
              <br />
              Through Transformational Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
