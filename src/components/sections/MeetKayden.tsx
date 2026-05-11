import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { agent, brokerage, social } from "@/lib/site-config";

export function MeetKayden() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      {/* Big background-K wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 md:-left-12 -top-8 display-caps text-[40vw] md:text-[28vw] leading-[0.8] text-white/[0.025] select-none whitespace-nowrap"
      >
        LIVING LOCAL.
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 md:-inset-5 bg-lime-400/15 rounded-3xl -z-10"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <Image
                  src={agent.headshot}
                  alt={`${agent.fullName}, ${agent.title}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/60">
                      Licensed in
                    </div>
                    <div className="font-mono text-[13px] text-white mt-1">
                      {brokerage.state} #{brokerage.agentLicense}
                    </div>
                  </div>
                  <span className="tag-lime">REALTOR®</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="tag-lime">Living Local.</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
              St. George born.
              <br />
              <span className="text-lime-400">St. George raised.</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="text-base md:text-lg leading-relaxed text-white/75">
                  Real estate here isn't business — it's personal. The seller's
                  agent across the table grew up two blocks away. The framer
                  at your build site went to school with my brother. The
                  folks setting comps in your zip code are people I sit next
                  to at lunch.
                </p>
                <p className="mt-5 text-base leading-relaxed text-white/60">
                  144+ families helped buy, sell, and build across Southern
                  Utah. Out-of-state move? FaceTime tours in three time zones.
                  First home? Every line of every form explained. Investor?
                  Real STR numbers, not listing-agent numbers.
                </p>
              </div>

              <div className="md:col-span-5 md:pl-6 md:border-l border-white/[0.08]">
                <div className="eyebrow">Brokerage</div>
                <p className="mt-3 font-mono text-[13px] text-white/75 leading-relaxed">
                  {brokerage.name}
                </p>

                <div className="eyebrow mt-7">Find Kayden</div>
                <ul className="mt-3 space-y-1.5">
                  <li>
                    <a
                      href={social.instagramBusiness.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-white/75 hover:text-lime-400 transition linky"
                    >
                      {social.instagramBusiness.handle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={social.instagramPersonal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-white/75 hover:text-lime-400 transition linky"
                    >
                      {social.instagramPersonal.handle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/about" className="btn-lime">
                Full story →
              </Link>
              <a href={agent.phoneHref} className="btn-ghost">
                {agent.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
