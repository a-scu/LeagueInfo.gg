export default function GameInfo({ win, queue, gameDuration, gameAge }) {
  return (
    <div
      className={`truncate gap-2 py-1.5 max-800:border-b 800:py-1.5 items-center 800:items-start p-2 max-410:pr-[46px] pr-16 800:px-0 left-0 max-800:pl-2.5 pl-4 800:static w-full justify-between absolute top-0 flex-row flex 800:flex-col 800:w-28 800:h-full text-2xs 800:text-xs dark:text-dg-500 text-lg-500 ${
        win
          ? "bg-lb-100 border-lb-200 dark:border-db-300 dark:bg-db-100"
          : "bg-lr-100 border-lr-200 dark:border-dr-300 dark:bg-dr-100"
      }`}
    >
      <div className="flex flex-row gap-x-2 800:flex-col">
        <p
          className={`font-medium ${
            win ? "text-lb-500 dark:text-db-500" : "text-red-500"
          }`}
        >
          {queue}
        </p>
        <p>{gameAge}</p>
      </div>

      <hr
        className={`800:flex hidden w-12 ${
          win
            ? "border-lb-200 dark:border-db-300"
            : "border-lr-200 dark:border-dr-300"
        }`}
      />

      <div className="flex flex-row gap-x-2 800:flex-col">
        <p className="font-medium">{win ? "Victory" : "Defeat"}</p>
        <p>{gameDuration}</p>
      </div>
    </div>
  );
}
