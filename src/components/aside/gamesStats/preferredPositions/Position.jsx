const Position = ({ games, pct, Icon, fetchingGamesStats }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative w-3.5 h-[50px] bg-gray-4">
        <div
          style={{ height: `${pct}%` }}
          className="absolute bottom-0 flex justify-center w-3.5 bg-blue"
        >
          {!fetchingGamesStats && (
            <span
              className={`absolute bottom-0 max-500:bottom-0.5 max-500:text-3xs text-2xs ${
                !games ? "text-gray-6" : "text-white"
              }`}
            >
              {games}
            </span>
          )}
        </div>
      </div>
      <Icon className="size-3.5" />
    </div>
  );
};

export default Position;
