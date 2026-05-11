import { Container } from "@/components/site/Container";
import { specialties } from "@/lib/site-config";

export function Specialties() {
  return (
    <section className="relative bg-bone py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">IV · What</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-ink">
              The whole
              <br />
              <span className="italic font-light text-sandstone-deep">
                transaction stack.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base md:text-lg leading-relaxed text-ink-muted">
              From the first showing to the keys, from the listing photo to
              the close. Whatever side of the table you're on, you don't have
              to rebuild the team for each kind of deal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {specialties.map((s, i) => (
            <div
              key={s.slug}
              className={`group p-8 md:p-10 border-t border-l hairline ${
                i === specialties.length - 1 ? "lg:border-r" : ""
              } border-b hover:bg-paper transition-colors duration-500`}
            >
              <div className="eyebrow text-sandstone-deep">{s.eyebrow}</div>
              <h3 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.02em] leading-[0.95] text-ink">
                {s.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                {s.blurb}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft opacity-50 group-hover:opacity-100 group-hover:gap-3 group-hover:text-sandstone-deep transition-all">
                Talk to Kayden <span aria-hidden>→</span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
