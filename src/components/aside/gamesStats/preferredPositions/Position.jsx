const Position = ({ games, pct, Icon, fetchingGamesStats }) => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`relative w-3.5 h-[50px] ${
          fetchingGamesStats ? "bg-gray-2" : "bg-gray-4"
        } rounded-sm overflow-hidden`}
      >
        <div
          style={{ height: pct ? `${pct}%` : 0 }}
          className="absolute bottom-0 flex justify-center w-3.5 bg-blue"
        >
          {!fetchingGamesStats && (
            <span
              className={`absolute bottom-0 max-500:bottom-0.5 max-500:text-3xs text-2xs ${
                !games ? "text-gray-6" : "text-white"
              }`}
            >
              {games || 0}
            </span>
          )}
        </div>
      </div>
      {fetchingGamesStats ? (
        <div className="size-3.5 rounded-full bg-gray-2" />
      ) : (
        <Icon
          loading={fetchingGamesStats}
          className={`size-3.5 ${
            fetchingGamesStats ? "opacity-50 text-gray-1 bg-gray-2 rounded-sm" : "text-gray-6"
          }`}
        />
      )}
    </div>
  );
};

export default Position;
