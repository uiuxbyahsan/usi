'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Property & Casualty', href: '#services' },
  { label: 'Employee Benefits', href: '#services' },
  { label: 'Case Studies', href: '#path' },
  { label: 'About', href: '#power-of-one' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper transition-all duration-300 ease-out ${
        scrolled || open ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="shell flex h-[72px] items-center justify-between">
        <a href="#overview" className="flex items-center gap-2" aria-label="USI home">
          <img src="/usi-logo.png" alt="USI Insurance Services" className="h-7 w-auto" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[14px] font-medium text-ink/85 transition-colors hover:text-signal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-amber hidden py-2.5 text-[14px] text-white sm:inline-flex">
            Talk to an Advisor
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] text-ink lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <ul className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-ink hover:text-signal"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-amber w-full text-white">
                Talk to an Advisor
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
