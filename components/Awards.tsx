import Reveal from './Reveal';

const awards = [
  { src: '/awards/forbes-best-large-employers.png', alt: "Forbes America's Best Large Employers 2026 — 3-Year Champion" },
  { src: '/awards/fortune-gptw-financial-services.png', alt: 'Fortune Best Workplaces in Financial Services & Insurance 2025' },
  { src: '/awards/fortune-gptw-women.png', alt: 'Fortune Best Workplaces for Women 2025' },
  { src: '/awards/great-place-to-work-certified.png', alt: 'Great Place To Work Certified 2026–2027' },
  { src: '/awards/iba-top-insurance-employers.png', alt: 'Insurance Business America Top Insurance Employer 2018–2025' },
  { src: '/awards/best-places-to-work.png', alt: 'Business Insurance Best Places to Work 2020–2025' },
  { src: '/awards/best-places-to-work-women.png', alt: 'Best Places to Work for Women 2025' },
  { src: '/awards/americas-best-workplaces-2026.png', alt: "America's Best Workplaces 2026" },
  { src: '/awards/worlds-best-workplaces-gold.png', alt: 'AHA Well-being Works Better — Gold 2025' },
  { src: '/awards/top-100-agency-2025.png', alt: 'Insurance Journal Top 100 P/C Agency 2025' },
  { src: '/awards/mployer-advisor-2025.png', alt: 'Mployer Advisor Top Rated Employee Benefits Consultant 2025' },
  { src: '/awards/bb-wellness-national.jpg', alt: "Nation's Best and Brightest in Wellness Winner 2026" },
  { src: '/awards/national-best-benefits.jpg', alt: 'Best and Brightest Companies to Work For in the Nation 2026' },
];

export default function Awards() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-signal">Recognition &amp; Awards</p>
            <h2 className="mt-4 font-display text-[28px] font-normal leading-tight text-ink sm:text-display-sm">
              Recognized for the work and the workplace
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ash">
              National honors for the strategy we deliver and the culture behind it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 flex flex-wrap justify-center gap-4">
            {awards.map((a) => (
              <li
                key={a.src}
                className="flex h-28 w-40 items-center justify-center rounded-[8px] border border-ink/10 bg-white p-4 transition-shadow duration-300 hover:shadow-md"
                title={a.alt}
              >
                <img
                  src={a.src}
                  alt={a.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
