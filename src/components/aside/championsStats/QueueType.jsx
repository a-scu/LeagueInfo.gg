const QueueType = () => {
  return (
    <div className="flex gap-1 p-1 bg-main-1">
      <button className="flex-1 py-1 text-xs text-center rounded text-main-text bg-main-4">
        S2024 S1
      </button>

      <button className="flex-1 py-1 text-xs text-center rounded text-main-text hover:bg-main-2">
        Solo
      </button>

      <button className="flex-1 py-1 text-xs text-center rounded text-main-text hover:bg-main-2">
        Flex
      </button>
    </div>
  );
};

export default QueueType;
