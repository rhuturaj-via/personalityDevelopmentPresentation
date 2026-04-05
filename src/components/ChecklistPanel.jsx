export default function ChecklistPanel({ title, items, tone }) {
  return (
    <div className={`rounded-[24px] p-5 shadow-sm ${tone}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-3 text-base leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
