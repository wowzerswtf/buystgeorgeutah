import { Container } from "@/components/site/Container";
import { stats } from "@/lib/site-config";

export function NumbersDontLie() {
  return (
    <section className="relative bg-[#0e0e0e] py-24 md:py-32 border-y border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-7">
            <span className="tag-lime">The Numbers Don't Lie</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
              A track record<br />
              <span className="text-lime-400">in red rock country.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-white/65 leading-relaxed">
              Volume matters because it means the systems are tested. Pricing,
              negotiation, contract management — they all get sharper the
              hundredth time around.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#0e0e0e] p-8 md:p-10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="display-caps text-5xl md:text-6xl lg:text-7xl text-white">
                {s.value}
              </div>
              <div className="eyebrow mt-3 text-lime-400/80">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
