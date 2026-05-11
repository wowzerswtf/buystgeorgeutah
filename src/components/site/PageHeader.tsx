import { Container } from "./Container";

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
    <section className="relative bg-bone grain pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 0%, #f8efd9 0%, transparent 70%)",
        }}
      />
      <Container>
        <p className="eyebrow rise rise-d1">{eyebrow}</p>
        <h1 className="mt-5 font-display text-6xl md:text-7xl lg:text-[112px] leading-[0.92] tracking-[-0.035em] text-ink rise rise-d2 max-w-5xl">
          {title}
          {italic && (
            <>
              <br />
              <span className="italic font-light text-sandstone-deep">
                {italic}
              </span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft rise rise-d3">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
