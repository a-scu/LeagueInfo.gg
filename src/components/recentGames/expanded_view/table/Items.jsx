export default function Items({ win, items, isSummoner }) {
  return (
    <div className="flex gap-px w-fit">
      {items.map((item, i) =>
        item ? (
          <img
            key={`item-${i + 1}`}
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`bg-black rounded size-4-5 min-size-4-5 sm:size-5 sm:min-size-5 aspect-square last:rounded-full ${
              win
                ? isSummoner
                  ? "bg-lb-100 dark:bg-db-100"
                  : "bg-lb-200 dark:bg-db-300"
                : isSummoner
                ? "bg-lr-100 dark:bg-dr-100"
                : "bg-lr-200 dark:bg-dr-300"
            }`}
          />
        ) : (
          <div
            key={`item-${i + 1}`}
            className={`bg-black rounded size-4-5 min-size-4-5 sm:size-5 sm:min-size-5 aspect-square last:rounded-full ${
              win
                ? isSummoner
                  ? "bg-lb-100 dark:bg-db-100"
                  : "bg-lb-200 dark:bg-db-300"
                : isSummoner
                ? "bg-lr-100 dark:bg-dr-100"
                : "bg-lr-200 dark:bg-dr-300"
            }`}
          />
        )
      )}
    </div>
  );
}
