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

  const csColor =
    +csPerMinute < 7
      ? "text-gray-6"
      : +csPerMinute < 8 && +csPerMinute >= 7
      ? "text-teal"
      : +csPerMinute < 7 && +csPerMinute >= 8
      ? "text-kdaBlue"
      : "text-orange";

  return (
    <div
      className={`flex flex-col self-start h-full max-330:pl-0 w-24 pl-1.5 max-sm:gap-px mx-auto border-l max-330:ml-auto max-330:items-end max-330:mx-0 gap-x-2 max-330:border-l-0 max-sm:w-20 text-gray-6 text-3xs sm:text-2xs ${
        win ? "border-db-300" : "border-dr-300"
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
