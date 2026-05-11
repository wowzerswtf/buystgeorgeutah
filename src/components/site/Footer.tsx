import Link from "next/link";
import { Container } from "./Container";
import { agent, brokerage, social, site } from "@/lib/site-config";
import { areas } from "@/lib/areas";
import { EmailButton } from "./EmailButton";

const PRIMARY = [
  { href: "/search", label: "Search Listings" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden border-t border-white/[0.06]">
      <Container className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* CTA block */}
          <div className="lg:col-span-5">
            <span className="tag-lime">Let's Talk</span>
            <h2 className="mt-6 display text-5xl md:text-6xl lg:text-7xl text-white">
              Ready when
              <br />
              <span className="text-lime-400">you are.</span>
            </h2>
            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              Whether you're scouting from across the country or already in
              town, the next conversation is the easy part. Call, text, or DM.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={agent.phoneHref} className="btn-lime">
                Call Kayden
              </a>
              <EmailButton variant="ghost" label="Send a Message" />
            </div>
          </div>

          {/* Areas */}
          <div className="lg:col-span-3">
            <div className="eyebrow">Areas</div>
            <ul className="mt-5 space-y-2.5">
              {areas.slice(0, 7).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-[14px] text-white/70 hover:text-lime-400 transition linky"
                  >
                    {a.name}, {a.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="lg:col-span-2">
            <div className="eyebrow">Site</div>
            <ul className="mt-5 space-y-2.5">
              {PRIMARY.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[14px] text-white/70 hover:text-lime-400 transition linky"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach */}
          <div className="lg:col-span-2">
            <div className="eyebrow">Reach</div>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={agent.phoneHref}
                  className="font-mono text-[13px] text-white/70 hover:text-lime-400 transition"
                >
                  {agent.phone}
                </a>
              </li>
              <li>
                <a
                  href={agent.emailHref}
                  className="font-mono text-[13px] text-white/70 hover:text-lime-400 transition break-all"
                >
                  {agent.email}
                </a>
              </li>
              <li className="pt-3">
                <a
                  href={social.instagramBusiness.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-white/70 hover:text-lime-400 transition"
                >
                  {social.instagramBusiness.handle}
                </a>
              </li>
              <li>
                <a
                  href={social.instagramPersonal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-white/70 hover:text-lime-400 transition"
                >
                  {social.instagramPersonal.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance bar */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="eyebrow">Compliance</div>
            <p className="mt-3 text-[12px] leading-relaxed text-white/65">
              {agent.fullName} · {agent.title} · {brokerage.state} License #{brokerage.agentLicense}
              <br />
              {brokerage.name}
              <br />
              Equal Housing Opportunity. All real estate advertised herein is subject to the Federal Fair Housing Act.
            </p>
          </div>
          <div className="md:text-right">
            <div className="eyebrow">© {new Date().getFullYear()}</div>
            <p className="mt-3 text-[12px] text-white/65">{site.name}</p>
          </div>
        </div>
      </Container>

      {/* Oversized decorative wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-6 md:-bottom-12 left-0 right-0 text-center display-caps text-[28vw] md:text-[20vw] leading-none text-white/[0.025] whitespace-nowrap"
      >
        ST.GEORGE
      </div>
    </footer>
  );
}
