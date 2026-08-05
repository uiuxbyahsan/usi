import { Shield, Heart, Home, Compass } from './icons';
import type { ComponentType, SVGProps } from 'react';

type Area = {
  name: string;
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  img: string;
};

const areas: Area[] = [
  {
    name: 'Property & Casualty',
    desc: 'Coverage tower design and loss control for complex commercial exposures.',
    icon: Shield,
    img: '/photos/property-casualty.jpg',
  },
  {
    name: 'Employee Benefits',
    desc: 'Benchmark-driven benefits strategy that controls cost and lifts retention.',
    icon: Heart,
    img: '/photos/employee-benefits.jpg',
  },
  {
    name: 'Personal Risk',
    desc: 'Private client protection built around high-net-worth families.',
    icon: Home,
    img: '/photos/personal-risk.jpg',
  },
  {
    name: 'Retirement Consulting',
    desc: 'Plan design and fiduciary guidance that keeps your workforce on track.',
    icon: Compass,
    img: '/photos/retirement-consulting.jpg',
  },
];

export default function CoverageAreas() {
  return (
    <section className="bg-ink py-20 text-paper lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left — sticky heading + legend */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-signal">Coverage Areas</p>
          <h2 className="mt-4 max-w-md font-display text-[28px] font-normal leading-tight sm:text-display-sm">
            Tailored Solutions to Unlock Your Risk Potential
          </h2>

          <ul className="mt-9 space-y-1">
            {areas.map((a) => (
              <li key={a.name}>
                <div className="flex items-center gap-3 border-l-2 border-paper/15 py-3 pl-4 pr-3 text-[17px] text-paper">
                  <span className="text-signal">
                    <a.icon width={18} height={18} />
                  </span>
                  {a.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — stacked full-bleed cards with frosted glass */}
        <div className="space-y-6">
          {areas.map((a) => (
            <div
              key={a.name}
              className="relative overflow-hidden rounded-[8px] shadow-xl ring-1 ring-paper/10"
            >
              {/* photo card */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-depth">
                <img
                  src={a.img}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              </div>
              {/* frosted transparent glass anchored to bottom (Section 2 spec) */}
              <div className="glass-card absolute inset-x-0 bottom-0 flex items-center gap-4 rounded-b-[8px] p-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-paper/10 text-signal">
                  <a.icon width={20} height={20} />
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-medium text-paper">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-[14px] leading-snug text-paper/85">
                    {a.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
