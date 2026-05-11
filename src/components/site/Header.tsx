"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { agent } from "@/lib/site-config";

const NAV = [
  { href: "/search", label: "Search" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
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
              className="text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={agent.phoneHref}
            className="font-mono text-[12px] tracking-wide text-white/60 hover:text-white transition"
          >
            {agent.phone}
          </a>
          <Link
            href="/contact"
            className="bg-lime-400 text-black text-[13px] font-semibold tracking-[0.02em] px-5 py-2.5 rounded-full hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all"
          >
            Work With Kayden
          </Link>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-xl border-t border-white/[0.06]`}
      >
        <Container className="py-8 flex flex-col gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-lime-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-5 mt-3 border-t border-white/[0.08] space-y-2">
            <a
              href={agent.phoneHref}
              className="block font-mono text-sm text-white/70"
            >
              {agent.phone}
            </a>
            <a
              href={agent.emailHref}
              className="block font-mono text-sm text-white/70"
            >
              {agent.email}
            </a>
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center bg-lime-400 text-black text-[13px] font-semibold px-6 py-3 rounded-full"
          >
            Work With Kayden
          </Link>
        </Container>
      </div>
    </header>
  );
}
