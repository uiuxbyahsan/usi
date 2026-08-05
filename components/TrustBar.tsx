import { Star } from './icons';

export default function TrustBar() {
  return (
    <section className="bg-ink pb-12 pt-2 text-paper">
      <div className="shell">
        <p className="mx-auto max-w-3xl text-center text-[16px] leading-relaxed text-paper/75">
          From property risk to workforce benefits, we provide tailored strategy
          for every stage of your organization&rsquo;s growth.
        </p>

        <div className="mt-8 flex justify-center border-t border-paper/10 pt-6">
          <div className="flex items-center gap-2.5 whitespace-nowrap rounded-[6px] border border-paper/12 px-4 py-2">
            <span className="flex items-center gap-0.5 text-signal">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={14} height={14} />
              ))}
            </span>
            <span className="text-[13px] font-medium text-paper/80">
              4.8 &mdash; 200+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
