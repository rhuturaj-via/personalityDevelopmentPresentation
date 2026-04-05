import { motion } from 'framer-motion';

export default function PillarGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-3xl bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className={`inline-flex rounded-2xl p-3 ${item.tone}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-600">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
