"use client";
import { useState } from "react";
import { openWhatsApp } from "./WaButton";
import { BOOK_DISCOVERY_MSG, VALIDATION_MSG } from "@/lib/pages";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`chat-widget${open ? " open" : ""}`}>
      <div className="chat-panel">
        <div className="chat-head">
          <div className="avatar">EG</div>
          <div>
            <div className="who">EduCrescendo Global™</div>
            <div className="status">Typically replies within a few hours</div>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-msg">
            👋 Hi there! Have a question about flourishing education, validation programmes, or
            partnerships? We&apos;re happy to help.
          </div>
          <div className="chat-quick">
            <button onClick={() => openWhatsApp(BOOK_DISCOVERY_MSG)}>
              Book a Discovery Conversation
            </button>
            <button onClick={() => openWhatsApp(VALIDATION_MSG)}>
              Apply for the Validation Partnership Programme
            </button>
            <button onClick={() => openWhatsApp("Hi, I have a general question for EduCrescendo Global.")}>
              General Question
            </button>
          </div>
        </div>
        <div className="chat-foot">
          <button
            className="btn btn-primary"
            onClick={() => {
              openWhatsApp("Hi, I'd like to chat with EduCrescendo Global.");
              setOpen(false);
            }}
          >
            Start Chat on WhatsApp
          </button>
        </div>
      </div>
      <button className="chat-bubble" aria-label="Open live chat" onClick={() => setOpen((v) => !v)}>
        {!open && <span className="chat-dot" />}
        {!open ? (
          <svg viewBox="0 0 24 24" stroke="#fff" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" stroke="#fff" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        )}
      </button>
    </div>
  );
}
