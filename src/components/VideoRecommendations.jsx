import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function createYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export default function VideoRecommendations({ items }) {
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
            className="flex h-full flex-col rounded-[26px] bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                <Icon className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-ink-100 px-3 py-1 text-sm font-semibold text-ink-700">
                {item.duration}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
              {item.speaker} • {item.channel}
            </p>
            <p className="mt-3 flex-1 text-base leading-relaxed text-ink-600">
              Best for: {item.focus}
            </p>

            <a
              href={createYouTubeSearchUrl(item.searchQuery)}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Open on YouTube
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>
        );
      })}
    </div>
  );
}
