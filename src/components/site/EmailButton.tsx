"use client";

import { useEffect, useRef, useState } from "react";
import { agent } from "@/lib/site-config";

type Variant = "lime" | "ghost" | "cream";

const EMAIL = agent.email;
const SUBJECT = "Reaching out via BuyStGeorgeUtah";
const BODY =
  "Hi Kayden,%0D%0A%0D%0AI'm reaching out about real estate in Southern Utah. ";

function gmailUrl() {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${encodeURIComponent(SUBJECT)}&body=${BODY}`;
}
function outlookUrl() {
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    EMAIL,
  )}&subject=${encodeURIComponent(SUBJECT)}`;
}
function yahooUrl() {
  return `https://compose.mail.yahoo.com/?to=${encodeURIComponent(
    EMAIL,
  )}&subject=${encodeURIComponent(SUBJECT)}`;
}
function mailtoUrl() {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    SUBJECT,
  )}&body=${BODY}`;
}

export function EmailButton({
  variant = "lime",
  className = "",
  label = "Email Kayden",
  fullWidth = false,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
  fullWidth?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click + Esc
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Older browsers — fall back to a select-and-prompt
      window.prompt("Copy this email address:", EMAIL);
    }
  }

  const buttonClass =
    variant === "lime"
      ? "bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]"
      : variant === "cream"
        ? "bg-cream text-ink hover:bg-lime-300"
        : "bg-white/[0.03] border border-white/[0.12] text-white hover:bg-white/[0.07] hover:border-white/[0.25]";

  return (
    <div
      ref={wrapperRef}
      className={`relative ${fullWidth ? "w-full" : "inline-flex"} ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`${fullWidth ? "w-full" : ""} inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] font-bold transition-all ${buttonClass}`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-[280px] rounded-2xl border border-white/10 bg-[#141414] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-white/10">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/55">
              Email Kayden At
            </div>
            <div className="mt-1 font-mono text-[13px] text-white break-all">
              {EMAIL}
            </div>
          </div>

          <MenuItem
            href={gmailUrl()}
            external
            iconPath="M22.5 5.5A2.5 2.5 0 0 0 20 3H4A2.5 2.5 0 0 0 1.5 5.5v13A2.5 2.5 0 0 0 4 21h16a2.5 2.5 0 0 0 2.5-2.5z M2 6l10 7L22 6"
          >
            Open in Gmail
          </MenuItem>
          <MenuItem
            href={outlookUrl()}
            external
            iconPath="M2 6l10 7L22 6 M2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6"
          >
            Open in Outlook
          </MenuItem>
          <MenuItem
            href={yahooUrl()}
            external
            iconPath="M2 6l10 7L22 6 M2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6"
          >
            Open in Yahoo Mail
          </MenuItem>
          <MenuItem
            href={mailtoUrl()}
            iconPath="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          >
            Open Default Mail App
          </MenuItem>
          <button
            type="button"
            onClick={copy}
            className="w-full flex items-center gap-3 px-5 py-3.5 text-left text-white text-[13px] hover:bg-white/[0.04] transition-colors border-t border-white/10"
            role="menuitem"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className={copied ? "text-lime-400" : ""}
            >
              {copied ? (
                <path d="M20 6 9 17l-5-5" />
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </>
              )}
            </svg>
            <span className={copied ? "text-lime-400" : ""}>
              {copied ? "Copied!" : "Copy Email Address"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  href,
  iconPath,
  external = false,
  children,
}: {
  href: string;
  iconPath: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      role="menuitem"
      className="flex items-center gap-3 px-5 py-3.5 text-white text-[13px] hover:bg-white/[0.04] transition-colors"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={iconPath} />
      </svg>
      <span className="flex-1">{children}</span>
      {external && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
          aria-hidden
        >
          <path d="M7 17 17 7 M7 7h10v10" />
        </svg>
      )}
    </a>
  );
}
