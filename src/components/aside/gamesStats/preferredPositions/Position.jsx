const Position = ({ games, pct, Icon }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative w-4 h-12 bg-main-4">
        <div
          style={{ height: `${pct}%` }}
          className="absolute bottom-0 flex justify-center w-4 bg-blue"
        >
          <span className="absolute bottom-0 text-white text-2xs">{games}</span>
        </div>
      </div>
      <Icon className="size-4" />
    </div>
  );
};

export default Position;
