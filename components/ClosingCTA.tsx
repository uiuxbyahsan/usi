import Reveal from './Reveal';

export default function ClosingCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-[30px] font-normal leading-tight sm:text-[40px]">
            Ready to See Your Risk Clearly?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-paper/75">
            Talk with an advisor who knows your industry and can pressure-test
            your current coverage in a single conversation.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <a href="#contact" className="btn-amber mt-9">
            Talk to an Advisor
          </a>
        </Reveal>
      </div>
    </section>
  );
}
