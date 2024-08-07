// ···

export default function GameSkeleton() {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-none 800:rounded">
      <CollapsedView />
    </div>
  );
}

const CollapsedView = () => {
  return (
    <div className="w-full relative pt-[26px] pl-1 800:pl-1.5 800:pr-10 800:pt-0 flex bg-gray-1">
      <Decoration />
      <GameData />
      <ExpandButton />
    </div>
  );
};

const Decoration = () => {
  return <div className="z-10 w-1 absolute left-0 top-0 800:w-1.5 h-full bg-gray-4" />;
};

const ExpandButton = () => {
  return (
    <div className="flex items-center 800:h-full absolute top-0 right-0 justify-center 800:w-10 w-14 max-410:w-[39px] h-[30px] max-800:h-[26px] bg-gray-4" />
  );
};

const GameData = () => {
  return (
    <div className="flex items-center flex-1 px-1 max-330:py-1 sm:px-2">
      <GameInfo />

      <div className="flex flex-col flex-1 gap-1">
        <div className="flex">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Champion />

              <div className="flex gap-0.5 max-450:gap-px">
                <Spells />
                <Runes />
              </div>
            </div>

            <KDA />
          </div>

          <CS_Vision_Gold />
        </div>

        <div className="flex items-center gap-0.5 800:gap-1">
          <Items />
          <Score />
        </div>
      </div>

      <Participants />
    </div>
  );
};

const GameInfo = () => {
  return (
    <div className="border-gray-4 truncate gap-2 py-1.5 max-800:border-b 800:py-1.5 items-center 800:items-start p-2 max-410:pr-[46px] pr-16 800:px-0 left-0 max-800:pl-2.5 pl-4 800:static w-full justify-between absolute top-0 flex-row flex 800:flex-col 800:w-28 800:h-full text-2xs 800:text-xs text-gray-5">
      <div className="flex flex-row gap-x-2 800:flex-col">
        <p className="font-medium text-gray-5 max-800:hidden">···</p>
        <p>···</p>
      </div>

      <hr className="800:flex hidden w-12 border-gray-4" />

      <div className="flex flex-row gap-x-2 800:flex-col">
        <p className="font-medium max-800:hidden">···</p>
        <p>···</p>
      </div>
    </div>
  );
};

const Participants = () => {
  return (
    <div className="max-410:pl-0 max-410:border-l-0 max-330:hidden flex gap-1 max-450:gap-0.5 py-1 border-gray-4">
      <div className="flex max-450:w-16 max-500:w-20 w-24 flex-col gap-0.5 max-410:w-fit">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </div>

      <div className="flex max-450:w-16 max-500:w-20 w-24 flex-col gap-0.5 max-410:w-fit">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </div>
    </div>
  );
};

const Participant = () => {
  return (
    <div className="flex items-center gap-1 max-450:gap-0.5">
      <div className="overflow-hidden rounded size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square border-gray-4">
        <div className="object-cover bg-gray-4 pointer-events-none scale-115 size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square" />
      </div>

      <a className="text-2xs max-410:hidden sm:text-xs truncate text-gray-5">···</a>
    </div>
  );
};

const Items = () => {
  return (
    <div className="flex gap-0.5">
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
      <div className="rounded aspect-square max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 last:rounded-full bg-gray-4" />
    </div>
  );
};

const Score = () => {
  return (
    <div className="flex gap-0.5 text-transparent items-center text-2xs sm:text-xs border-l border-l-gray-4 pl-0.5 800:pl-1">
      <span className="px-2 py-0.5 rounded-full w-fit bg-gray-4">MVP</span>
    </div>
  );
};

const CS_Vision_Gold = () => {
  return (
    <div className="flex flex-col self-start h-full max-330:pl-0 w-24 pl-1.5 max-sm:gap-px mx-auto border-l max-330:ml-auto max-330:items-end max-330:mx-0 gap-x-2 max-330:border-l-0 max-sm:w-20 text-gray-5 text-3xs sm:text-2xs border-gray-4">
      <span>···</span>
      <span>···</span>
      <span>···</span>
    </div>
  );
};

const KDA = () => {
  return (
    <div className="flex flex-col flex-1 w-24 h-full justify-evenly max-sm:w-[76px]">
      {/* Kills / Deaths / Assists */}
      <span className="font-medium leading-none text-gray-5 max-sm:text-sm max-sm:leading-none">
        ···
        {" / "}
        <span className="text-gray-5">···</span>
        {" / "}
        ···
      </span>

      <div className="flex flex-col">
        {/* KDA */}
        <span className="text-xs max-sm:text-2xs text-gray-5 font-medium">···</span>

        {/* P/Kill */}
        <span className="text-2xs max-sm:text-2xs text-gray-5">···</span>
      </div>
    </div>
  );
};

const Champion = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-full max-sm:size-11-5 max-sm:min-size-11-5 size-12-5 min-size-12-5 aspect-square">
        <div className="object-cover bg-gray-4 rounded-full pointer-events-none size-12-5 min-size-12-5 max-sm:size-11-5 max-sm:min-size-11-5 aspect-square scale-115" />
      </div>
    </div>
  );
};

const Spells = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="object-cover bg-gray-4 rounded aspect-square max-sm:size-5-5 size-6 min-size-6 max-sm:min-size-5-5" />
      <div className="object-cover bg-gray-4 rounded aspect-square max-sm:size-5-5 size-6 min-size-6 max-sm:min-size-5-5" />
    </div>
  );
};

const Runes = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="object-cover bg-gray-4 rounded-full max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 aspect-square" />

      <div className="object-cover p-1 bg-gray-4 rounded-full max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 aspect-square" />
    </div>
  );
};
