import Link from "next/link";
import { Container } from "@/components/site/Container";
import { agent, social, assets } from "@/lib/site-config";
import Image from "next/image";

export function ContactCTA() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      {/* Decorative background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.footerImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          unoptimized
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="tag-lime">Next Move</span>
            <h2 className="mt-6 display-caps text-5xl md:text-6xl lg:text-7xl text-white">
              Ready when<br />
              <span className="text-lime-400">you are.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-white/65 leading-relaxed">
              Three ways in. Pick whichever is easier — the answer comes back
              quick either way.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <a
            href={agent.phoneHref}
            className="group glass rounded-2xl p-8 md:p-10 transition-all"
          >
            <span className="tag-lime">Call</span>
            <div className="mt-6 display-caps text-2xl md:text-3xl text-white">
              {agent.phone}
            </div>
            <div className="mt-3 font-mono text-[12px] text-white/55">
              Answer in 15 min or less · 24/7 ok to text
            </div>
            <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400 opacity-80 group-hover:opacity-100 transition">
              Tap to call →
            </span>
          </a>

          <a
            href={agent.emailHref}
            className="group glass rounded-2xl p-8 md:p-10 transition-all"
          >
            <span className="tag-lime">Email</span>
            <div className="mt-6 display-caps text-xl md:text-2xl text-white break-all">
              {agent.email}
            </div>
            <div className="mt-3 font-mono text-[12px] text-white/55">
              For the long version
            </div>
            <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400 opacity-80 group-hover:opacity-100 transition">
              Open mail app →
            </span>
          </a>

          <a
            href={social.instagramBusiness.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-8 md:p-10 transition-all"
          >
            <span className="tag-lime">DM</span>
            <div className="mt-6 display-caps text-xl md:text-2xl text-white">
              {social.instagramBusiness.handle}
            </div>
            <div className="mt-3 font-mono text-[12px] text-white/55">
              The unfiltered tour reel
            </div>
            <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400 opacity-80 group-hover:opacity-100 transition">
              Slide in →
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
          <p className="font-mono text-[12px] text-white/55 max-w-md">
            Want the long-form intake instead? Tell Kayden what you're after.
          </p>
          <Link href="/contact" className="btn-lime">
            Open Contact Form →
          </Link>
        </div>
      </Container>
    </section>
  );
}
