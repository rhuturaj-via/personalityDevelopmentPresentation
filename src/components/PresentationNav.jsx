import clsx from 'clsx';

export default function PresentationNav({ items, activeId, onSelect }) {
  return (
    <nav
      aria-label="Presentation sections"
      className="sticky top-4 z-20 flex gap-3 overflow-x-auto pb-1"
    >
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={clsx(
            'min-h-[44px] whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
            activeId === item.id
              ? 'bg-ink-900 text-white shadow-lg'
              : 'bg-white/85 text-ink-600 shadow-sm hover:-translate-y-0.5 hover:text-ink-900'
          )}
        >
          {index + 1}. {item.label}
        </button>
      ))}
    </nav>
  );
}
