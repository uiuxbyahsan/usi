import Reveal from './Reveal';

const stats = [
  { num: '$762', label: 'avg. monthly family payroll contribution' },
  { num: '88%', label: 'of large employers self-funding' },
  { num: '59%', label: 'actively managing PBM contracts' },
];

export default function ReportPromo() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="shell">
        <Reveal>
          <div className="grid overflow-hidden rounded-[8px] bg-signal lg:grid-cols-[1.4fr_1fr]">
            {/* Left */}
            <div className="p-8 text-white sm:p-10 lg:p-12">
              <p className="eyebrow text-white/85">2026 Benefits Benchmarking Study</p>
              <h2 className="mt-4 max-w-lg font-display text-[26px] font-normal leading-tight text-white sm:text-[32px]">
                10,000+ organizations benchmarked. One clear picture of how your
                offerings stack up.
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.num}>
                    <div className="font-display text-[30px] font-medium leading-none text-white">
                      {s.num}
                    </div>
                    <div className="mt-2 text-[13px] leading-snug text-white/85">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-dark mt-9 text-white">
                Download the 2026 Report
              </a>
            </div>

            {/* Right — editorial photo, small: benefits / HR strategy meeting */}
            <div className="relative min-h-[220px] overflow-hidden bg-depth lg:min-h-full">
              <img
                src="/photos/report-promo.jpg"
                alt="HR and benefits strategy meeting."
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
