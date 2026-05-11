import Link from "next/link";
import { Container } from "./Container";
import { agent, brokerage, social, site } from "@/lib/site-config";
import { areas } from "@/lib/areas";

const PRIMARY = [
  { href: "/search", label: "Search Listings" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About Kayden" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-cream overflow-hidden">
      {/* Top decorative rule with serif kicker */}
      <Container className="pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="eyebrow text-cream/50">{site.tagline}</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
              Let's talk
              <br />
              <span className="italic text-sandstone">St. George.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              Whether you're scouting from across the country or already in town,
              the next conversation is the easy part. Call, text, or DM —
              {" "}
              <span className="text-cream">{agent.phone}</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={agent.phoneHref}
                className="px-5 py-3 bg-cream text-ink text-[12px] uppercase tracking-[0.16em] font-medium hover:bg-sandstone hover:text-cream transition"
              >
                Call Kayden
              </a>
              <a
                href={agent.emailHref}
                className="px-5 py-3 border border-cream/30 text-[12px] uppercase tracking-[0.16em] font-medium hover:bg-cream/10 transition"
              >
                Send a message
              </a>
            </div>
          </div>

          {/* Areas */}
          <div className="lg:col-span-3">
            <div className="eyebrow text-cream/40">Areas</div>
            <ul className="mt-5 space-y-2.5">
              {areas.slice(0, 7).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-[14px] text-cream/80 hover:text-sandstone transition linky"
                  >
                    {a.name}, {a.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary links */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-cream/40">Site</div>
            <ul className="mt-5 space-y-2.5">
              {PRIMARY.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[14px] text-cream/80 hover:text-sandstone transition linky"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-cream/40">Reach</div>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={agent.phoneHref}
                  className="font-mono text-[13px] text-cream/80 hover:text-sandstone transition"
                >
                  {agent.phone}
                </a>
              </li>
              <li>
                <a
                  href={agent.emailHref}
                  className="font-mono text-[13px] text-cream/80 hover:text-sandstone transition break-all"
                >
                  {agent.email}
                </a>
              </li>
              <li className="pt-3">
                <a
                  href={social.instagramBusiness.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-cream/80 hover:text-sandstone transition"
                >
                  {social.instagramBusiness.handle}
                </a>
              </li>
              <li>
                <a
                  href={social.instagramPersonal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-cream/80 hover:text-sandstone transition"
                >
                  {social.instagramPersonal.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance bar */}
        <div className="mt-20 pt-8 border-t border-cream/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="eyebrow text-cream/40">Compliance</div>
            <p className="mt-3 font-mono text-[11px] leading-relaxed text-cream/50">
              {agent.fullName} · {agent.title} · {brokerage.state} License #{brokerage.agentLicense}
              <br />
              {brokerage.name}
              <br />
              Equal Housing Opportunity. All real estate advertised herein is subject to the Federal Fair Housing Act.
            </p>
          </div>
          <div className="md:text-right">
            <div className="eyebrow text-cream/40">© {new Date().getFullYear()}</div>
            <p className="mt-3 font-mono text-[11px] text-cream/50">
              {site.name}.<br />Site by you, for the long haul.
            </p>
          </div>
        </div>
      </Container>

      {/* Oversized decorative wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-12 md:-bottom-24 left-0 right-0 text-center font-display text-[28vw] md:text-[22vw] leading-none tracking-[-0.05em] text-cream/[0.03] whitespace-nowrap"
      >
        St.&nbsp;George
      </div>
    </footer>
  );
}
