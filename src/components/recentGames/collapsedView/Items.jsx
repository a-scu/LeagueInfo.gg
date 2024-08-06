export default function Items({ win, items }) {
  return (
    <div className="flex gap-0.5">
      {items.map((item, i) =>
        item ? (
          <img
            key={`item-${i}`}
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full ${
              win ? "bg-db-300" : "bg-dr-300"
            }`}
          />
        ) : (
          <div
            key={`item-${i}`}
            className={`rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full ${
              win ? "bg-db-300" : "bg-dr-300"
            }`}
          />
        )
      )}
    </div>
  );
}
