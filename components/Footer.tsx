'use client';

import { ArrowRight } from './icons';

const columns = [
  {
    heading: 'Company',
    links: ['About USI', 'Careers at USI', 'Investors', 'USI in the News'],
  },
  {
    heading: 'Services',
    links: [
      'Property & Casualty',
      'Employee Benefits',
      'Personal Risk',
      'Retirement Consulting',
      'Programs',
      'Benefits Wholesale',
    ],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Disclaimer', 'Commissions & Fees', 'Copyright'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Col 1 */}
          <div>
            <a href="#overview" aria-label="USI home">
              <img src="/usi-logo.png" alt="USI Insurance Services" className="h-8 w-auto brightness-0 invert" />
            </a>
            <address className="mt-6 not-italic text-[14px] leading-relaxed text-paper/65">
              100 Summit Lake Drive, Suite 400
              <br />
              Valhalla, NY 10595
            </address>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-paper/15 text-paper/70 transition-colors hover:border-signal hover:text-signal"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-paper/15 text-paper/70 transition-colors hover:border-signal hover:text-signal"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h6.9l4.8 6.4L18.9 2zm-2.4 18h1.9L7.6 3.9H5.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-semibold uppercase tracking-eyebrow text-paper/50">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-paper/75 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-paper/10 pt-8 md:flex-row md:items-center">
          <p className="text-[13px] text-paper/55">
            © {new Date().getFullYear()} USI Insurance Services. All rights reserved.
            {' '}
            <span className="text-paper/35">
              Concept redesign (not affiliated with USI).
            </span>
          </p>

          <form
            className="flex w-full max-w-sm items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Your email address"
              className="h-11 flex-1 rounded-[4px] border border-paper/15 bg-paper/5 px-4 text-[14px] text-paper placeholder:text-paper/40 focus:border-signal focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="btn-amber h-11 px-4"
            >
              <ArrowRight width={18} height={18} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
