function CS_Vision_Gold({ win, cs, csPerMinute, visionScore, gold }) {
  const formatGold = () => {
    if (gold < 1000) {
      return gold;
    } else if (gold < 10000) {
      return (gold / 1000).toFixed(3).replace(".", ",");
    } else if (gold < 1000000) {
      return (gold / 1000).toFixed(3).replace(".", ",");
    }
  };

  return (
    <div
      className={`flex flex-col self-start h-full max-330:pl-0 w-24 pl-1 max-sm:gap-px mx-auto border-l max-330:ml-auto max-330:items-end max-330:mx-0 gap-x-2 max-330:border-l-0 max-sm:w-20 dark:text-dg-500 text-lg-500 text-3xs sm:text-2xs ${
        win
          ? "border-lb-200 dark:border-db-300"
          : "border-lr-200 dark:border-dr-300"
      }`}
    >
      <span>
        CS {cs} ({csPerMinute})
      </span>
      <span>Vision Score {visionScore}</span>
      <span>Gold {formatGold()}</span>
    </div>
  );
}

export default CS_Vision_Gold;
