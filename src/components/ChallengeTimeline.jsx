import { motion } from 'framer-motion';

export default function ChallengeTimeline({ steps }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="flex gap-4 rounded-[24px] bg-white p-4 shadow-sm md:p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-base leading-relaxed text-ink-600">{step.text}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
