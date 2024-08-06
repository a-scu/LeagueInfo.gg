import Name from "./Name";
import Champion from "./Champion";
import Spells from "./Spells";
import Runes from "./Runes";
import Score from "./Score";
import KDA from "./KDA";
import Damage from "./Damage";
import CS from "./CS";
import Vision from "./Vision";
import Items from "./Items";
import Gold from "./Gold";

export default function TableBody({
  win,
  summonerPuuid,
  participants,
  teamKills,
  gameStats,
  isSummonerTeam,
}) {
  console.log(participants);

  return (
    <tbody className={`flex flex-col`}>
      {participants.map((participant, index) => {
        const isSummoner = participant.puuid === summonerPuuid;

        const highestRank = participant.ranked ? participant?.ranked?.highestRank : null;

        let score =
          index === 0 && isSummonerTeam
            ? "MVP"
            : index === 1 && isSummonerTeam
            ? "2nd"
            : index === 2 && isSummonerTeam
            ? "3rd"
            : index === 3 && isSummonerTeam
            ? "4th"
            : index === 4 && isSummonerTeam
            ? "5th"
            : index === 0
            ? "ACE"
            : index === 1
            ? "7th"
            : index === 2
            ? "8th"
            : index === 3
            ? "9th"
            : "10th";

        const scoreColor = score === "MVP" ? "bg-mvp" : score === "ACE" ? "bg-ace" : "bg-gray-6";

        const tier = participant.ranked
          ? participant.ranked[highestRank]?.tier === "CHALLENGER"
            ? "C"
            : participant.ranked[highestRank]?.tier === "GRANDMASTER"
            ? "G"
            : participant.ranked[highestRank]?.tier === "MASTER"
            ? "M"
            : participant.ranked[highestRank]?.tier === "DIAMOND"
            ? "D"
            : participant.ranked[highestRank]?.tier === "EMERALD"
            ? "E"
            : participant.ranked[highestRank]?.tier === "PLATINUM"
            ? "P"
            : participant.ranked[highestRank]?.tier === "GOLD"
            ? "G"
            : participant.ranked[highestRank]?.tier === "SILVER"
            ? "S"
            : participant.ranked[highestRank]?.tier === "BRONZE"
            ? "B"
            : participant.ranked[highestRank]?.tier === "IRON"
            ? "I"
            : "U"
          : "U";

        const rankColor = participant.ranked
          ? participant.ranked[highestRank]?.tier === "CHALLENGER"
            ? "bg-challenger border border-mvp text-white"
            : participant.ranked[highestRank]?.tier === "GRANDMASTER"
            ? "bg-red border border-orange text-white"
            : participant.ranked[highestRank]?.tier === "MASTER"
            ? "bg-purple-500 border border-master text-white"
            : participant.ranked[highestRank]?.tier === "DIAMOND"
            ? "bg-diamond text-white"
            : participant.ranked[highestRank]?.tier === "EMERALD"
            ? "bg-emerald text-white"
            : participant.ranked[highestRank]?.tier === "PLATINUM"
            ? "bg-platinum text-white"
            : participant.ranked[highestRank]?.tier === "GOLD"
            ? "bg-mvp text-white"
            : participant.ranked[highestRank]?.tier === "SILVER"
            ? "bg-silver text-white"
            : participant.ranked[highestRank]?.tier === "BRONZE"
            ? "bg-bronze text-white"
            : participant.ranked[highestRank]?.tier === "IRON"
            ? "bg-[#47433f] text-white"
            : "border text-gray-6 border-gray-6"
          : "border text-gray-6 border-gray-6";

        // ${
        //               index === 0 && isSummoner
        //                 ? win
        //                   ? "border-t border-t-blue-1"
        //                   : "border-t border-t-red-1"
        //                 : ""
        //             }

        return (
          <tr
            key={participant.puuid}
            className={`relative flex w-full p-1 justify-between items-center  ${
              isSummoner && (win ? "bg-db-300" : "bg-dr-300")
            }`}
          >
            <td className="flex gap-0.5 p-0">
              <div className="flex items-center gap-0.5">
                <Champion
                  champName={participant.champName}
                  champLevel={participant.champLevel}
                  champIcon={participant.champIcon}
                  score={score}
                  scoreColor={scoreColor}
                />
                <div className="flex items-center gap-px">
                  <Spells spells={participant.spells} />
                  <Runes runes={participant.runes} />
                </div>
              </div>

              <div className="flex flex-col gap-y-0.5 max-sm:max-w-[132px] max-w-[146px]">
                <div className="flex items-center justify-between my-auto gap-0.5">
                  <Name
                    name={participant.name}
                    tag={participant.tag}
                    linkToProfile={participant.linkToProfile}
                  />

                  <div className="flex gap-0.5">
                    {participant.ranked ? (
                      <span
                        className={`sm:hidden flex items-center justify-center text-center rounded size-3-5 aspect-square min-size-3-5 text-3xs ${rankColor}`}
                      >
                        {tier}
                        {participant.ranked[highestRank]?.rank || ""}
                      </span>
                    ) : (
                      <span
                        className={`sm:hidden flex items-center justify-center text-center rounded size-3-5 aspect-square min-size-3-5 text-3xs ${rankColor}`}
                      >
                        {tier}
                      </span>
                    )}

                    <span
                      className={`sm:hidden w-[26px] h-3.5 flex items-center justify-center text-center text-3xs text-white rounded-full ${scoreColor}`}
                    >
                      {score}
                    </span>
                  </div>
                </div>

                <Items win={participant.win} items={participant.items} isSummoner={isSummoner} />
              </div>
            </td>

            <td className="flex flex-col items-center justify-center w-16 gap-0.5 p-0 max-sm:hidden">
              <span
                className={`text-white px-1.5 py-0.5 text-2xs rounded-full w-fit ${scoreColor}`}
              >
                {score}
              </span>

              {participant.ranked ? (
                <span className="flex items-center justify-center rounded text-2xs text-gray-6">
                  {participant.ranked[highestRank]?.tier[0] +
                    participant.ranked[highestRank]?.tier.slice(1).toLowerCase() || "Unranked"}{" "}
                  {participant.ranked[highestRank]?.rank || ""}
                </span>
              ) : (
                <span className="flex items-center justify-center rounded text-2xs text-gray-6">
                  Unranked
                </span>
              )}
            </td>

            <KDA
              teamKills={teamKills}
              kills={participant.kills}
              deaths={participant.deaths}
              assists={participant.assists}
              largestMultiKill={participant.largestMultiKill}
              win={participant.win}
            />

            <Damage
              win={win}
              gameTopDamage={gameStats.gameTopDamage}
              damageToChampions={participant.damageToChampions}
              gameTopDamageTaken={gameStats.gameTopDamageTaken}
              damageTaken={participant.damageTaken}
            />

            <CS cs={participant.cs} csPerMinute={participant.csPerMinute} />

            <Vision
              visionScore={participant.visionScore}
              visionScorePerMinute={participant.visionScorePerMinute}
              controlWards={participant.controlWards}
              wards={participant.wards}
              wardsKilled={participant.wardsKilled}
            />

            <Gold gold={participant.gold} goldPerMinute={participant.goldPerMinute} />

            <td className="flex-col gap-0.5 items-center justify-center hidden p-0 text-center w-[46px] max-500:flex text-3xs text-gray-6">
              <span>
                {participant.cs} ({participant.csPerMinute})
              </span>{" "}
              <span>{participant.visionScore}</span>
              <span>
                {participant.gold < 1000 ? participant.gold : (participant.gold / 1000).toFixed(1)}K
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
