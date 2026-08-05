import Reveal from './Reveal';
import { ArrowRight } from './icons';

const articles = [
  {
    category: 'Risk Strategy',
    title: 'Scaling Risk Infrastructure Without Overengineering It',
    excerpt:
      'Where growing companies add coverage complexity they don’t need — and how to strip it back.',
    date: 'Jul 2026',
    read: '6 min read',
  },
  {
    category: 'Employee Benefits',
    title: 'Why Benefits Strategy Fails Without Execution Support',
    excerpt:
      'A benchmark tells you where you stand. It doesn’t move the needle on its own.',
    date: 'Jun 2026',
    read: '5 min read',
  },
  {
    category: 'Property & Casualty',
    title: 'How to Build a Coverage Model That Actually Supports Growth',
    excerpt:
      'Structuring a coverage tower that flexes with headcount, revenue, and new exposure.',
    date: 'Jun 2026',
    read: '7 min read',
  },
];

export default function InsightsPreview() {
  return (
    <section id="insights" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="eyebrow text-signal">Executive Insights</p>
              <h2 className="mt-4 font-display text-[28px] font-normal leading-tight text-ink sm:text-display-sm">
                Fast Answers for Fast-Moving Risk
              </h2>
            </div>
            <a href="#insights" className="link-text text-ink hover:text-signal">
              View All Insights
              <ArrowRight width={15} height={15} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-[8px] border border-ink/12 bg-paper p-7 transition-colors duration-300 hover:border-ink/25">
                <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-signal">
                  {a.category}
                </span>
                <h3 className="mt-4 font-display text-[20px] font-medium leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash">
                  {a.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-[13px] text-ash">
                  <span>{a.date}</span>
                  <span className="h-1 w-1 rounded-full bg-ash/50" />
                  <span>{a.read}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
