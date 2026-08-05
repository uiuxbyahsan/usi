import Reveal from './Reveal';
import { ArrowRight } from './icons';

const bars = [
  { label: 'Property', value: 82 },
  { label: 'Liability', value: 64 },
  { label: 'Workers Comp', value: 48 },
  { label: 'Cyber', value: 71 },
  { label: 'Auto', value: 38 },
];

export default function PathPlatform() {
  const max = Math.max(...bars.map((b) => b.value));

  return (
    <section id="path" className="bg-depth py-20 text-paper lg:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <Reveal>
            <div className="max-w-lg">
              <p className="eyebrow text-signal">Proprietary Technology</p>
              <h2 className="mt-4 font-display text-[26px] font-normal leading-tight sm:text-[32px]">
                PATH guides you through the entire risk control process.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                From identifying sources of loss to targeting the solutions that
                maximize return on investment. PATH turns your risk data
                into a clear, actionable plan.
              </p>
              <a href="#contact" className="btn-amber mt-8 text-white">
                Explore PATH
                <ArrowRight width={16} height={16} className="text-white" />
              </a>
            </div>
          </Reveal>

          {/* Right — graph without browser screen */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[8px] bg-white/[0.04] p-6 shadow-2xl ring-1 ring-paper/12 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[14px] font-semibold text-paper">
                  Loss Impact by Coverage Mix
                </h3>
                <span className="text-[11px] uppercase tracking-eyebrow text-paper/45">
                  Trailing 12 mo
                </span>
              </div>

              <div className="mt-7 flex h-52 items-end justify-between gap-3 sm:gap-4">
                {bars.map((b) => (
                  <div key={b.label} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-44 w-full items-end">
                      <div
                        className="w-full rounded-t-[4px]"
                        style={{
                          height: `${(b.value / max) * 100}%`,
                          background:
                            'linear-gradient(180deg, #FFA500 0%, rgba(255, 165, 0, 0.6) 100%)',
                        }}
                      >
                        <div className="pt-1 text-center text-[11px] font-medium text-white">
                          {b.value}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] leading-tight text-paper/55">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-paper/10 pt-4 text-[12px] text-paper/60">
                <span className="h-2 w-2 rounded-full bg-signal" />
                Modeled loss exposure, indexed to premium spend
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

