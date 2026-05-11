"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { agent } from "@/lib/site-config";

const NAV = [
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-ink-soft hover:text-ink transition-colors linky"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={agent.phoneHref}
            className="font-mono text-[12px] tracking-wide text-ink-muted hover:text-ink transition"
          >
            {agent.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] hover:bg-sandstone transition-colors"
          >
            Work with Kayden
          </Link>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-bone border-t hairline`}
      >
        <Container className="py-8 flex flex-col gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink hover:text-sandstone transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t hairline flex flex-col gap-2">
            <a
              href={agent.phoneHref}
              className="font-mono text-sm text-ink-muted"
            >
              {agent.phone}
            </a>
            <a
              href={agent.emailHref}
              className="font-mono text-sm text-ink-muted"
            >
              {agent.email}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
