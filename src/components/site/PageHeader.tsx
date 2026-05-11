import { Container } from "./Container";
import { assets } from "@/lib/site-config";
import Image from "next/image";

export function PageHeader({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
}) {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.motoImage}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-25"
          unoptimized
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 60%, #0a0a0a 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <span className="tag-lime rise rise-d1">{eyebrow}</span>
        <h1 className="mt-6 display-caps text-5xl md:text-7xl lg:text-[96px] text-white rise rise-d2 max-w-5xl">
          {title}
          {italic && (
            <>
              <br />
              <span className="text-lime-400">{italic}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-white/75 rise rise-d3">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
