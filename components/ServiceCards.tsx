import Reveal from './Reveal';
import { Shield, Heart, Home, ArrowRight } from './icons';
import type { ComponentType, SVGProps } from 'react';

type Card = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  bullets: string[];
};

const cards: Card[] = [
  {
    icon: Shield,
    title: 'Property & Casualty',
    desc: 'Coverage strategy and risk control for complex commercial exposures.',
    bullets: ['Coverage tower design', 'Loss control programs', 'Claims advocacy'],
  },
  {
    icon: Heart,
    title: 'Employee Benefits',
    desc: 'Benefits strategy built on real benchmarking data, not guesswork.',
    bullets: ['Benefits benchmarking', 'Self-funding strategy', 'PBM contract review'],
  },
  {
    icon: Home,
    title: 'Personal Risk',
    desc: 'Protection built around the way high-net-worth families actually live.',
    bullets: ['Homeowners & auto', 'Umbrella liability', 'Valuables & collections'],
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-signal">Our Solutions</p>
            <h2 className="mt-4 font-display text-[28px] font-normal leading-tight text-ink sm:text-display-sm">
              Tailored Solutions Across Every Line of Risk
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[8px] border border-ink/10 bg-white p-7 transition-shadow duration-300 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-ink text-paper">
                  <c.icon width={22} height={22} />
                </span>
                <h3 className="mt-6 font-display text-[22px] font-medium text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ash">{c.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-ink/8 pt-5">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[14px] text-ink"
                    >
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-insight" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="link-text mt-6 pt-1 text-ink hover:text-signal"
                >
                  Learn More
                  <ArrowRight width={15} height={15} />
                </a>
              </article>
            </Reveal>
          ))}

          {/* Highlighted amber card — the single deliberately bold card */}
          <Reveal delay={0.24}>
            <article className="flex h-full flex-col rounded-[8px] bg-signal p-7 text-ink">
              <h3 className="font-display text-[24px] font-medium leading-tight">
                Not sure where to start?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                Retirement Consulting, Programs, and Benefits Wholesale are also
                part of the USI ONE Advantage.
              </p>
              <div className="mt-auto pt-6">
                <a href="#services" className="btn-dark">
                  See All Services
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
