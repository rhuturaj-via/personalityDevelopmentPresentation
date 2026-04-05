import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function SectionCard({ id, eyebrow, title, description, children, accent = 'brand' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        'section-shell scroll-mt-28',
        accent === 'accent' && 'bg-gradient-to-br from-white to-accent-50/70',
        accent === 'ink' && 'bg-gradient-to-br from-white to-ink-50',
        accent === 'brand' && 'bg-gradient-to-br from-white to-brand-50/60'
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-600 md:text-lg">{description}</p>
      </div>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
