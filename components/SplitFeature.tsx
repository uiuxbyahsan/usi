import Reveal from './Reveal';
import { Check } from './icons';

const points = [
  'Financial risk modeling for underwriting, forecasting, and planning',
  'Go-to-market coverage strategies and growth-stage playbooks',
  'Real-time analytics through USI PATH',
];

export default function SplitFeature() {
  return (
    <section id="expertise" className="bg-paper py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — editorial photo: two advisors reviewing a report */}
        <Reveal>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[8px] bg-depth shadow-xl">
            <img
              src="/photos/advisors.jpg"
              alt="Two risk advisors reviewing a coverage report together."
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.08}>
          <div className="max-w-xl">
            <p className="eyebrow text-signal">Our Expertise</p>
            <h2 className="mt-4 font-display text-[28px] font-normal leading-tight text-ink sm:text-display-sm">
              Solving Complexity with Risk Clarity
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ash">
              We specialize in turning fast-moving risk challenges into structured
              strategies. Our team combines national resources with local
              expertise to accelerate growth and simplify decisions.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-insight/10 text-insight">
                    <Check width={15} height={15} />
                  </span>
                  <span className="text-[16px] leading-snug text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <a href="#services" className="btn-amber mt-9">
              Learn More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
