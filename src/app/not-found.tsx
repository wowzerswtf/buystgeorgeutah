import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-bone grain py-40 md:py-56">
          <Container>
            <p className="eyebrow">404</p>
            <h1 className="mt-5 font-display text-7xl md:text-9xl lg:text-[180px] leading-[0.88] tracking-[-0.04em] text-ink">
              Off the
              <br />
              <span className="italic font-light text-sandstone-deep">map.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base md:text-lg text-ink-muted leading-relaxed">
              The page you're after doesn't exist — or moved. Head home and
              start over, or call Kayden if you need a person.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
              >
                Back to home →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-ink/25 text-ink px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-ink hover:text-cream transition-colors"
              >
                Contact Kayden
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
