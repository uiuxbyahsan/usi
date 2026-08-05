import Reveal from './Reveal';

const stats = [
  { num: '1994', label: 'Founded as a Single Office' },
  { num: '$3B', label: 'Revenue Today' },
  { num: '10,500+', label: 'Associates Nationwide' },
  { num: '200', label: 'Offices, 500,000+ Clients Served' },
];

export default function StatStrip() {
  return (
    <section
      id="power-of-one"
      className="py-20 lg:py-24"
      style={{
        // --signal at 8% opacity over --paper
        backgroundColor: 'rgba(232, 135, 58, 0.08)',
      }}
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center text-signal">
            From One Office to One Industry Leader
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="text-center lg:border-l lg:border-ink/10 lg:px-6 lg:first:border-l-0">
                <div className="font-display text-[44px] font-medium leading-none text-insight sm:text-[52px]">
                  {s.num}
                </div>
                <div className="mx-auto mt-3 max-w-[180px] text-[14px] font-medium leading-snug text-ash">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-[15px] italic leading-relaxed text-ash">
            USI stands for Understand, Service, and Innovate &mdash; the three
            commitments behind every client relationship.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
