import Link from "next/link";
import { Container } from "@/components/site/Container";
import { assets } from "@/lib/site-config";

export function SeeTheFullPicture() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="tag-lime">See the Full Picture</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
              Southern Utah,<br />
              <span className="text-lime-400">on the ground.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-white/65 leading-relaxed">
              Drone shots, walk-throughs, and the kind of context still
              photos miss. This is the corner of Utah Kayden grew up in.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[16/9] bg-white/[0.03]">
          <video
            src={assets.secondaryVideo}
            poster={assets.motoImage}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.7) 100%)",
            }}
          />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
                Reel · St. George, UT
              </div>
              <h3 className="mt-2 display-caps text-2xl md:text-3xl text-white">
                Where the deals get done.
              </h3>
            </div>
            <Link href="/search" className="btn-lime">
              Browse Homes →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
