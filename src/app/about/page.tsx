import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { agent, brokerage, social, stats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Kayden Palmer",
  description:
    "Kayden Palmer was born and raised in Southern Utah. 144+ homes sold, 70+ five-star reviews. The local expert for St. George, Washington, Hurricane, Cedar City, Santa Clara, Ivins, La Verkin, and Mesquite NV.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="About"
          title="A local on"
          italic="purpose."
          intro="Most real estate is sold by people who could be selling anywhere. Kayden isn't. He's from here — and that changes the whole transaction."
        />

        <section className="bg-bone py-20 md:py-28">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 md:-inset-5 bg-sandstone/20 -z-10" />
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                  <Image
                    src={agent.headshot}
                    alt={agent.fullName}
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div>
                <p className="eyebrow">The Short Version</p>
                <p className="mt-4 font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] text-ink">
                  Born in St. George. Schooled in St. George. Sold 144 homes
                  and counting in St. George.
                </p>
              </div>

              <div className="prose prose-lg">
                <p className="text-base md:text-lg leading-relaxed text-ink-soft">
                  The thing about Southern Utah is that everybody who can move
                  here is moving here, and most of the people selling them
                  homes have only been here a year longer. I grew up on these
                  streets — the trail to Snow Canyon, the high school football
                  field at Dixie, the diner that's been in the same spot since
                  before the bypass got built. That's not nostalgia; it's
                  leverage.
                </p>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">
                  When you're buying or selling here, the agents at the other
                  end of every deal are people I already know. The builders.
                  The inspectors. The title officers. The folks who actually
                  set the comps in your zip code. I'm not learning the
                  network from your transaction — I'm using it for you.
                </p>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">
                  144+ homes sold says something. 70+ five-star reviews on
                  Zillow says something. But the part I'd rather you measure
                  me on is how I show up when the inspection report comes
                  back ugly, when the appraiser comes in low, when the seller
                  pulls something at the eleventh hour. That's where the work
                  actually is.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t hairline pt-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl tracking-[-0.03em] text-ink">
                      {s.value}
                    </div>
                    <div className="eyebrow mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">Credentials</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-ink">
                Licensed,
                <br />
                <span className="italic font-light text-sandstone-deep">
                  insured, accountable.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y hairline border-t border-b hairline">
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">Agent</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft">
                    {agent.fullName} · {agent.title}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">License</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft">
                    {brokerage.state} #{brokerage.agentLicense}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">Brokerage</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft">
                    {brokerage.name}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">Phone</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft">
                    <a href={agent.phoneHref} className="linky">
                      {agent.phone}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">Email</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft break-all">
                    <a href={agent.emailHref} className="linky">
                      {agent.email}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="eyebrow">Instagram</dt>
                  <dd className="col-span-2 font-mono text-sm text-ink-soft">
                    <a
                      href={social.instagramBusiness.url}
                      className="linky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.instagramBusiness.handle}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
                >
                  Start a conversation <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
