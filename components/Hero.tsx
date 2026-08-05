'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from './icons';

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-ink pt-[72px] text-paper"
    >
      <div className="shell grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
        {/* Left */}
        <div className="max-w-xl">
          <motion.p {...rise(0.05)} className="eyebrow text-signal">
            Enterprise Risk Strategy
          </motion.p>
          <motion.h1
            {...rise(0.12)}
            className="mt-5 font-display text-[36px] font-normal leading-[1.05] sm:text-[48px] lg:text-display"
          >
            Strategic Risk Guidance for the Next Stage of Growth
          </motion.h1>
          <motion.p
            {...rise(0.2)}
            className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/80"
          >
            From property risk to workforce benefits, we build tailored coverage
            strategy for every stage of your company&rsquo;s growth.
          </motion.p>
          <motion.div {...rise(0.28)} className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#contact" className="btn-amber">
              Start Your Risk Review
            </a>
            <a
              href="#services"
              className="link-text text-paper hover:text-signal"
            >
              View Our Services
              <ArrowRight width={16} height={16} />
            </a>
          </motion.div>
        </div>

        {/* Right — editorial photo with floating caption chip */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 },
              })}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-depth shadow-2xl sm:aspect-[5/5] lg:aspect-[4/4.4]">
            {/* Editorial subject: boardroom review moment */}
            <img
              src="/photos/hero.jpg"
              alt="Advisors and clients in a boardroom reviewing coverage strategy."
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
          </div>

          {/* Floating caption chip — solid --ink, not glass */}
          <div className="absolute bottom-5 left-5 max-w-[280px] rounded-[8px] bg-white p-5 shadow-xl ring-1 ring-ink/10">
            <p className="text-[14px] leading-snug text-ink">
              We manage the risk infrastructure behind{' '}
              <span className="font-medium text-ink">500,000+</span> growing
              businesses.
            </p>
            <a
              href="#path"
              className="link-text mt-3 text-[13px] text-signal hover:text-ink"
            >
              Explore Case Studies
              <ArrowRight width={14} height={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
