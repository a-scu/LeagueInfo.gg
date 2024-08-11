export default function Participants({ win, summonerPuuid, summonerTeam, opponentTeam }) {
  return (
    <div
      className={`max-410:pl-0 max-410:border-l-0 max-330:hidden flex gap-1 max-450:gap-0.5 max-800:pt-[5px] py-1 ${
        win ? "border-db-300" : "border-dr-300"
      }`}
    >
      <div className="flex max-450:w-16 max-500:w-20 w-24 flex-col gap-0.5 max-410:w-fit">
        {summonerTeam.map((participant) => (
          <div key={participant.puuid} className="flex items-center gap-1 max-450:gap-0.5">
            <div
              className={`overflow-hidden rounded size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square ${
                participant.puuid === summonerPuuid
                  ? `${
                      participant.win
                        ? "max-410:border-0 border-db-500"
                        : "max-410:border-0 border-dr-500"
                    }`
                  : ""
              }`}
            >
              <img
                src={participant.champIcon}
                alt=""
                className="object-cover bg-black pointer-events-none scale-115 size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square"
              />
            </div>

            <a
              href={participant.linkToProfile}
              className={`text-2xs max-410:hidden sm:text-xs truncate
               ${participant.puuid === summonerPuuid ? "text-white" : "text-gray-6"}
              `}
            >
              {participant.name}
            </a>
          </div>
        ))}
      </div>

      <div className="flex max-450:w-16 max-500:w-20 w-24 flex-col gap-0.5 max-410:w-fit">
        {opponentTeam.map((participant) => (
          <div key={participant.puuid} className="flex items-center gap-1 max-450:gap-0.5 text-end">
            <div className="overflow-hidden rounded size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square">
              <img
                src={participant.champIcon}
                alt=""
                className="object-cover bg-black pointer-events-none scale-115 size-3-5 min-size-3-5 sm:size-4 sm:min-size-4 aspect-square"
              />
            </div>

            <a
              href={participant.linkToProfile}
              className="truncate text-gray-6 text-2xs max-410:hidden sm:text-xs"
            >
              {participant.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
