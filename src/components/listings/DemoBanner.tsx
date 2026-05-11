export function DemoBanner() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 rounded-2xl border border-lime-400/30 bg-lime-400/5 px-5 py-4">
      <span className="tag-lime shrink-0">Demo Data</span>
      <p className="text-[13px] leading-relaxed text-white/85">
        These are sample listings from Spark's demo dataset (mostly outside
        Utah). Real St. George inventory turns on automatically the moment
        Kayden's MLS-approved API key replaces the demo token in{" "}
        <code className="font-mono text-[12px] text-lime-400">SPARK_API_KEY</code>.
        Pipeline, photos, filters, detail pages — all confirmed working.
      </p>
    </div>
  );
}
