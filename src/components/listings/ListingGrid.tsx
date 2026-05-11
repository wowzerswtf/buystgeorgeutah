import type { SparkListing } from "@/lib/idx/types";
import { ListingCard } from "./ListingCard";

export function ListingGrid({
  listings,
  configured,
  total,
}: {
  listings: SparkListing[];
  configured: boolean;
  total: number;
}) {
  if (!configured) return <NotConfigured />;
  if (listings.length === 0) return <EmptyState />;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-white/65">
          {total.toLocaleString()} {total === 1 ? "listing" : "listings"} matched
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listings.map((l) => (
          <ListingCard key={l.Id} listing={l} />
        ))}
      </div>
    </div>
  );
}

function NotConfigured() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-white/[0.12] bg-white/[0.02] p-10 md:p-16 text-center">
      <span className="tag-lime">IDX · Pending Activation</span>
      <h2 className="mt-6 display-caps text-3xl md:text-4xl text-white max-w-2xl mx-auto">
        Live listings activate<br />
        <span className="text-lime-400">once credentials are added.</span>
      </h2>
      <p className="mt-6 max-w-xl mx-auto text-white/70 leading-relaxed">
        Kayden's Spark API application is pending approval at flexmls.com.
        Once the API key arrives, drop it into <code className="font-mono text-sm bg-white/[0.08] text-lime-400 px-1.5 py-0.5 rounded">SPARK_API_KEY</code> on the Vercel project — listings start streaming in within seconds.
      </p>
      <p className="mt-6 font-mono text-[11px] tracking-[0.16em] uppercase text-white/45">
        See docs/IDX_SETUP.md for the activation checklist
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
      <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/45">
        No matches
      </p>
      <h3 className="mt-5 display-caps text-2xl md:text-3xl text-white">
        Nothing matches that filter <span className="text-lime-400">yet.</span>
      </h3>
      <p className="mt-4 max-w-md mx-auto text-white/65">
        Loosen the price range, drop a bedroom count, or try a different city
        — Southern Utah inventory moves fast.
      </p>
    </div>
  );
}
