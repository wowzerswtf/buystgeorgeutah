import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative bg-[#0a0a0a] py-40 md:py-56">
          <Container>
            <span className="tag-lime">404</span>
            <h1 className="mt-6 display-caps text-6xl md:text-8xl lg:text-[160px] text-white">
              Off the<br />
              <span className="text-lime-400">map.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base md:text-lg text-white/65 leading-relaxed">
              The page you're after doesn't exist — or moved. Head home and
              start over, or call Kayden if you need a person.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/" className="btn-lime">
                Back to Home →
              </Link>
              <Link href="/contact" className="btn-ghost">
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
