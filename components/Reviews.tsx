import Reveal from './Reveal';
import { Star } from './icons';

const reviews = [
  {
    quote:
      'USI’s PATH platform gave us total clarity on our commercial loss exposures and reduced our premium spend by 18% in year one.',
    author: 'David Miller',
    role: 'Chief Financial Officer, Apex Logistics',
    rating: 5,
  },
  {
    quote:
      'Their benefits benchmarking study was a game-changer. USI restructured our health plans to lift employee retention while controlling costs.',
    author: 'Sarah Jenkins',
    role: 'VP of Human Resources, Vertex Health',
    rating: 5,
  },
  {
    quote:
      'Fast, proactive, and deeply knowledgeable. Having a dedicated USI advisory team feels like a true extension of our executive suite.',
    author: 'Robert Chen',
    role: 'Chief Executive Officer, Horizon Manufacturing',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-paper py-20 lg:py-24 border-t border-ink/10">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white px-4 py-1.5 shadow-sm">
              <span className="flex items-center gap-0.5 text-signal">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={14} height={14} />
                ))}
              </span>
              <span className="text-[13px] font-semibold text-ink">
                4.8 / 5 (200+ Verified Reviews)
              </span>
            </div>
            <h2 className="mt-5 font-display text-[28px] font-normal leading-tight text-ink sm:text-display-sm">
              Trusted by Business Leaders Nationwide
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ash">
              See what our clients say about working with USI strategy and advisory teams.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-[8px] border border-ink/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div>
                  <div className="flex items-center gap-0.5 text-signal">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} width={15} height={15} />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/90 italic">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-ink/8 pt-4">
                  <div className="font-display text-[15px] font-semibold text-ink">
                    {r.author}
                  </div>
                  <div className="text-[13px] text-ash">{r.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
