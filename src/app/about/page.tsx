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
          title="A local"
          italic="on purpose."
          intro="Most real estate is sold by people who could be selling anywhere. Kayden isn't. He's from here — and that changes the whole transaction."
        />

        <section className="bg-[#0a0a0a] py-20 md:py-28">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 md:-inset-5 bg-lime-400/15 rounded-3xl -z-10"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08]">
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
                <span className="tag-lime">The Short Version</span>
                <p className="mt-6 display text-2xl md:text-3xl text-white leading-[1.2]">
                  Born in St. George. Schooled in St. George. Sold 144 homes
                  and counting in St. George.
                </p>
              </div>

              <div>
                <p className="text-base md:text-lg leading-relaxed text-white/75">
                  The thing about Southern Utah is that everybody who can
                  move here is moving here, and most of the people selling
                  them homes have only been here a year longer. I grew up on
                  these streets — the trail to Snow Canyon, the high school
                  football field at Dixie, the diner that's been in the same
                  spot since before the bypass got built. That's not
                  nostalgia; it's leverage.
                </p>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-white/65">
                  When you're buying or selling here, the agents at the
                  other end of every deal are people I already know. The
                  builders. The inspectors. The title officers. The folks
                  who actually set the comps in your zip code. I'm not
                  learning the network from your transaction — I'm using it
                  for you.
                </p>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-white/65">
                  144+ homes sold says something. 70+ five-star reviews
                  says something. But the part I'd rather you measure me on
                  is how I show up when the inspection report comes back
                  ugly, when the appraiser comes in low, when the seller
                  pulls something at the eleventh hour. That's where the
                  work actually is.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.08] pt-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="display-caps text-3xl md:text-4xl text-white">
                      {s.value}
                    </div>
                    <div className="eyebrow mt-2 text-lime-400/80">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#0e0e0e] py-20 md:py-28 border-y border-white/[0.06]">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="tag-lime">Credentials</span>
              <h2 className="mt-6 display-caps text-4xl md:text-5xl text-white">
                Licensed,
                <br />
                <span className="text-lime-400">insured, accountable.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                <Row label="Agent" value={`${agent.fullName} · ${agent.title}`} />
                <Row label="License" value={`${brokerage.state} #${brokerage.agentLicense}`} />
                <Row label="Brokerage" value={brokerage.name} />
                <Row
                  label="Phone"
                  value={
                    <a href={agent.phoneHref} className="linky">
                      {agent.phone}
                    </a>
                  }
                />
                <Row
                  label="Email"
                  value={
                    <a href={agent.emailHref} className="linky break-all">
                      {agent.email}
                    </a>
                  }
                />
                <Row
                  label="Instagram"
                  value={
                    <a
                      href={social.instagramBusiness.url}
                      className="linky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.instagramBusiness.handle}
                    </a>
                  }
                />
              </dl>

              <div className="mt-10">
                <Link href="/contact" className="btn-lime">
                  Start a Conversation →
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

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-5">
      <dt className="eyebrow">{label}</dt>
      <dd className="col-span-2 font-mono text-sm text-white/75">{value}</dd>
    </div>
  );
}
