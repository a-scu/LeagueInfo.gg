export default function Items({ win, items, isSummoner }) {
  console.log("itemssadasd", items);

  return (
    <div className="flex gap-px w-fit">
      {items.map((item, i) =>
        item ? (
          <img
            key={`item-${i + 1}`}
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={` rounded size-4-5 min-size-4-5 sm:size-5 sm:min-size-5 aspect-square last:rounded-full ${
              win
                ? isSummoner
                  ? "bg-db-100"
                  : "bg-db-300"
                : isSummoner
                ? "bg-dr-100"
                : "bg-dr-300"
            }`}
          />
        ) : (
          <div
            key={`item-${i + 1}`}
            className={` rounded size-4-5 min-size-4-5 sm:size-5 sm:min-size-5 aspect-square last:rounded-full ${
              win
                ? isSummoner
                  ? "bg-db-100"
                  : "bg-db-300"
                : isSummoner
                ? "bg-dr-100"
                : "bg-dr-300"
            }`}
          />
        )
      )}
    </div>
  );
}
