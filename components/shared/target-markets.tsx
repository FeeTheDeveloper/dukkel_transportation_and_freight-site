import { targetMarkets } from "@/lib/data";

type TargetMarketsProps = {
  className?: string;
};

// Market focus only. The disclaimer is part of the component so the list is
// never shown without it.
export function TargetMarkets({ className = "" }: TargetMarketsProps) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">Markets we are pursuing</p>
      <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
        {targetMarkets.map((market) => (
          <li key={market} className="flex items-center gap-3 py-3 text-white/90">
            <span aria-hidden="true" className="h-1.5 w-1.5 flex-none bg-accent" />
            {market}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-white/55">
        Market focus only. This list does not represent current clients, endorsements, or awarded contracts.
      </p>
    </div>
  );
}
