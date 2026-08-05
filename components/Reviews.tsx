'use client';

import { useState, useEffect } from 'react';
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
  {
    quote:
      'The risk control playbooks and claims advocacy delivered by USI saved our team hundreds of hours during complex underwriting reviews.',
    author: 'Elena Rostova',
    role: 'Managing Director, BluePeak Capital',
    rating: 5,
  },
  {
    quote:
      'From property risk modeling to employee health strategies, USI consistently delivers data-driven insights that directly impact our bottom line.',
    author: 'Marcus Thorne',
    role: 'Chief Operating Officer, Summit Infrastructure',
    rating: 5,
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-paper py-20 lg:py-24 border-t border-ink/10 overflow-hidden">
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

        {/* Carousel container */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden py-4 px-2">
            <div
              className="flex transition-transform duration-500 ease-out-soft"
              style={{
                transform: `translateX(-${activeIndex * 100}% )`,
              }}
            >
              {reviews.map((r) => (
                <div
                  key={r.author}
                  className="w-full flex-none px-3 md:w-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-[8px] border border-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
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
                </div>
              ))}
            </div>
          </div>

          {/* Nav Controls & Dots */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-transparent text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'w-7 bg-signal'
                      : 'w-2.5 bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-transparent text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
