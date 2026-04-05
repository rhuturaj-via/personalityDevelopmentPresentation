import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpenCheck,
  CircleCheckBig,
  Handshake,
  Lightbulb,
  NotebookPen,
  Sparkles,
} from 'lucide-react';
import PresentationNav from './components/PresentationNav';
import SectionCard from './components/SectionCard';
import PillarGrid from './components/PillarGrid';
import ChecklistPanel from './components/ChecklistPanel';
import ChallengeTimeline from './components/ChallengeTimeline';
import {
  challengeSteps,
  dos,
  donts,
  habits,
  highlights,
  pillars,
  slides,
} from './content';

const sectionIds = slides.map((slide) => slide.id);

export default function App() {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!observers.length) {
      return undefined;
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: [0.3, 0.55, 0.75] }
    );

    observers.forEach((section) => intersectionObserver.observe(section));
    return () => intersectionObserver.disconnect();
  }, []);

  const handleSelect = (id) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6">
        <PresentationNav items={slides} activeId={activeId} onSelect={handleSelect} />

        <section
          id="intro"
          className="relative mt-4 overflow-hidden rounded-[32px] bg-ink-900 px-5 py-7 text-white shadow-glow md:px-8 md:py-10"
        >
          <div className="absolute inset-0 bg-grid bg-[length:28px_28px] opacity-10" />
          <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-brand-400/30 blur-3xl" />
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-accent-400/20 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="pill-label border-white/15 bg-white/10 text-white">
                Grade 10 Presentation
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
                Personality Development:
                <span className="block text-brand-300">Build the best version of yourself</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-100 md:text-lg">
                A strong personality is built through habits, attitude, discipline, empathy, and
                communication. It is not about being perfect. It is about growing with purpose.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleSelect('meaning')}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-base font-semibold text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Start the Presentation
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect('challenge')}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
                >
                  Jump to 30-Day Challenge
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-[28px] bg-white/10 p-4 backdrop-blur"
            >
              <div className="rounded-[24px] bg-white p-5 text-ink-900 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-100 p-3 text-brand-700">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
                      Key Message
                    </p>
                    <h2 className="text-xl font-bold tracking-tight">Character beats image</h2>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-2xl bg-brand-50 p-3">
                      <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <p className="text-sm leading-relaxed text-ink-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mt-5 grid gap-5">
          <SectionCard
            id="meaning"
            eyebrow="Slide 2"
            title="What does personality development mean?"
            description="Personality development is the process of improving the way you think, communicate, behave, and handle situations. It helps you become more confident, responsible, and respected."
            accent="brand"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] bg-white p-5 shadow-sm">
                <BookOpenCheck className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">It starts inside</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-600">
                  Thoughts shape actions. Positive thinking improves discipline, patience, and
                  self-control.
                </p>
              </div>
              <div className="rounded-[24px] bg-white p-5 shadow-sm">
                <Handshake className="h-8 w-8 text-accent-600" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">It shows outside</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-600">
                  Your words, body language, manners, and behavior create your impression on
                  others.
                </p>
              </div>
              <div className="rounded-[24px] bg-white p-5 shadow-sm">
                <Lightbulb className="h-8 w-8 text-ink-700" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">It keeps changing</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-600">
                  Personality is not fixed. With practice and reflection, anyone can improve.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            id="pillars"
            eyebrow="Slide 3"
            title="Six pillars of a strong personality"
            description="A balanced personality does not depend on one talent. It grows when these habits work together every day."
            accent="accent"
          >
            <PillarGrid items={pillars} />
          </SectionCard>

          <SectionCard
            id="habits"
            eyebrow="Slide 4"
            title="Habits that students can start today"
            description="Strong personalities are built through repeatable actions. These are simple enough to begin this week and important enough to matter in the long run."
            accent="ink"
          >
            <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3">
                {habits.map((habit, index) => (
                  <motion.article
                    key={habit.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-[24px] bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-sm font-extrabold text-accent-700">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink-900">{habit.title}</h3>
                        <p className="mt-1 text-base leading-relaxed text-ink-600">{habit.text}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="space-y-4">
                <ChecklistPanel
                  title="Do"
                  items={dos}
                  tone="bg-accent-50 text-ink-800"
                />
                <ChecklistPanel
                  title="Avoid"
                  items={donts}
                  tone="bg-brand-50 text-ink-800"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard
            id="challenge"
            eyebrow="Slide 5"
            title="30-day personality growth challenge"
            description="Growth becomes real when students take action. This four-week challenge makes the presentation practical, personal, and easy to remember."
            accent="brand"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
              <ChallengeTimeline steps={challengeSteps} />

              <aside className="rounded-[28px] bg-ink-900 p-5 text-white shadow-glow md:p-6">
                <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  Final Thought
                </div>
                <p className="mt-5 text-2xl font-extrabold tracking-tight">
                  “Your future personality is shaped by what you practice now.”
                </p>
                <div className="mt-6 rounded-[24px] bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <NotebookPen className="h-6 w-6 text-brand-300" />
                    <h3 className="text-lg font-bold">Reflection prompt</h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-ink-100">
                    Which one habit would make the biggest difference in your life if you practiced
                    it every day for the next month?
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="pill-label border-white/10 bg-white/10 text-white">Confidence</span>
                  <span className="pill-label border-white/10 bg-white/10 text-white">Respect</span>
                  <span className="pill-label border-white/10 bg-white/10 text-white">Growth</span>
                </div>
              </aside>
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
